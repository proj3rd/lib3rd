import readlineSync from 'readline-sync';

import { normalize } from '.';
import { Logger } from '../logger';
import { RE_COND, RE_NEED } from './visitors/tagVisitor';

const logger = Logger.getLogger('asn1.extractor');

function postProcessInterative(extracted: string): string {
  const lineList = extracted.split('\n');
  lineList.forEach((line, index) => {
    const trimmed = line.trim();
    // Line comment: Do nothing. Skip.
    if (trimmed.startsWith('--')) {
      return;
    }
    const matchNeedCode = line.match(RE_NEED);
    if (matchNeedCode) {
      return;
    }
    const matchCond = line.match(RE_COND);
    if (matchCond) {
      return;
    }
    const matchComment = line.match(/( |\t)+?(--.*)/);
    if (!matchComment) {
      return;
    }
    let isInputValid: boolean = false;
    while (!isInputValid) {
      console.log(`(${index}/${lineList.length}) ${trimmed}`);
      const input = readlineSync.question(`Comment "${matchComment[2]}"? [Enter to leave as-is / d to delete / write a comment starting with -- to replace]\n> `);
      if (!input) {
        isInputValid = true;
      } else if (input === 'd') {
        const lineWithoutComment = line.substring(0, matchComment.index);
        lineList.splice(index, 1, lineWithoutComment);
        isInputValid = true;
      } else if (input.startsWith('--')) {
        const lineWithoutComment = line.substring(0, matchComment.index);
        const lineWithNewComment = `${lineWithoutComment} ${input}`;
        lineList.splice(index, 1, lineWithNewComment);
        isInputValid = true;
      } else {
        isInputValid = false;
      }
    }
  });
  return lineList.join('\n');
}

function selectRegExp(
  text: string,
): { reStart: RegExp; trimStart: boolean; reStop: RegExp; trimStop: boolean } {
  const RE_START = /^--\s+?ASN1START.*?$/gm; // -- ASN1START
  const TRIM_START = true;
  const RE_STOP = /^--\s+?ASN1STOP.*?$/gm; // -- ASN1STOP
  const TRIM_STOP = true;
  const RE_START_RAN3 = /^--\s+?\*+?.*?$/gm; // -- *****
  const TRIM_START_RAN3 = false;
  const RE_STOP_RAN3 = /^\bEND\b.*?$/gm; // END (end of module definition)
  const TRIM_STOP_RAN3 = false;
  let reStart: RegExp | undefined;
  let trimStart: boolean | undefined;
  let reStop: RegExp | undefined;
  let trimStop: boolean | undefined;
  if (RE_START.test(text) && RE_STOP.test(text)) {
    reStart = RE_START;
    trimStart = TRIM_START;
    reStop = RE_STOP;
    trimStop = TRIM_STOP;
  }
  if (RE_START_RAN3.test(text) && RE_STOP_RAN3.test(text)) {
    reStart = RE_START_RAN3;
    trimStart = TRIM_START_RAN3;
    reStop = RE_STOP_RAN3;
    trimStop = TRIM_STOP_RAN3;
  }
  if (
    reStart === undefined
    || trimStart === undefined
    || reStop === undefined
    || trimStop === undefined
  ) {
    throw Error(
      'None of tokens identifying ASN.1 definition is found in the given text.',
    );
  }
  reStart.lastIndex = 0;
  reStop.lastIndex = 0;
  return {
    reStart, trimStart, reStop, trimStop,
  };
}

export function extract(text: string, interactive: boolean = false): string {
  let asn1 = '';
  const {
    reStart, trimStart, reStop, trimStop,
  } = selectRegExp(text);
  for (;;) {
    const resultStart = reStart.exec(text);
    if (resultStart === null) {
      break;
    }
    const start = resultStart.index + (trimStart ? resultStart[0].length : 0);
    reStop.lastIndex = start;

    const resultStop = reStop.exec(text);
    if (resultStop === null) {
      logger.error(
        'This is strange. The start token is found but the end token is not found. Extractor stops here and outputs the current state.',
      );
      break;
    }
    const end = resultStop.index + (trimStop ? 0 : resultStop[0].length);
    reStart.lastIndex = end;

    asn1 += `${text.substring(start, end)}\n`;
  }
  asn1 = normalize(asn1);
  return interactive ? postProcessInterative(asn1) : asn1;
}
