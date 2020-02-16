import * as assert from 'assert';
import { readFileSync } from 'fs';
import { findMsgIes } from './format';
import { format } from './format/text';
import { parse } from './parse';
import { IModules } from './visitors/modules';

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

interface IAsn1Pool {
  [specWithVersion: string]: IModules;
}

const asn1Pool: IAsn1Pool = {};

function getAsn1Parsed(specWithVersion): IModules {
  if (specWithVersion in asn1Pool) {
    return asn1Pool[specWithVersion];
  } else {
    const series = specWithVersion.substring(0, 2);
    const spec = specWithVersion.split('-')[0];
    const specPath = `specs/${series} series/${spec}/${specWithVersion}.asn1`;
    const asn1Text = readFileSync(specPath, 'utf8');
    const asn1Parsed = parse(asn1Text);
    asn1Pool[specWithVersion] = asn1Parsed;
    return asn1Parsed;
  }
}

testCases.forEach((testCase) => {
  const {testName, specWithVersion, ieName, expectedResult} = testCase;
  it(testName, () => {
    const asn1Parsed = getAsn1Parsed(specWithVersion);
    const ie = findMsgIes(ieName, asn1Parsed);
    assert.equal(format(ie), expectedResult);
  });
});
