import * as cheerio from 'cheerio';
import { readFile } from 'fs';

export function parse(html: string): any {
  // TODO
}

if (require.main === module) {
  const filePath = process.argv[2];
  if (!filePath) {
    throw Error('Requires 1 argument, filePath');
  }
  readFile(filePath, 'utf8', (err: Error, html: string) => {
    process.stdout.write(parse(html));
  });
}
