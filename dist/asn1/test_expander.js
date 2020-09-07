"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const parser_1 = require("./parser");
// tslint:disable-next-line: only-arrow-functions
describe('Expand ASN.1 [expand_all]', function () {
    this.timeout(0);
    const testCaseList = [
        _tc('LTE RRC', '36331', '36331-g00.asn1'),
        _tc('S1AP', '36413', '36413-g00.asn1'),
        _tc('X2AP', '36423', '36423-g00.asn1'),
        _tc('NR RRC', '38331', '38331-g00.asn1'),
        _tc('NGAP', '38413', '38413-g00.asn1'),
        _tc('XnAP', '38423', '38423-g00.asn1'),
        _tc('E1AP', '38463', '38463-g00.asn1'),
        _tc('F1AP', '38473', '38473-g00.asn1'),
    ];
    testCaseList.forEach((testCase) => {
        const { name, specNumber, filename } = testCase;
        // tslint:disable-next-line: only-arrow-functions
        describe(`${name} (${specNumber}) [expand_${specNumber}]`, function () {
            const asn1 = fs_1.readFileSync(`resources/${filename}`, 'utf8');
            const modules = parser_1.parse(asn1);
            modules.modules.forEach((moduleDefinition) => {
                const { assignments } = moduleDefinition;
                assignments.forEach((assignment) => {
                    // tslint:disable-next-line: only-arrow-functions
                    it(`${moduleDefinition.name}.${assignment.name}`, function () {
                        assignment.expand(modules);
                    });
                });
            });
        });
    });
    function _tc(name, specNumber, filename) {
        return { name, specNumber, filename };
    }
});
//# sourceMappingURL=test_expander.js.map