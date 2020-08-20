"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * X.682 clause 10.7
 * ```
 * @....componentId[0]...componentId[n-1]
 * ```
 */
class AtNotation {
    constructor(level, componentIdList) {
        this.level = level;
        this.componentIdList = componentIdList;
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