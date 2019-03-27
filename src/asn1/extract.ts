import { readFile } from 'fs';

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

export function extract(text: string, protocol: string): string {
  protocol = protocol.toUpperCase();
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
  return extractedTexts.join('');
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
    process.stdout.write(extract(text, protocol) + '\n');
  });
}
