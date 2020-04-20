"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const logging_1 = require("../../utils/logging");
const xlsx_1 = require("../format/xlsx");
const base_1 = require("./base");
class ExtensionMarker extends base_1.Base {
    setConstraint(constraints) {
        if (!lodash_1.isEmpty(constraints)) {
            logging_1.log.warn(`ExtensionMarker could not handle constraint ${JSON.stringify(constraints)}`);
        }
        return this;
    }
    expand(asn1Pool, moduleName) {
        return this;
    }
    depthMax() {
        return 0;
    }
    replaceParameters(paramterMapping) {
        return this;
    }
    toString() {
        return '...';
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        ieElem.ie = '...';
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
        return [row, col];
    }
}
exports.ExtensionMarker = ExtensionMarker;
