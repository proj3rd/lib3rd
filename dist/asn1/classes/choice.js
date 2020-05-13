"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const logging_1 = require("../../utils/logging");
const xlsx_1 = require("../format/xlsx");
const asnType_1 = require("./asnType");
class Choice extends asnType_1.AsnType {
    constructor(choices) {
        super();
        this.choices = choices;
    }
    setConstraint(constraints) {
        if (!lodash_1.isEmpty(constraints)) {
            logging_1.log.warn(`Choice constraint ${JSON.stringify(constraints)}`);
        }
        return this;
    }
    expand(asn1Pool, moduleName, parameterList = []) {
        this.choices = this.choices.map((choice) => {
            return choice.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
        });
        return this;
    }
    depthMax() {
        let depthMax = 0;
        this.choices.forEach((choice) => {
            depthMax = Math.max(depthMax, choice.depthMax() + 1);
        });
        return depthMax;
    }
    replaceParameters(parameterMapping) {
        this.choices.forEach((choice) => {
            choice.replaceParameters(parameterMapping);
        });
        return this;
    }
    toString() {
        return !this.choices.length ? 'CHOICE {}' : [
            'CHOICE {',
            this.choices.map((choice) => this.indent(choice.toString())).join(',\n'),
            '}',
        ].join('\n');
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        ieElem.type = 'CHOICE';
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
        this.choices.forEach((choice) => {
            [row, col] = choice.fillWorksheet({}, ws, row, col, depthMax, constants, formatConfig, depth + 1);
        });
        return [row, col];
    }
}
exports.Choice = Choice;
