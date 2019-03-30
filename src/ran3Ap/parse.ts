import * as $ from 'cheerio';
import { readFile } from 'fs';

interface ISectionInfo {
  sectionNumber: string;
  sectionTitle: string;
}

export function parse(html: string): any {
  let sectionNumber: string = null;
  let sectionTitle: string = null;
  let stack = selectorToArray($(html)).reverse();
  while (stack.length) {
    const selector = stack.pop();
    const elem = selector[0];
    //  TODO
    if (isTagHeading(elem)) {
      ({sectionNumber, sectionTitle} = sectionInformation(selector));
      continue;
    }
    stack = stackChildren(stack, selector);
  }
}

function isTag(elem: CheerioElement): boolean {
  return elem.type === 'tag';
}

function isTagHeading(elem: CheerioElement): boolean {
  return isTag(elem) && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(elem.name) !== -1;
}

function sectionInformation(selector: Cheerio): ISectionInfo {
  const sectionHeading = normalizeWhitespace(selector.text());
  const indexDelimiter = sectionHeading.indexOf(' ');
  const sectionNumber = sectionHeading.substring(0, indexDelimiter);
  const sectionTitle = sectionHeading.substring(indexDelimiter + 1);
  return {sectionNumber, sectionTitle};
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
