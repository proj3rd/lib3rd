"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const logging_1 = require("../../utils/logging");
const base_1 = require("./base");
class WithComponents extends base_1.Base {
    constructor(components) {
        super();
        this.components = components;
    }
    setConstraint(constraints) {
        if (!lodash_1.isEmpty(constraints)) {
            logging_1.log.warn(`WithComponents could not handle constraint ${JSON.stringify(constraints)}`);
        }
        return this;
    }
    expand(asn1Pool, moduleName) {
        throw Error(`${this.constructor.name}.expand does not need to be implemented`);
    }
    depthMax() {
        throw Error('Depth of this class is not valid');
    }
    replaceParameters(paramterMapping) {
        return this;
    }
    toString() {
        return `{${this.components.map((component) => component.toString()).join(', ')}}`;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        throw Error(`${this.constructor.name}.fillWorksheet does not need to be implemented`);
    }
}
exports.WithComponents = WithComponents;
