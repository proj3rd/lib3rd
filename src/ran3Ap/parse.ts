import * as $ from 'cheerio';
import { readFile } from 'fs';

import { IConditionDefinitionElem, IDefinitions, IMsgIeDefinitionElem, IRangeDefinitionElem } from './interfaces';

interface ISectionInfo {
  sectionNumber: string;
  sectionTitle: string;
}

const msgIeTableHeader = [
  'ie/group name', 'presence', 'range', 'ie type and reference', 'semantics description',
  'criticality', 'assigned criticiality',
];

const rangeTableHeader = [
  'range bound', 'explanation',
];

const conditionTableHeader = [
  'condition', 'explanation',
];

const reDepth = /^>+/;

export function parse(html: string): IDefinitions {
  const definitions: IDefinitions = {};

  let sectionNumber: string = null;
  let sectionTitle: string = null;
  let description: string = null;
  let direction: string = null;
  let msgIeDefinition: IMsgIeDefinitionElem[] = null;
  let rangeDefinition: IRangeDefinitionElem[] = null;
  let conditionDefinition: IConditionDefinitionElem[] = null;

  let stack = selectorToArray($(html)).reverse();
  while (stack.length) {
    const selector = stack.pop();
    const elem = selector[0];
    if (isTagHeading(elem)) {
      if (msgIeDefinition) {
        definitions[sectionNumber] = {
          section: sectionNumber,
          name: sectionTitle,
          description,
          direction,
          definition: msgIeDefinition,
          range: rangeDefinition,
          condition: conditionDefinition,
        };
        definitions[sectionTitle] = sectionNumber;
      }
      ({sectionNumber, sectionTitle} = sectionInformation(selector));
      description = null;
      direction = null;
      msgIeDefinition = null;
      rangeDefinition = null;
      conditionDefinition = null;
      continue;
    }
    if (containsDirection(selector)) {
      direction = getDirection(selector);
      continue;
    }
    if (isMsgIeTable(selector)) {
      msgIeDefinition = parseMsgIeTable(selector);
      continue;
    }
    if (isRangeTable(selector)) {
      rangeDefinition = parseRangeTable(selector);
      continue;
    }
    if (isConditionTable(selector)) {
      conditionDefinition = parseConditionTable(selector);
      continue;
    }
    if (isTagP(elem)) {
      if (!description) {
        description = normalizeWhitespace(selector.text());
      }
      continue;
    }
    stack = stackChildren(stack, selector);
  }
  return definitions;
}

function isTag(elem: CheerioElement): boolean {
  return elem.type === 'tag';
}

function isTagHeading(elem: CheerioElement): boolean {
  return isTag(elem) && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(elem.name) !== -1;
}

function isTagTable(elem: CheerioElement): boolean {
  return isTag(elem) && elem.name === 'table';
}

function isTagP(elem: CheerioElement): boolean {
  return isTag(elem) && elem.name === 'p';
}

function sectionInformation(selector: Cheerio): ISectionInfo {
  const sectionHeading = normalizeWhitespace(selector.text());
  const indexDelimiter = sectionHeading.indexOf(' ');
  const sectionNumber = sectionHeading.substring(0, indexDelimiter);
  const sectionTitle = sectionHeading.substring(indexDelimiter + 1);
  return {sectionNumber, sectionTitle};
}

function containsDirection(selector: Cheerio): boolean {
  return normalizeWhitespace(selector.text()).startsWith('Direction:');
}

function getDirection(selector: Cheerio): string {
  return normalizeWhitespace(selector.text()).replace(/^Direction:\s*/, '')
  // MS Word converts rightwards arrow to \u00AE (REGISTERED SIGN)
                                              .replace(/®/g, '→');
}

function doesHeaderMatch(selector: Cheerio, header: string[], indexEnd: number): boolean {
  const headerTds = selector.find('tr').first().children('td').slice(0, indexEnd);
  return headerTds.get().reduce((prev: boolean, curr: any, currIndex: number, arr: any[]) => {
    return prev && (normalizeWhitespace($(curr).text()).toLowerCase() === header[currIndex]);
  }, true);
}

function isMsgIeTable(selector: Cheerio): boolean {
  return isTagTable(selector[0]) && doesHeaderMatch(selector, msgIeTableHeader, 5);
}

function parseTable(selector: Cheerio, tableHeader: string[]): any[] {
  const trs = selector.find('tr').slice(1);
  const definition = trs.map((indexTr, tr) => {
    const definitionElem: any = {};
    $(tr).find('td').each((indexTd, td): void => {
      const key = tableHeader[indexTd];
      definitionElem[key] = normalizeWhitespace($(htmlToText($(td).html())).text());
    });
    return definitionElem;
  }).get();
  return definition;
}

function parseMsgIeTable(selector: Cheerio): IMsgIeDefinitionElem[] {
  const msgIeDefinition = parseTable(selector, msgIeTableHeader);
  let depthMin = Infinity;
  msgIeDefinition.forEach((msgIeDefinitionElem: IMsgIeDefinitionElem) => {
    msgIeDefinitionElem.depth = elemDepth(msgIeDefinitionElem);
    depthMin = Math.min(depthMin, msgIeDefinitionElem.depth);
  });
  msgIeDefinition.forEach((msgIeDefinitionElem: IMsgIeDefinitionElem) => {
    msgIeDefinitionElem.depth -= depthMin;
  });
  return msgIeDefinition;
}

function isRangeTable(selector: Cheerio): boolean {
  return isTagTable(selector[0]) && doesHeaderMatch(selector, rangeTableHeader, 2);
}

function parseRangeTable(selector: Cheerio): IRangeDefinitionElem[] {
  return parseTable(selector, rangeTableHeader);
}

function isConditionTable(selector: Cheerio): boolean {
  return isTagTable(selector[0]) && doesHeaderMatch(selector, conditionTableHeader, 2);
}

function parseConditionTable(selector: Cheerio): IConditionDefinitionElem[] {
  return parseTable(selector, conditionTableHeader);
}

function selectorToArray(selector: Cheerio): Cheerio[] {
  return selector.map((index, elem) => {
    return $(elem);
  }).get();
}

function stackChildren(stack: Cheerio[], selector: Cheerio): Cheerio[] {
  const children: Cheerio[] = selector.children().map((index, child) => {
    return $(child);
  }).get();
  return stack.concat(children.reverse());
}

function normalizeWhitespace(text: string): string {
  return text.trim().replace(/\s+/g, ' ');
}

function htmlToText(html: string): string {
  return html.replace(/<sup>\s*?(.+?)\s*?<\/sup>/g, '^($1)')
              .replace(/<sub>\s*?(.+?)\s*?<\/sub>/g , '_($1)');
}

function elemDepth(msgIeDefinitionElem: IMsgIeDefinitionElem): number {
  const matchDepth = msgIeDefinitionElem['ie/group name'].match(reDepth);
  if (matchDepth) {
    return matchDepth[0].length;
  }
  return 0;
}

if (require.main === module) {
  const filePath = process.argv[2];
  if (!filePath) {
    throw Error('Requires 1 argument, filePath');
  }
  readFile(filePath, 'utf8', (err: Error, html: string) => {
    if (err) {
      throw err;
    }
    process.stdout.write(JSON.stringify(parse(html), null, 2));
  });
}
