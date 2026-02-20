"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtNotation = void 0;
const constants_1 = require("../constants");
/**
 * X.682 clause 10.7
 * ```
 * @....componentId[0]...componentId[n-1]
 * ```
 */
class AtNotation {
    constructor(level, componentIdList) {
        this.atNotationTag = true;
        this.level = level;
        this.componentIdList = componentIdList;
    }
    static fromObject(obj) {
        const { level, componentIdList, atNotationTag } = obj;
        if (!atNotationTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        // TODO: Need to check if it is non-zero integer or not
        if (typeof level !== 'number') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!(componentIdList instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const isStringList = componentIdList.every((item) => typeof item === 'string');
        if (!isStringList) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        return new AtNotation(level, componentIdList);
    }
    toString() {
        const repeat = this.level > 0 ? this.level + 1 : 0;
        const arrToString = [
            '@',
            '.'.repeat(repeat),
            this.componentIdList.join('.'),
        ];
        return arrToString.join('');
    }
}
exports.AtNotation = AtNotation;
//# sourceMappingURL=atNotation.js.map