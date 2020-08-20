"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const fs_1 = require("fs");
const path_1 = require("path");
const logger_1 = require("../logger");
const extractor_1 = require("./extractor");
const logger = logger_1.Logger.getLogger('asn1.extractor.test');
// tslint:disable-next-line: only-arrow-functions
describe('Extract ASN.1 [extract_all]', function () {
    // tslint:disable-next-line: only-arrow-functions
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
        const extracted = extractor_1.extract(input);
        assert_1.default.equal(extracted, expected);
    });
    // tslint:disable-next-line: only-arrow-functions
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
        const extracted = extractor_1.extract(input);
        assert_1.default.equal(extracted, expected);
    });
});
if (require.main === module) {
    const inputPath = process.argv[2];
    if (inputPath === undefined) {
        logger.error('Filepath is not given. Exit.');
        process.exit(-1);
    }
    const text = fs_1.readFileSync(inputPath, 'utf8');
    const asn1 = extractor_1.extract(text);
    const parsedPath = path_1.parse(inputPath);
    const outputName = `${parsedPath.name}.asn1`;
    fs_1.writeFileSync(outputName, asn1);
}
//# sourceMappingURL=test_extractor.js.map