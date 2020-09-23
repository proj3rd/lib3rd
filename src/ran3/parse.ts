import $ from 'cheerio';
import { readFileSync } from 'fs';
import { cloneDeep } from 'lodash';
import { todo } from 'unimpl';
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

function matchColumns(element: CheerioElement, columnList: string[]): boolean {
  const trList = $('tr', element);
  const trHeader = trList[0];
  const tdList = $('td', trHeader);
  return (
    tdList.length >= columnList.length &&
    columnList.every((column, index) => {
      const normalizedText = normalizeHtmlText($(tdList[index]).text());
      return normalizedText === column;
    })
  );
}

function isConditionTable(element: CheerioElement): boolean {
  if (element.type !== 'tag' || element.name !== 'table') {
    return false;
  }
  const columnList = ['Condition', 'Explanation'];
  return matchColumns(element, columnList);
}

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

function isParagraph(element: CheerioElement): boolean {
  return element.type === 'tag' && element.name === 'p';
}

function isRangeTable(element: CheerioElement): boolean {
  if (element.type !== 'tag' || element.name !== 'table') {
    return false;
  }
  const columnList = ['Range bound', 'Explanation'];
  return matchColumns(element, columnList);
}

function getSectionInfo(
  element: CheerioElement
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

function parseDefinitionTable(element: CheerioElement): IInformationElement[] {
  const trList = $('tr', element);
  const trBodyList = trList.slice(1);
  const ieList: IInformationElement[] = [];
  trBodyList
    .each(
      (index, trElement) => {
        const tdList = $('td', trElement);
        let i = 0 ;
        for (; i < tdList.length; i++) {
          const td = normalizeHtmlText($(tdList[i]).text());
          if (td !== '') {
            break;
          }
        }
        if (i === tdList.length) {
          return;
        }
        const tdFirst = normalizeHtmlText($(tdList[i++]).text());
        const name = tdFirst.replace(/^>+/, '').trim();
        const matchResult = tdFirst.match(reDepth);
        const depth =
          !matchResult || !matchResult.groups
            ? 0
            : matchResult.groups.depth.length;
        const informationElement: IInformationElement = {
          name,
          presence: normalizeHtmlText($(tdList[i++]).text()),
          range: normalizeHtmlText($(tdList[i++]).text()),
          typeAndRef: normalizeHtmlText($(tdList[i++]).text()),
          description: normalizeHtmlText($(tdList[i++]).text()),
          criticality: normalizeHtmlText($(tdList[i++]).text()),
          assignedCriticality: normalizeHtmlText($(tdList[i++]).text()),
          depth,
        };
        if (name === '') {
          console.log('Empty leading cell found');
          console.log(JSON.stringify(informationElement, null, 4));
        }
        ieList.push(informationElement);
      }
    );
  return ieList;
}

function parseRangeTable(element: CheerioElement): IRangeBound[] {
  const trList = $('tr', element);
  const trBodyList = trList.slice(1);
  const rangeBoundList: IRangeBound[] = [];
  trBodyList
    .each((index, trElement) => {
      const tdList = $('td', trElement);
      let i = 0 ;
      for (; i < tdList.length; i++) {
        const td = normalizeHtmlText($(tdList[i]).text());
        if (td !== '') {
          break;
        }
      }
      if (i === tdList.length) {
        return;
      }
      const rangeBound: IRangeBound = {
        rangeBound: $(tdList[i++]).text().trim(),
        explanation: $(tdList[i++]).text().trim(),
      };
      if (rangeBound.rangeBound === '') {
        console.log('Empty leading cell found');
        console.log(JSON.stringify(rangeBound, null, 4));
      }
      rangeBoundList.push(rangeBound);
    });
  return rangeBoundList;
}

function parseConditionTable(element: CheerioElement): ICondition[] {
  const trList = $('tr', element);
  const trBodyList = trList.slice(1);
  const conditionList: ICondition[] = [];
  trBodyList
    .each((index, trElement) => {
      const tdList = $('td', trElement);
      let i = 0 ;
      for (; i < tdList.length; i++) {
        const td = normalizeHtmlText($(tdList[i]).text());
        if (td !== '') {
          break;
        }
      }
      if (i === tdList.length) {
        return;
      }
      const condition: ICondition = {
        condition: $(tdList[i++]).text().trim(),
        explanation: $(tdList[i++]).text().trim(),
      };
      if (condition.condition === '') {
        console.log('Empty leading cell found');
        console.log(JSON.stringify(condition, null, 4));
      }
      conditionList.push(condition);
    });
  return conditionList;
}

export function parse(html: string): Definitions {
  // Break down the document into elements and put them into the list
  // The last element shall be put into the list first and popped from it last
  const elementList: CheerioElement[] = $(normalize(html))
    .map((index, element) => {
      return element;
    })
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
      continue;
    }
    const direction = getDirection(element);
    if (direction) {
      definition.direction = direction;
      continue;
    }
    if (isDefinitionTable(element)) {
      definition.elementList = parseDefinitionTable(element);
      continue;
    }
    if (isConditionTable(element)) {
      definition.conditionList = parseConditionTable(element);
      continue;
    }
    if (isRangeTable(element)) {
      definition.rangeBoundList = parseRangeTable(element);
      continue;
    }
    if (isParagraph(element)) {
      if (!definition.elementList.length) {
        definition.descriptionList.push($(element).text());
        continue;
      }
    }
    // Otherwise, put child elements into the stack
    if (element.type === 'tag') {
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
