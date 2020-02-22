"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const extensionMarker_1 = require("./extensionMarker");
const unionMark_1 = require("./unionMark");
class ObjectSetSpec extends base_1.Base {
    constructor(objectSetSpec) {
        super();
        this.objectSetSpec = objectSetSpec;
    }
    depthMax() {
        let depthMax = 0;
        this.objectSetSpec.forEach((item) => {
            if (item instanceof extensionMarker_1.ExtensionMarker) {
                depthMax = Math.max(depthMax, item.depthMax() + 1);
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
        this.objectSetSpec.forEach((item) => {
            // TODO
        });
        return [row, col];
    }
    replaceParameters() {
        // TODO
    }
    setConstraint() {
        // TODO
        return this;
    }
    toString() {
        const stringArray = [];
        const itemStringArray = [];
        this.objectSetSpec.forEach((item) => {
            if (itemStringArray.length === 0) {
                itemStringArray.push(item);
            }
            else if (item instanceof unionMark_1.UnionMark) {
                itemStringArray.push(item);
                stringArray.push(itemStringArray.join('    '));
                itemStringArray.length = 0;
            }
            else {
                itemStringArray.push(',');
                stringArray.push(itemStringArray.join(''));
                itemStringArray.length = 0;
                itemStringArray.push(item);
            }
        });
        if (itemStringArray.length !== 0) {
            stringArray.push(itemStringArray.join(''));
        }
        return stringArray.join('\n');
    }
}
exports.ObjectSetSpec = ObjectSetSpec;
