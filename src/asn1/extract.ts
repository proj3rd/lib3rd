interface IToken {
  start: RegExp;
  end: RegExp;
}

const tokens: { [protocol: string]: IToken} = {
  rrc: {
    start: /^-- ASN1START/gm,
    end: /^-- ASN1STOP/gm,
  },
};

export function extract(text: string, protocol: string): string {
  const extractedTexts: string[] = [];
  while (true) {
    const matchStart = tokens[protocol].start.exec(text);
    if (!matchStart) {
      break;
    }

    const matchEnd = tokens[protocol].end.exec(text);
    if (!matchEnd) {
      throw Error('Start token is found but end token is not');
    }

    extractedTexts.push(text.substring(matchStart.index + matchStart[0].length, matchEnd.index));
  }
  return extractedTexts.join('');
}
