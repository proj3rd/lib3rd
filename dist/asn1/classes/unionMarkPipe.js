"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unionMark_1 = require("./unionMark");
class UnionMarkPipe extends unionMark_1.UnionMark {
    toString() {
        return '|';
    }
}
exports.UnionMarkPipe = UnionMarkPipe;
