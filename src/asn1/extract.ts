import { readFile } from 'fs';

import { sanitize } from '../utils/text';
import { sanitizeAsn1 } from './utils';

interface IToken {
  start: RegExp;
  end: RegExp;
}

const tokens: { [protocol: string]: IToken} = {
  RRC: {
    start: /^-- ASN1START/gm,
    end: /^-- ASN1STOP/gm,
  },
};

/**
 * Extract ASN.1 from text
 * @param text Text containing ASN.1 encoded in UTF-8
 * @param protocol Protocol name, case-insensitive. Only `RRC` protocol is supported currently
 * @returns Text containing only ASN.1 encoded in UTF-8
 */
export function extract(text: string, protocol: string): string {
  protocol = protocol.toUpperCase();
  if (!tokens[protocol]) {
    throw Error('Protocol is not supported');
  }
  const extractedTexts: string[] = [];
  while (true) {
    const matchStart = tokens[protocol].start.exec(text);
    if (!matchStart) {
      break;
    }

    tokens[protocol].end.lastIndex = matchStart.index;
    const matchEnd = tokens[protocol].end.exec(text);
    if (!matchEnd) {
      throw Error('Start token is found but end token is not');
    }

    extractedTexts.push(text.substring(matchStart.index + matchStart[0].length, matchEnd.index));
  }
  return sanitize(sanitizeAsn1(extractedTexts.join('')));
}

if (require.main === module) {
  const [protocol, filePath] = process.argv.slice(2);
  if (!protocol || !filePath) {
    throw Error('Requires 2 arguments, protocol and filePath');
  }
  readFile(filePath, 'utf8', (err: Error, text: string) => {
    if (err) {
      throw err;
    }
    process.stdout.write(extract(text, protocol));
  });
}
