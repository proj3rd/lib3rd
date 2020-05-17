"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unionMark_1 = require("./unionMark");
class UnionMarkLiteral extends unionMark_1.UnionMark {
    toString() {
        return 'UNION';
    }
}
exports.UnionMarkLiteral = UnionMarkLiteral;
