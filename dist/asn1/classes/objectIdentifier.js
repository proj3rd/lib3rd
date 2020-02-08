"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const logging_1 = require("../../utils/logging");
const xlsx_1 = require("../format/xlsx");
const asnType_1 = require("./asnType");
class ObjectIdentifier extends asnType_1.AsnType {
    setConstraint(constraint) {
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn(`Boolean could not handle constraint ${JSON.stringify(constraint)}`);
        }
        return this;
    }
    expand(asn1Pool, moduleName) {
        return this;
    }
    depthMax() {
        return 0;
    }
    replaceParameters(parameterMapping) {
        // Do nothing
    }
    toString() {
        return 'OBJECT IDENTIFIER';
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        ieElem.type = this.toString();
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
        return [row, col];
    }
}
exports.ObjectIdentifier = ObjectIdentifier;
