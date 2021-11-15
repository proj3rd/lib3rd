import cheerio from 'cheerio';
const $ = cheerio;
import { readFileSync } from 'fs';
import { cloneDeep } from 'lodash';
import { Definition } from './classes/definition';
import { Definitions } from './classes/definitions';
import {
  IDefinition,
  IInformationElement,
} from './types';

const columnListMessageTable = [
  'IEI',
  'Information element',
  'Type / Reference',
  'Presence',
  'Format',
  'length',
];

/**
 * Regular expression for section. Following expressions are supported
 * - 9.1.2.3
 * - 9.1.2.3a
 * - A.1.2.3
 * - A.1.2.3a
 */
const reSection = /^(?<sectionNumber>[1-9A-Z]\d*?(\.[1-9]\d*?)*?\.[1-9]\w*?)\s+?(?<title>.+)$/;
//                                   ^ Head      ^ Middle       ^ Tail

/**
 * Regular expression for section number. Following expressions are supported
 * - 9.1.2.3
 * - 9.1.2.3a
 * - A.1.2.3
 * - A.1.2.3a
 */
export const reSectionNumber = /\b[1-9A-Z]\d*?(\.[1-9]\d*?)*\.[1-9]\w*?\b/;
//                         ^ Head      ^ Middle        ^ Tail

/**
 * Normalize HTML text with the followings:
 * - Fix a replacement character (U+FFFD)
 */
function normalize(text: string) {
  return text
    .replace(/\uFFFD/g, ' ');
}

function normalizeHtmlText(text: string) {
  return text.replace(/(\s|\n)+/g, ' ').trim();
}

// eslint-disable-next-line no-undef
function matchColumnsPerRow(trElement: cheerio.Element, columnList: string[]): boolean {
  const tdList = $('td', trElement);
  return (
    tdList.length >= columnList.length
    && columnList.every((column, index) => {
      const normalizedText = normalizeHtmlText($(tdList[index]).text());
      return normalizedText.toLowerCase() === column.toLowerCase();
    })
  );
}

// eslint-disable-next-line no-undef
function matchColumns(element: cheerio.Element, columnList: string[]): boolean {
  const trList = $('tr', element);
  const trHeader = trList[0];
  return matchColumnsPerRow(trHeader, columnList);
}

// eslint-disable-next-line no-undef
function isDefinitionTable(element: cheerio.Element): boolean {
  if (element.type !== 'tag' || element.name !== 'table') {
    return false;
  }
  return matchColumns(element, columnListMessageTable);
}

// eslint-disable-next-line no-undef
function getDirection(element: cheerio.Element): string | null {
  if (element.type !== 'tag' || element.name !== 'p') {
    return null;
  }
  const normalizedText = normalizeHtmlText($(element).text());
  if (!normalizedText.startsWith('Direction')) {
    return null;
  }
  // Correct incorrectly rendered rightwards arrow
  return normalizedText.replace(/\u00Ae/g, String.fromCharCode(0x2192));
}

// eslint-disable-next-line no-undef
function getMessageType(element: cheerio.Element): string | null {
  if (element.type !== 'tag' || element.name !== 'p') {
    return null;
  }
  const normalizedText = normalizeHtmlText($(element).text());
  if (!normalizedText.startsWith('Message type')) {
    return null;
  }
  // Correct incorrectly rendered rightwards arrow
  return normalizedText.replace(/\u00Ae/g, String.fromCharCode(0x2192));
}

// eslint-disable-next-line no-undef
function getSignificance(element: cheerio.Element): string | null {
  if (element.type !== 'tag' || element.name !== 'p') {
    return null;
  }
  const normalizedText = normalizeHtmlText($(element).text());
  if (!normalizedText.startsWith('Significance')) {
    return null;
  }
  // Correct incorrectly rendered rightwards arrow
  return normalizedText.replace(/\u00Ae/g, String.fromCharCode(0x2192));
}

// eslint-disable-next-line no-undef
function isParagraph(element: cheerio.Element): boolean {
  return element.type === 'tag' && element.name === 'p';
}

function getSectionInfo(
  // eslint-disable-next-line no-undef
  element: cheerio.Element,
): { sectionNumber: string; title: string } | null {
  const sectionTagList = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  if (element.type !== 'tag' || !sectionTagList.includes(element.name)) {
    return null;
  }
  const sectionText = normalizeHtmlText($(element).text());
  const matchResult = sectionText.match(reSection);
  if (!matchResult || !matchResult.groups) {
    return null;
  }
  const { sectionNumber, title } = matchResult.groups;
  return { sectionNumber, title };
}

// eslint-disable-next-line no-undef
function parseDefinitionTable(element: cheerio.Element): {
  ieList: IInformationElement[],
} {
  const trList = $('tr', element);
  const trListDefinition = trList.slice(1).toArray();
  const ieList: IInformationElement[] = [];
  trListDefinition.forEach((trElement) => {
    const tdList = $('td', trElement);
    let j = tdList.length - 1;
    // Find the last non-empty cell, which corresponds to `length`
    for (; j >= 0; j -= 1) {
      const td = normalizeHtmlText($(tdList[j]).text());
      if (td !== '') {
        break;
      }
    }
    const i = j - 6 + 1;
    const iei = normalizeHtmlText($(tdList[i]).text());
    const name = normalizeHtmlText($(tdList[i + 1]).text());
    const typeReference = normalizeHtmlText($(tdList[i + 2]).text());
    const presence = normalizeHtmlText($(tdList[i + 3]).text());
    const format = normalizeHtmlText($(tdList[i + 4]).text());
    const length = normalizeHtmlText($(tdList[i + 5]).text());
    const informationElement: IInformationElement = {
      iei,
      informationElement: name,
      typeReference,
      presence,
      format,
      length,
      depth: 0,
    };
    if (name === '') {
      // eslint-disable-next-line no-console
      console.log('Empty leading cell found');
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(informationElement, null, 4));
    }
    ieList.push(informationElement);
  });
  return { ieList };
}

export function parse(html: string): Definitions {
  // Break down the document into elements and put them into the list
  // The last element shall be put into the list first and popped from it last
  // eslint-disable-next-line no-undef
  const elementList: cheerio.Element[] = $(normalize(html))
    .map((index, element) => element)
    .get()
    .reverse();

  const definitionList: Definition[] = [];
  const definition: IDefinition = {
    sectionNumber: '',
    name: '',
    descriptionList: [],
    messageType: '',
    significance: '',
    direction: '',
    elementList: [],
  };

  while (elementList.length) {
    const element = elementList.pop();
    if (element === undefined) {
      break;
    }
    // Check element matches one of given patterns
    const sectionInfo = getSectionInfo(element);
    const messageType = getMessageType(element);
    const significance = getSignificance(element);
    const direction = getDirection(element);
    if (sectionInfo) {
      if (definition.elementList.length) {
        definitionList.push(new Definition(cloneDeep(definition)));
        definition.elementList = [];
      }
      definition.descriptionList = [];
      const { sectionNumber, title: name } = sectionInfo;
      definition.sectionNumber = sectionNumber;
      definition.name = name;
    } else if (messageType) {
      definition.messageType = messageType;
    } else if (significance) {
      definition.significance = significance;
    } else if (direction) {
      definition.direction = direction;
    } else if (isDefinitionTable(element)) {
      const { ieList } = parseDefinitionTable(element);
      definition.elementList = ieList;
    } else if (isParagraph(element) && !definition.elementList.length) {
      definition.descriptionList.push($(element).text());
    } else if (element.type === 'tag') {
      // Otherwise, put child elements into the stack
      elementList.push(...element.children.reverse());
    }
  }
  return new Definitions(definitionList);
}

if (require.main === module) {
  const { argv } = process;
  const file = argv[2];
  if (file === undefined) {
    throw Error();
  }
  const html = readFileSync(file, 'utf8');
  const parsed = parse(html);
  process.stdout.write(JSON.stringify(parsed, null, 2));
}
