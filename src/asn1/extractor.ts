import assert from 'assert';
import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'path';
import { Logger } from '../logger';

const logger = Logger.getLogger('asn1.extracter');

export function extract(text: string): string {
  let asn1 = '';
  const { reStart, trimStart, reStop, trimStop } = selectRegExp(text);
  while (true) {
    const resultStart = reStart.exec(text);
    if (resultStart === null) {
      return asn1;
    }
    const start = resultStart.index + (trimStart ? resultStart[0].length : 0);
    reStop.lastIndex = start;

    const resultStop = reStop.exec(text);
    if (resultStop === null) {
      logger.error(
        'This is strange. The start token is found but the end token is not found. Extractor stops here and outputs the current state.'
      );
      return asn1;
    }
    const end = resultStop.index + (trimStop ? 0 : resultStop[0].length);
    reStart.lastIndex = end;

    asn1 += text.substring(start, end) + '\n';
  }
}

function selectRegExp(
  text: string
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
    reStart === undefined ||
    trimStart === undefined ||
    reStop === undefined ||
    trimStop === undefined
  ) {
    throw Error(
      'None of tokens identifying ASN.1 definition is found in the given text.'
    );
  }
  reStart.lastIndex = 0;
  reStop.lastIndex = 0;
  return { reStart, trimStart, reStop, trimStop };
}

// tslint:disable-next-line: only-arrow-functions
describe('Extract ASN.1 [extract_all]', function () {
  // tslint:disable-next-line: only-arrow-functions
  it('Normal token [extract_normal_token]', function () {
    const input = `
-- ASN1START
First ASN.1 content
-- ASN1STOP
This is not ASN.1 content
-- ASN1START
Second ASN.1 content
-- ASN1STOP
`;
    const expected = `
First ASN.1 content


Second ASN.1 content

`;
    assert.equal(extract(input), expected);
  });

  // tslint:disable-next-line: only-arrow-functions
  it('Old RAN3 token [extract_old_ran3_token]', function () {
    const input = `
-- ************************************
First ASN.1 content
END
This is not ASN.1 content
-- ************************************
Second ASN.1 content
END
`;
    const expected = `-- ************************************
First ASN.1 content
END
-- ************************************
Second ASN.1 content
END
`;
    assert.equal(extract(input), expected);
  });
});

if (require.main === module) {
  const inputPath = process.argv[2];
  if (inputPath === undefined) {
    logger.error('Filepath is not given. Exit.');
    process.exit(-1);
  }
  const text = readFileSync(inputPath, 'utf8');
  const asn1 = extract(text);
  const parsedPath = parse(inputPath);
  const outputName = `${parsedPath.name}.asn1`;
  writeFileSync(outputName, asn1);
}
