"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class ObjectClass extends base_1.Base {
    constructor(fieldSpecs, withSyntaxSpec) {
        super();
        this.fieldSpecs = fieldSpecs;
        this.withSyntaxSpec = withSyntaxSpec;
        if (this.withSyntaxSpec) {
            this.withSyntaxSpec.syntaxList.forEach((syntax) => {
                const fieldSpec = this.fieldSpecs.find((item) => item.reference === syntax.primitiveFieldName);
                fieldSpec.alias = syntax.literal;
            });
        }
    }
    depthMax() {
        let depthMax = 0;
        this.fieldSpecs.forEach((fieldSpec) => {
            depthMax = Math.max(depthMax, fieldSpec.depthMax() + 1);
        });
        return depthMax;
    }
    expand(asn1Pool, moduleName, parameterList) {
        this.fieldSpecs.forEach((fieldSpec) => {
            fieldSpec.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
        });
        return this;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        // TODO
        return [row, col];
    }
    replaceParameters(parameterMapping) {
        return this;
    }
    setConstraint(constraints) {
        return this;
    }
    toString() {
        const stringArray = ['CLASS {'];
        const stringFieldSpecs = this.fieldSpecs.map((fieldSpec) => this.indent(fieldSpec.toString())).join(',\n');
        if (stringFieldSpecs.length) {
            stringArray.push(stringFieldSpecs);
        }
        stringArray.push('}');
        if (this.withSyntaxSpec) {
            stringArray.push(this.withSyntaxSpec.toString());
        }
        return stringArray.join('\n');
    }
}
exports.ObjectClass = ObjectClass;
