import * as $ from 'cheerio';
import { readFile } from 'fs';

export function parse(html: string): any {
  let stack: Cheerio[] = [$(html)];
  while (stack.length) {
    const elem = stack.pop();
    //  TODO
    stack = stackChildren(stack, elem);
  }
}

function stackChildren(stack: Cheerio[], parent: Cheerio): Cheerio[] {
  const children: Cheerio[] = parent.children().map((index: number, child: CheerioElement) => {
    return $(child);
  }).get();
  return stack.concat(children.reverse());
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
