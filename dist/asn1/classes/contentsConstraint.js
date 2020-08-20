"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContentsConstraint {
    constructor(asnType, value) {
        if (asnType === undefined && value === undefined) {
            throw Error();
        }
        this.asnType = asnType;
        this.value = value;
    }
    toString() {
        const arrToString = [];
        if (this.asnType !== undefined) {
            arrToString.push(`CONTAINING ${this.asnType.toString()}`);
        }
        if (this.value !== undefined) {
            arrToString.push(`ENCODED BY ${this.value.toString()}`);
        }
        return arrToString.join(' ');
    }
}
exports.ContentsConstraint = ContentsConstraint;
//# sourceMappingURL=contentsConstraint.js.map