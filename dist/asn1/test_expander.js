"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const parser_1 = require("./parser");
// tslint:disable-next-line: only-arrow-functions
describe('Expand ASN.1 [expand_all]', function () {
    this.timeout(0);
    // tslint:disable-next-line: only-arrow-functions
    describe('LTE RRC (36331) [expand_36331]', function () {
        const asn1 = fs_1.readFileSync('resources/36331-g00.asn1', 'utf8');
        const modules = parser_1.parse(asn1);
        modules.modules.forEach((moduleDefinition) => {
            const { assignments } = moduleDefinition;
            assignments.forEach((assignment) => {
                // tslint:disable-next-line: only-arrow-functions
                it(`${moduleDefinition.name}.${assignment.name}`, function () {
                    assignment.expand(modules, []);
                });
            });
        });
    });
    // tslint:disable-next-line: only-arrow-functions
    describe('NR RRC (38331) [expand_38331]', function () {
        const asn1 = fs_1.readFileSync('resources/38331-g00.asn1', 'utf8');
        const modules = parser_1.parse(asn1);
        modules.modules.forEach((moduleDefinition) => {
            const { assignments } = moduleDefinition;
            assignments.forEach((assignment) => {
                // tslint:disable-next-line: only-arrow-functions
                it(`${moduleDefinition.name}.${assignment.name}`, function () {
                    assignment.expand(modules, []);
                });
            });
        });
    });
});
//# sourceMappingURL=test_expander.js.map