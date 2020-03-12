"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const comma_1 = require("./comma");
const extensionMarker_1 = require("./extensionMarker");
const singleValue_1 = require("./singleValue");
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
    expand(asn1Pool, moduleName, parameterList = [], classDefinition) {
        /**
         * Class definition (JSON-like)
         * "class name": {
         *   "fieldSpecs": [
         *     {
         *       "reference": "&referenceName",
         *       "type": {
         *         "typeReference": "referenceName",
         *         "constraints": [],
         *       },
         *       "unique": boolean,
         *       "optional": boolean,
         *       "default": defaultValue,
         *     }
         *   ]
         * }
         */
        /**
         * "HandoverRequiredIEs": {
         *   "objectSetSpec": {
         *     "objectSetSpec": [
         *       {
         *         "value": {
         *           "objIdComponentsList": [
         *             "ID",
         *             "id-MME-UE-S1AP-ID",
         *             "CRITICALITY",
         *             "reject",
         *             "TYPE",
         *             "MME-UE-S1AP-ID",
         *             "PRESENCE",
         *             "mandatory"
         *           ]
         *         }
         *       },
         *     ],
         *   },
         * }
         */
        /**
         * TODO: Replace each objectSetSpec with ObjectClass with specified value
         */
        this.objectSetSpec.forEach((item) => {
            if (item instanceof singleValue_1.SingleValue) {
                item.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList, classDefinition);
            }
        });
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
        const stringArrayBeforeComma = [];
        const stringArrayBeforeUnion = [];
        this.objectSetSpec.forEach((item) => {
            if (item instanceof comma_1.Comma) {
                stringArrayBeforeUnion.push(item.toString());
                stringArrayBeforeComma.push(stringArrayBeforeUnion.join(''));
                stringArray.push(stringArrayBeforeComma.join('\n'));
                stringArrayBeforeUnion.length = 0;
                stringArrayBeforeComma.length = 0;
            }
            else if (item instanceof unionMark_1.UnionMark) {
                stringArrayBeforeUnion.push(item.toString());
                stringArrayBeforeComma.push(stringArrayBeforeUnion.join('    '));
                stringArrayBeforeUnion.length = 0;
            }
            else {
                stringArrayBeforeUnion.push(item.toString());
            }
        });
        if (stringArrayBeforeUnion.length) {
            stringArrayBeforeComma.push(stringArrayBeforeUnion.join('    '));
            stringArray.push(stringArrayBeforeComma.join('\n'));
        }
        return stringArray.join('\n');
    }
}
exports.ObjectSetSpec = ObjectSetSpec;
