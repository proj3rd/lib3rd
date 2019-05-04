import { readFile } from 'fs';

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
      break;
    }
    default: {
      throw Error(`Format '${fmt}' not supported`);
    }
  }
}

if (require.main === module) {
  const [filePath, msgIeName, fmt, expand] = process.argv.slice(2);
  if (!filePath || !msgIeName) {
    throw Error('Require at least 2 arguments, filePath, msgIeName, ... and fmt and expand');
  }
  readFile(filePath, 'utf8', (err: Error, text: string) => {
    if (err) {
      throw err;
    }
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
    const formatResult = format(msgIeDefinition, fmt ? fmt : 'txt');
    // TODO: write to file?
  });
}
