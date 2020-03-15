"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectIdentifierValue_1 = require("../classes/objectIdentifierValue");
const asnType_1 = require("./asnType");
const base_1 = require("./base");
class FieldSpec extends base_1.Base {
    constructor(reference, type, unique, optionalitySpec = { optional: false }) {
        super();
        this.reference = reference;
        this.type = type;
        this.unique = unique;
        this.optional = optionalitySpec.optional;
        this.default = optionalitySpec.default;
    }
    depthMax() {
        if (this.default instanceof asnType_1.AsnType || this.default instanceof objectIdentifierValue_1.ObjectIdentifierValue) {
            return Math.max(0, this.default.depthMax() + 1);
        }
        return 0;
    }
    expand(asn1Pool, moduleName, parameterList) {
        // TODO
        return this;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        // TODO
        return [row, col];
    }
    replaceParameters(parameterMapping) {
        // Do nothing
    }
    setConstraint(constraints) {
        return this;
    }
    toString() {
        const pad = this.type || this.unique || this.optional || this.default ? 48 : 0;
        const stringArray = [this.reference.padEnd(pad)];
        if (this.actualValue) {
            stringArray.push(this.actualValue.toString());
        }
        else if (this.type) {
            stringArray.push(this.type.toString());
        }
        if (this.unique) {
            stringArray.push('UNIQUE');
        }
        if (this.optional) {
            stringArray.push('OPTIONAL');
        }
        if (this.default) {
            stringArray.push('DEFAULT');
            stringArray.push(this.default.toString());
        }
        return stringArray.join('    ');
    }
}
exports.FieldSpec = FieldSpec;
