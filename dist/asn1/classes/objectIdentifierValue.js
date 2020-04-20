"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asnBoolean_1 = require("./asnBoolean");
const base_1 = require("./base");
const bitString_1 = require("./bitString");
const choice_1 = require("./choice");
const enumerated_1 = require("./enumerated");
const integer_1 = require("./integer");
const null_1 = require("./null");
const octetString_1 = require("./octetString");
const sequence_1 = require("./sequence");
const sequenceOf_1 = require("./sequenceOf");
class ObjectIdentifierValue extends base_1.Base {
    constructor(objIdComponentsList) {
        super();
        this.objIdComponentsList = objIdComponentsList;
    }
    depthMax() {
        let depthMax = 0;
        this.objIdComponentsList.forEach((objIdComponents) => {
            if (objIdComponents instanceof asnBoolean_1.AsnBoolean ||
                objIdComponents instanceof bitString_1.BitString ||
                objIdComponents instanceof choice_1.Choice ||
                objIdComponents instanceof enumerated_1.Enumerated ||
                objIdComponents instanceof integer_1.Integer ||
                objIdComponents instanceof null_1.Null ||
                objIdComponents instanceof octetString_1.OctetString ||
                objIdComponents instanceof sequence_1.Sequence ||
                objIdComponents instanceof sequenceOf_1.SequenceOf) {
                depthMax = Math.max(depthMax, objIdComponents.depthMax() + 1);
            }
        });
        return depthMax;
    }
    expand(asn1Pool, moduleName, parameterList = []) {
        // TODO
        return this;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        // TODO
        return [row, col];
    }
    replaceParameters(parameterMapping) {
        return this;
    }
    setConstraint(constraints) {
        // Do nothing
        return this;
    }
    toString() {
        return !this.objIdComponentsList.length ? '{ }' :
            `{ ${this.objIdComponentsList.map((item) => item.toString()).join('    ')} }`;
    }
}
exports.ObjectIdentifierValue = ObjectIdentifierValue;
