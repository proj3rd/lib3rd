"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test_numbering = void 0;
const assert_1 = __importDefault(require("assert"));
const numbering_1 = require("../../utils/numbering");
function test_numbering() {
    describe('Numbering utilities', function () {
        it('versionFromCharacter', function () {
            const tcList = [
                { input: '123', expected: [1, 2, 3] },
                { input: 'fa0', expected: [15, 10, 0] },
                { input: '362514', expected: [36, 25, 14] },
            ];
            tcList.forEach((tc) => {
                const { input, expected } = tc;
                assert_1.default.deepStrictEqual(numbering_1.versionFromCharacters(input), expected);
            });
        });
    });
}
exports.test_numbering = test_numbering;
//# sourceMappingURL=numbering.js.map