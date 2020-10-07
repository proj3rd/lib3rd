"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const parser_1 = require("./parser");
describe('Parse ASN.1 [parse_all]', function () {
    this.timeout(0);
    it('LTE RRC (36331) [parse_36331]', function () {
        const asn1 = fs_1.readFileSync('resources/36331-g00.asn1', 'utf8');
        parser_1.parse(asn1);
    });
    it('S1AP (36413) [parse_36413]', function () {
        const asn1 = fs_1.readFileSync('resources/36413-g00.asn1', 'utf8');
        parser_1.parse(asn1);
    });
    it('X2AP (36423) [parse_36423]', function () {
        const asn1 = fs_1.readFileSync('resources/36423-g00.asn1', 'utf8');
        parser_1.parse(asn1);
    });
    it('NR RRC (38331) [parse_38331]', function () {
        const asn1 = fs_1.readFileSync('resources/38331-g00.asn1', 'utf8');
        parser_1.parse(asn1);
    });
    it('NGAP (38413) [parse_38413]', function () {
        const asn1 = fs_1.readFileSync('resources/38413-g00.asn1', 'utf8');
        parser_1.parse(asn1);
    });
    it('XnAP (38423) [parse_38423]', function () {
        const asn1 = fs_1.readFileSync('resources/38423-g00.asn1', 'utf8');
        parser_1.parse(asn1);
    });
    it('E1AP (38463) [parse_38463]', function () {
        const asn1 = fs_1.readFileSync('resources/38463-g00.asn1', 'utf8');
        parser_1.parse(asn1);
    });
    it('F1AP (38473) [parse_38473]', function () {
        const asn1 = fs_1.readFileSync('resources/38473-g00.asn1', 'utf8');
        parser_1.parse(asn1);
    });
});
//# sourceMappingURL=test_parser.js.map