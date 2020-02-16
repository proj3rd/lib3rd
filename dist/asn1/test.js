"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs_1 = require("fs");
const format_1 = require("./format");
const text_1 = require("./format/text");
const parse_1 = require("./parse");
const testCases = [
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
const asn1Pool = {};
function getAsn1Parsed(specWithVersion) {
    if (specWithVersion in asn1Pool) {
        return asn1Pool[specWithVersion];
    }
    else {
        const series = specWithVersion.substring(0, 2);
        const spec = specWithVersion.split('-')[0];
        const specPath = `specs/${series} series/${spec}/${specWithVersion}.asn1`;
        const asn1Text = fs_1.readFileSync(specPath, 'utf8');
        const asn1Parsed = parse_1.parse(asn1Text);
        asn1Pool[specWithVersion] = asn1Parsed;
        return asn1Parsed;
    }
}
describe('ASN.1', () => {
    testCases.forEach((testCase) => {
        const { testName, specWithVersion, ieName, expectedResult } = testCase;
        it(testName, () => {
            const asn1Parsed = getAsn1Parsed(specWithVersion);
            const ie = format_1.findMsgIes(ieName, asn1Parsed);
            assert.equal(text_1.format(ie), expectedResult);
        });
    });
});
