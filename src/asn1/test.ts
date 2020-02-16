import * as assert from 'assert';
import { readFileSync } from 'fs';
import { findMsgIes } from './format';
import { format } from './format/text';
import { parse } from './parse';

interface ITestCase {
  testName: string;
  specWithVersion: string;
  ieName: string;
  expectedResult: string;
}

const testCases: ITestCase[] = [
  {
    testName: 'BIT STRING',
    specWithVersion: '36331-f80',
    ieName: 'P-C-AndCBSR-r15',
    expectedResult: `P-C-AndCBSR-r15 ::= SEQUENCE {
  p-C-r15                                             INTEGER (-8..15),
  codebookSubsetRestriction4-r15                      BIT STRING
}`,
  },
];

describe('ASN.1', () => {
  testCases.forEach((testCase) => {
    const {testName, specWithVersion, ieName, expectedResult} = testCase;
    describe(testName, () => {
      const series = specWithVersion.substring(0, 2);
      const spec = specWithVersion.split('-')[0];
      const specPath = `specs/${series} series/${spec}/${specWithVersion}.asn1`;
      const asn1Text = readFileSync(specPath, 'utf8');
      const asn1Parsed = parse(asn1Text);
      const ie = findMsgIes(ieName, asn1Parsed);
      assert.equal(format(ie), expectedResult);
    });
  });
});
