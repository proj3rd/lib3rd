import * as $ from 'cheerio';
import { readFile } from 'fs';

import { log } from '../utils/logging';
import { reSection } from './common';
import { IConditionDefinitionElem, IDefinitions, IIe, IRangeDefinitionElem } from './interfaces';

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

/**
 * Parse RAN3 AP messages and IEs
 * @param html RAN3 AP document in HTML format encoded in UTF-8
 * @returns Collection of RAN3 AP messages and IEs
 */
export function parse(html: string): IDefinitions {
  const definitions: IDefinitions = {};

  let sectionNumber: string = '';
  let sectionTitle: string = '';
  let description: string = '';
  let direction: string = '';
  let ies: IIe[] = null;
  let rangeDefinition: IRangeDefinitionElem[] = null;
  let conditionDefinition: IConditionDefinitionElem[] = null;

  let stack = selectorToArray($(html)).reverse();
  while (stack.length) {
    const selector = stack.pop();
    const elem = selector[0];
    if (containsSection(selector)) {
      if (ies) {
        definitions[sectionNumber] = {
          section: sectionNumber,
          name: sectionTitle,
          description,
          direction,
          ies,
          range: rangeDefinition,
          condition: conditionDefinition,
        };
        definitions[sectionTitle] = sectionNumber;
        log.debug(`Item stored: ${sectionNumber} ${sectionTitle}`);
      } else {
        log.debug(`Item discarded: ${sectionNumber} ${sectionTitle.substring(0, 32)}...`);
      }
      ({sectionNumber, sectionTitle} = sectionInformation(selector));
      description = '';
      direction = '';
      ies = null;
      rangeDefinition = null;
      conditionDefinition = null;
      continue;
    }
    if (containsDirection(selector)) {
      direction = getDirection(selector);
      continue;
    }
    if (isMsgIeTable(selector)) {
      ies = parseMsgIeTable(selector);
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

function containsSection(selector: Cheerio): boolean {
  const elem = selector[0];
  if (isTag(elem)) {
    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(elem.name) !== -1) {
      return true;
    }
    // Do not use normalizeWhitespace() here
    // Because it removes newline character and concatenates all root and children text
    // So it leads incorrect parse result
    const text = selector.text();
    if (text.match(reSection)) {
      log.debug(`Section info in non-heading: ${text.substring(0, 32)}...`);
      return true;
    }
  }
  return false;
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
  const sectionNumber = sectionHeading.substring(0, indexDelimiter) || '';
  const sectionTitle = sectionHeading.substring(indexDelimiter + 1) || '';
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
  const ies = trs.map((indexTr, tr) => {
    const ie: any = {};
    $(tr).find('td').each((indexTd, td): void => {
      const key = tableHeader[indexTd];
      if (!key) {
        return;
      }
      ie[key] = normalizeWhitespace($(htmlToText($(td).html())).text());
    });
    return ie;
  }).get();
  return ies;
}

function parseMsgIeTable(selector: Cheerio): IIe[] {
  const ies = parseTable(selector, msgIeTableHeader);
  let depthMin = Infinity;
  ies.forEach((ie: IIe) => {
    ie.depth = elemDepth(ie);
    depthMin = Math.min(depthMin, ie.depth);
  });
  ies.forEach((ie: IIe) => {
    ie.depth -= depthMin;
  });
  return ies;
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

function elemDepth(ie: IIe): number {
  const matchDepth = ie['ie/group name'].match(reDepth);
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
