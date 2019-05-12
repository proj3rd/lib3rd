import { readFile, Stats, writeFileSync } from 'fs';
import { parse as parsePath } from 'path';
import * as yargs from 'yargs';

import { format as formatTxt } from './text';
import { format as formatXlsx } from './xlsx';

import { parse } from '../parse';
import { IMsgIe } from './common';

// TODO: need to be place in separate module?
function findMsgIes(msgIeName: string, asn1: any): IMsgIe[] {
  const msgIes: IMsgIe[] = [];
  Object.keys(asn1).forEach((moduleName) => {
    const assignments = asn1[moduleName].assignments;
    if (msgIeName === 'all') {
      Object.keys(assignments).forEach((name) => {
        msgIes.push({
          name,
          moduleName,
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
          moduleName,
          definition: assignments[msgIeName],
        });
      }
    }
  });
  return msgIes;
}

if (require.main === module) {
  const argv = yargs
    .command('<filePath> <msgIeName>', 'Format <msgIeName> from <filePath>')
    .options({
      format: {
        alias: 'f',
        describe: 'Output format',
        choices: ['txt', 'xlsx'],
        default: 'txt',
      },
      expand: {
        alias: 'e',
        describe: 'Whether expand sub-IE or not',
        default: false,
      },
    })
    .help()
    .argv;
  const [filePath, msgIeName] = argv._;
  if (!filePath || !msgIeName) {
    throw Error('Require at least 2 arguments, filePath, msgIeName, ... and fmt and expand');
  }
  readFile(filePath, 'utf8', (err: Error, text: string) => {
    if (err) {
      throw err;
    }
    const {format, expand} = argv;
    const parseResult: any /* TODO */ = parse(text);
    const msgIes = findMsgIes(msgIeName, parseResult);
    if (!msgIes.length) {
      throw Error(`${msgIeName} not found in ${filePath}`);
    }
    // TODO: expand
    const parsedPath = parsePath(filePath);
    const fileName = `${msgIeName}-${parsedPath.name}`;
    switch (format) {
      case 'txt': {
        const formatResult = formatTxt(msgIes);
        writeFileSync(`${fileName}.txt`, formatResult);
        break;
      }
      case 'xlsx': {
        const formatResult = formatXlsx(msgIes, parseResult /* TODO: formatConfig */);
        formatResult.write(`${fileName}.xlsx`, (e: Error, stats: Stats) => {
          if (e) {
            throw e;
          }
        });
        break;
      }
      default: {
        throw Error(`Format '${format}' not supported`);
      }
    }
  });
}
