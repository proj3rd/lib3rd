import {readFileSync, writeFileSync} from 'fs';
import {parse} from 'path';

export function extract(text: string): string {
  let asn1 = '';
  const {reStart, reStop} = selectRegExp(text);
  while (true) {
    const resultStart = reStart.exec(text);
    if (resultStart === null) {
      return asn1;
    }
    const start = resultStart.index;
    reStop.lastIndex = start;

    const resultStop = reStop.exec(text);
    if (resultStop === null) {
      console.error('This is strange. The start token is found but the end token is not found. Extractor stops here and outputs the current state.');
      return asn1;
    }
    const end = resultStop.index + resultStop[0].length;
    reStart.lastIndex = end;

    asn1 += text.substring(start, end) + '\n';
  }
}

function selectRegExp(text: string): {reStart: RegExp, reStop: RegExp} {
  const RE_START = /^--\s+?ASN1START.*?$/gm; // -- ASN1START
  const RE_STOP = /^--\s+?ASN1STOP.*?$/gm;   // -- ASN1STOP
  const RE_START_RAN3 = /^--\s+?\*+?.*?$/gm; // -- *****
  const RE_STOP_RAN3 = /^\bEND\b.*?$/gm;     // END (end of module definition)
  let reStart: RegExp | undefined;
  let reStop: RegExp | undefined;
  if (RE_START.test(text) && RE_STOP.test(text)) {
    reStart = RE_START;
    reStop = RE_STOP;
  }
  if (RE_START_RAN3.test(text) && RE_STOP_RAN3.test(text)) {
    reStart = RE_START_RAN3;
    reStop = RE_STOP_RAN3;
  }
  if (reStart === undefined || reStop === undefined) {
    throw Error('None of tokens identifying ASN.1 definition is found in the given text.');
  }
  reStart.lastIndex = 0;
  reStop.lastIndex = 0;
  return {reStart, reStop};
}

if (require.main === module) {
  const inputPath = process.argv[2];
  if (inputPath === undefined) {
    console.error('Filepath is not given. Exit.');
    process.exit(-1);
  }
  const text = readFileSync(inputPath, 'utf8');
  const asn1 = extract(text);
  const parsedPath = parse(inputPath);
  const outputName = `${parsedPath.name}.asn1`;
  writeFileSync(outputName, asn1);
}
