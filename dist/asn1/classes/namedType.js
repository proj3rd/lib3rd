"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const logging_1 = require("../../utils/logging");
const base_1 = require("./base");
class NamedType extends base_1.Base {
    constructor(name, type) {
        super();
        this.name = name;
        this.type = type;
    }
    setConstraint(constraints) {
        if (!lodash_1.isEmpty(constraints)) {
            logging_1.log.warn(`NamedType could not handle constraint ${JSON.stringify(constraints)}`);
        }
        return this;
    }
    expand(asn1Pool, moduleName, parameterList = []) {
        const expandedType = this.type.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
        this.type = expandedType;
        return this;
    }
    depthMax() {
        return this.type.depthMax();
    }
    replaceParameters(parameterMapping) {
        this.type.replaceParameters(parameterMapping);
        return this;
    }
    toString() {
        return `${this.name.padEnd(48)}    ${this.type}${this.getOptionalString()}`;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        ieElem.ie = this.name;
        const moduleReference = this /* TODO */.type.moduleReference;
        const typeReference = this /* TOdO */.type.typeReference;
        ieElem.reference = `${moduleReference ? moduleReference + '.' : ''}${typeReference ? typeReference : ''}`;
        ieElem.optional = this.optional || this.default ? 'OPTIONAL' : '';
        ieElem.default = this.default ? this.default.toString() : '';
        const tag = this.tag;
        ieElem.tag = tag ? tag.replace(/^-- *?/, '') : '';
        [row, col] = this.type.fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth);
        return [row, col];
    }
    getOptionalString() {
        return this.optional ? '    OPTIONAL' :
            this.default !== undefined ? `    DEFAULT    ${this.default.toString()}` : '';
    }
}
exports.NamedType = NamedType;
