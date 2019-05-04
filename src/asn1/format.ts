import { readFile, writeFileSync } from 'fs';
import { parse as parsePath } from 'path';

import { parse } from './parse';

/**
 * Format ASN.1
 * @param asn1 ASN.1 object you want to format
 * @param fmt Format you want to get. `txt` (default) is supported currently
 */
export function format(msgIeName: string, asn1: any, fmt: string = 'txt'): any /* TODO */ {
  switch (fmt) {
    case 'txt': {
      return `${msgIeName} ::= ${asn1.toString()}`;
    }
    default: {
      throw Error(`Format '${fmt}' not supported`);
    }
  }
}

if (require.main === module) {
  const [filePath, msgIeName] = process.argv.slice(2);
  if (!filePath || !msgIeName) {
    throw Error('Require at least 2 arguments, filePath, msgIeName, ... and fmt and expand');
  }
  readFile(filePath, 'utf8', (err: Error, text: string) => {
    if (err) {
      throw err;
    }
    let [fmt, expand] = process.argv.slice(4);
    fmt = fmt ? fmt : 'txt';
    expand = expand ? expand : null;
    const parseResult: any /* TODO */ = parse(text);
    let msgIeDefinition = null;
    Object.keys(parseResult).forEach((moduleName) => {
      if (msgIeDefinition) {
        return;
      }
      if (msgIeName in parseResult[moduleName].assignments) {
        msgIeDefinition = parseResult[moduleName].assignments[msgIeName];
      }
    });
    if (!msgIeDefinition) {
      throw Error(`${msgIeName} not found in ${filePath}`);
    }
    const formatResult = format(msgIeName, msgIeDefinition, fmt);
    const parsedPath = parsePath(filePath);
    switch (fmt) {
      case 'txt': {
        writeFileSync(`${msgIeName}-${parsedPath.name}.txt`, formatResult);
        break;
      }
      default: {
        throw Error(`Format '${fmt}' not supported`);
      }
    }
  });
}
