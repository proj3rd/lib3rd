"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class AsnType extends base_1.Base {
    constraintsToString() {
        return this.constraints && this.constraints.length ?
            ` (${this.constraints.map((constraint) => constraint.toString()).join(', ')})` : '';
    }
}
exports.AsnType = AsnType;
