"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class ObjectIdentifierValue extends base_1.Base {
    constructor(objIdComponentsList /* TODO */) {
        super();
        this.objIdComponentsList = objIdComponentsList;
    }
    depthMax() {
        let depthMax = 0;
        this.objIdComponentsList.forEach((objIdComponents) => {
            depthMax = Math.max(depthMax, objIdComponents.depthMax() + 1);
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
        // TODO
    }
    setConstraint(constraint) {
        // Do nothing
        return this;
    }
    toString() {
        return !this.objIdComponentsList.length ? ' { }' :
            ` { ${this.objIdComponentsList.map((item) => item.toString()).join(', ')} }`;
    }
}
exports.ObjectIdentifierValue = ObjectIdentifierValue;
