"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const diff_1 = require("./diff");
describe('Diff ASN.1 [diff_all]', function () {
    it('Render diff result [diff_render]', function () {
        const diffFile = fs_1.readFileSync('resources/diff_36331-f90.asn1_36331-g00.asn1.json', 'utf8');
        const diffResult = JSON.parse(diffFile);
        const { specOld, specNew } = diffResult;
        const template = fs_1.readFileSync(`${__dirname}/../../resources/diff.pug`, 'utf8');
        const rendered = diff_1.renderDiff(diffResult, template);
        const path = `diff_${specOld}_${specNew}.html`;
        fs_1.writeFileSync(path, rendered);
    });
});
//# sourceMappingURL=test_diff.js.map