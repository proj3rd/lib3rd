"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const lodash_1 = require("lodash");
const valueAssignment_1 = require("./classes/valueAssignment");
const formatter_1 = require("./formatter");
const parser_1 = require("./parser");
describe('Format in spreadsheets [format_spreadsheet_all]', function () {
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
        describe(`${name} (${specNumber}) [format_spreadsheet_ie_all_${specNumber}]`, function () {
            const asn1 = fs_1.readFileSync(`resources/${filename}`, 'utf8');
            const modules = parser_1.parse(asn1);
            modules.modules.forEach((module) => {
                module.assignments.forEach((assignment) => {
                    if (assignment instanceof valueAssignment_1.ValueAssignment) {
                        return;
                    }
                    // tslint:disable-next-line: only-arrow-functions
                    it(`${module.name}.${assignment.name}`, function () {
                        const wb = formatter_1.getWorkbook();
                        assignment.toSpreadsheet(wb);
                    });
                });
            });
        });
        // tslint:disable-next-line: only-arrow-functions
        describe(`${name} (${specNumber}) [format_spreadsheet_ie_all_expanded_${specNumber}]`, function () {
            const asn1 = fs_1.readFileSync(`resources/${filename}`, 'utf8');
            const modules = parser_1.parse(asn1);
            modules.modules.forEach((module) => {
                module.assignments.forEach((assignment) => {
                    if (assignment instanceof valueAssignment_1.ValueAssignment) {
                        return;
                    }
                    // tslint:disable-next-line: only-arrow-functions
                    it(`${module.name}.${assignment.name}`, function () {
                        const expandedAssignment = lodash_1.cloneDeep(assignment).expand(modules);
                        const wb = formatter_1.getWorkbook();
                        expandedAssignment.toSpreadsheet(wb);
                    });
                });
            });
        });
    });
    function _tc(name, specNumber, filename) {
        return { name, specNumber, filename };
    }
});
//# sourceMappingURL=test_format_spreadsheet.js.map