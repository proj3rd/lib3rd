import assert from 'assert';
import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'path';
import { Logger } from '../logger';
import { extract } from './extractor';

const logger = Logger.getLogger('asn1.extractor.test');

describe('Extract ASN.1 [extract_all]', function () {
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
    const expected = `First ASN.1 content


Second ASN.1 content`;
    const extracted = extract(input);
    assert.equal(extracted, expected);
  });

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
    const expected = `First ASN.1 content
END

Second ASN.1 content
END`;
    const extracted = extract(input);
    assert.equal(extracted, expected);
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
