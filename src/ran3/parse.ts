import $ from 'cheerio';
import { readFileSync } from 'fs';
import { cloneDeep } from 'lodash';
import { Definition } from './classes/definition';
import { Definitions } from './classes/definitions';
import {
  ICondition,
  IDefinition,
  IInformationElement,
  IRangeBound,
} from './types';

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
 * Regular expression for section. The number of '>' is equal to the depth.
 */
const reDepth = /^(?<depth>>+)/;

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
function matchColumns(element: CheerioElement, columnList: string[]): boolean {
  const trList = $('tr', element);
  const trHeader = trList[0];
  const tdList = $('td', trHeader);
  return (
    tdList.length >= columnList.length
    && columnList.every((column, index) => {
      const normalizedText = normalizeHtmlText($(tdList[index]).text());
      return normalizedText === column;
    })
  );
}

// eslint-disable-next-line no-undef
function isConditionTable(element: CheerioElement): boolean {
  if (element.type !== 'tag' || element.name !== 'table') {
    return false;
  }
  const columnList = ['Condition', 'Explanation'];
  return matchColumns(element, columnList);
}

// eslint-disable-next-line no-undef
function isDefinitionTable(element: CheerioElement): boolean {
  if (element.type !== 'tag' || element.name !== 'table') {
    return false;
  }
  const columnList = [
    'IE/Group Name',
    'Presence',
    'Range',
    'IE type and reference',
    'Semantics description',
  ];
  return matchColumns(element, columnList);
}

// eslint-disable-next-line no-undef
function getDirection(element: CheerioElement): string | null {
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
function isParagraph(element: CheerioElement): boolean {
  return element.type === 'tag' && element.name === 'p';
}

// eslint-disable-next-line no-undef
function isRangeTable(element: CheerioElement): boolean {
  if (element.type !== 'tag' || element.name !== 'table') {
    return false;
  }
  const columnList = ['Range bound', 'Explanation'];
  return matchColumns(element, columnList);
}

function getSectionInfo(
  // eslint-disable-next-line no-undef
  element: CheerioElement,
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
function parseDefinitionTable(element: CheerioElement): IInformationElement[] {
  const trList = $('tr', element);
  const trBodyList = trList.slice(1);
  const ieList: IInformationElement[] = [];
  let depthMin = Infinity;
  trBodyList
    .each(
      (index, trElement) => {
        const tdList = $('td', trElement);
        let i = 0;
        for (; i < tdList.length; i += 1) {
          const td = normalizeHtmlText($(tdList[i]).text());
          if (td !== '') {
            break;
          }
        }
        if (i === tdList.length) {
          return;
        }
        const tdFirst = normalizeHtmlText($(tdList[i]).text()); i += 1;
        const name = tdFirst.replace(/^>+/, '').trim();
        const matchResult = tdFirst.match(reDepth);
        const depth = !matchResult || !matchResult.groups
          ? 0
          : matchResult.groups.depth.length;
        depthMin = Math.min(depthMin, depth);
        const typeAndRef = normalizeHtmlText($(tdList[i + 2]).text());
        const [reference, type] = typeAndRef.match(reSectionNumber) ? [typeAndRef, ''] : ['', typeAndRef];
        const informationElement: IInformationElement = {
          name,
          presence: normalizeHtmlText($(tdList[i]).text()),
          range: normalizeHtmlText($(tdList[i + 1]).text()),
          reference,
          type,
          description: normalizeHtmlText($(tdList[i + 3]).text()),
          criticality: normalizeHtmlText($(tdList[i + 4]).text()),
          assignedCriticality: normalizeHtmlText($(tdList[i + 5]).text()),
          depth,
        };
        if (name === '') {
          // eslint-disable-next-line no-console
          console.log('Empty leading cell found');
          // eslint-disable-next-line no-console
          console.log(JSON.stringify(informationElement, null, 4));
        }
        ieList.push(informationElement);
      },
    );
  ieList.forEach((ie) => {
    // eslint-disable-next-line no-param-reassign
    ie.depth -= depthMin;
  });
  return ieList;
}

// eslint-disable-next-line no-undef
function parseRangeTable(element: CheerioElement): IRangeBound[] {
  const trList = $('tr', element);
  const trBodyList = trList.slice(1);
  const rangeBoundList: IRangeBound[] = [];
  trBodyList
    .each((index, trElement) => {
      const tdList = $('td', trElement);
      let i = 0;
      for (; i < tdList.length; i += 1) {
        const td = normalizeHtmlText($(tdList[i]).text());
        if (td !== '') {
          break;
        }
      }
      if (i === tdList.length) {
        return;
      }
      const rangeBound: IRangeBound = {
        rangeBound: $(tdList[i]).text().trim(),
        explanation: $(tdList[i + 1]).text().trim(),
      };
      if (rangeBound.rangeBound === '') {
        // eslint-disable-next-line no-console
        console.log('Empty leading cell found');
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(rangeBound, null, 4));
      }
      rangeBoundList.push(rangeBound);
    });
  return rangeBoundList;
}

// eslint-disable-next-line no-undef
function parseConditionTable(element: CheerioElement): ICondition[] {
  const trList = $('tr', element);
  const trBodyList = trList.slice(1);
  const conditionList: ICondition[] = [];
  trBodyList
    .each((index, trElement) => {
      const tdList = $('td', trElement);
      let i = 0;
      for (; i < tdList.length; i += 1) {
        const td = normalizeHtmlText($(tdList[i]).text());
        if (td !== '') {
          break;
        }
      }
      if (i === tdList.length) {
        return;
      }
      const condition: ICondition = {
        condition: $(tdList[i]).text().trim(),
        explanation: $(tdList[i + 1]).text().trim(),
      };
      if (condition.condition === '') {
        // eslint-disable-next-line no-console
        console.log('Empty leading cell found');
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(condition, null, 4));
      }
      conditionList.push(condition);
    });
  return conditionList;
}

export function parse(html: string): Definitions {
  // Break down the document into elements and put them into the list
  // The last element shall be put into the list first and popped from it last
  // eslint-disable-next-line no-undef
  const elementList: CheerioElement[] = $(normalize(html))
    .map((index, element) => element)
    .get()
    .reverse();

  const definitionList: Definition[] = [];
  const definition: IDefinition = {
    sectionNumber: '',
    name: '',
    descriptionList: [],
    direction: '',
    elementList: [],
    rangeBoundList: [],
    conditionList: [],
  };

  while (elementList.length) {
    const element = elementList.pop();
    if (element === undefined) {
      break;
    }
    // Check element matches one of given patterns
    const sectionInfo = getSectionInfo(element);
    const direction = getDirection(element);
    if (sectionInfo) {
      if (definition.elementList.length) {
        definitionList.push(new Definition(cloneDeep(definition)));
        definition.elementList = [];
        definition.rangeBoundList = [];
        definition.conditionList = [];
      }
      definition.descriptionList = [];
      const { sectionNumber, title: name } = sectionInfo;
      definition.sectionNumber = sectionNumber;
      definition.name = name;
    } else if (direction) {
      definition.direction = direction;
    } else if (isDefinitionTable(element)) {
      definition.elementList = parseDefinitionTable(element);
    } else if (isConditionTable(element)) {
      definition.conditionList = parseConditionTable(element);
    } else if (isRangeTable(element)) {
      definition.rangeBoundList = parseRangeTable(element);
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
