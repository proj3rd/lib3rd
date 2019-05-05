import { readFile, writeFileSync } from 'fs';
import { parse as parsePath } from 'path';

import { format as formatTxt } from './text';

import { parse } from '../parse';

// TODO: need to be place in separate module?
function findMsgIes(msgIeName: string, asn1: any): any[] /* TODO */ {
  const msgIes = [];
  Object.keys(asn1).forEach((moduleName) => {
    const assignments = asn1[moduleName].assignments;
    if (msgIeName === 'all') {
      Object.keys(assignments).forEach((name) => {
        msgIes.push({
          name,
          definition: assignments[name],
        });
      });
    } else {
      if (msgIes.length) {
        return;
      }
      if (msgIeName in assignments) {
        msgIes.push({
          name: msgIeName,
          definition: assignments[msgIeName],
        });
      }
    }
  });
  return msgIes;
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
    const msgIes = findMsgIes(msgIeName, parseResult);
    if (!msgIes.length) {
      throw Error(`${msgIeName} not found in ${filePath}`);
    }
    // TODO: expand
    const parsedPath = parsePath(filePath);
    switch (fmt) {
      case 'txt': {
        const formatResult = formatTxt(msgIes);
        writeFileSync(`${msgIeName}-${parsedPath.name}.txt`, formatResult);
        break;
      }
      default: {
        throw Error(`Format '${fmt}' not supported`);
      }
    }
  });
}
