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
    setConstraint(constraint) {
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn(`WithComponents could not handle constraint ${JSON.stringify(constraint)}`);
        }
        return this;
    }
    expand(asn1Pool /* TODO */, moduleName) {
        throw Error(`${this.constructor.name}.expand does not need to be implemented`);
    }
    depthMax() {
        throw Error('Depth of this class is not valid');
    }
    replaceParameters(paramterMapping) {
        // Do nothing
    }
    toString() {
        return `{${this.components.map((component) => component.toString()).join(', ')}}`;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        throw Error(`${this.constructor.name}.fillWorksheet does not need to be implemented`);
    }
}
exports.WithComponents = WithComponents;
