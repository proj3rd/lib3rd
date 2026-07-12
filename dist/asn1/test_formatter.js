"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const _1 = require(".");
const parser_1 = require("./parser");
describe('Format Modules [format_all]', function () {
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
        it(`${name} (${specNumber}) [format_${specNumber}]`, function () {
            const asn1 = fs_1.readFileSync(`resources/${filename}`, 'utf8');
            const modules = parser_1.parse(asn1);
            const formatted = modules.toString();
            fs_1.writeFileSync(filename, formatted);
            _diff(_1.normalize(asn1), formatted);
        });
    });
    function _tc(name, specNumber, filename) {
        return { name, specNumber, filename };
    }
    function _diff(text1, text2) {
        const [len1, len2] = [text1.length, text2.length];
        let [index1, line1, col1] = [0, 1, 1];
        let [index2, line2, col2] = [0, 1, 1];
        while (index1 < len1 && index2 < len2) {
            const char1 = text1[index1];
            const char2 = text2[index2];
            if (_ws(char1)) {
                index1++;
                if (_nl(char1)) {
                    line1++;
                    col1 = 1;
                }
                continue;
            }
            if (_ws(char2)) {
                index2++;
                if (_nl(char2)) {
                    line2++;
                    col2 = 1;
                }
                continue;
            }
            if (char1 === char2) {
                index1++;
                col1++;
                index2++;
                col2++;
                continue;
            }
            else {
                throw Error(`(${line1}, ${col1}) differs (${line2}, ${col2})`);
            }
        }
        if (index1 !== len1 || index2 !== len2) {
            throw Error(`Ends at (${index1} / ${len1}) and (${index2} / ${len2})`);
        }
        function _nl(char) {
            return char === '\n';
        }
        function _ws(char) {
            return char.match(/\s/) !== null;
        }
    }
});
//# sourceMappingURL=test_formatter.js.map