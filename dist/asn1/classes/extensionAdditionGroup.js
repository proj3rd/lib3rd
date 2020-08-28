"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("../formatter");
const spreadsheet_1 = require("../formatter/spreadsheet");
const sequenceType_1 = require("./sequenceType");
class ExtensionAdditionGroup {
    constructor(version, components) {
        this.version = version;
        this.components = components;
    }
    expand(modules, parameterMappings) {
        this.components.forEach((component, index) => {
            const expandedComponent = component.expand(modules, parameterMappings);
            this.components[index] = expandedComponent;
        });
        return this;
    }
    getDepth() {
        return this.components.reduce((prev, curr) => {
            return Math.max(prev, curr.getDepth() + 1);
        }, 0);
    }
    toSpreadsheet(worksheet, row, depth) {
        let r = worksheet.addRow({
            [spreadsheet_1.headerIndexed(spreadsheet_1.HEADER_NAME_BASE, depth)]: this.openingBracket(),
        });
        spreadsheet_1.drawBorder(worksheet, r, depth);
        this.components.forEach((component) => {
            component.toSpreadsheet(worksheet, {}, depth + 1);
        });
        r = worksheet.addRow({
            [spreadsheet_1.headerIndexed(spreadsheet_1.HEADER_NAME_BASE, depth)]: ']]',
        });
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    toString() {
        if (this.components.length === 0) {
            const arrToStringEmpty = ['[['];
            if (this.version !== undefined) {
                arrToStringEmpty.push(this.version.toString());
            }
            arrToStringEmpty.push(']]');
            return arrToStringEmpty.join(' ');
        }
        const arrToString = [];
        if (this.version !== undefined) {
            arrToString.push(`[[ ${this.version.toString()}`);
        }
        else {
            arrToString.push('[[');
        }
        const componentsString = this.components
            .map((component, index) => {
            return sequenceType_1.toStringWithComma(component, index !== this.components.length - 1);
        })
            .join('\n');
        arrToString.push(formatter_1.indent(componentsString));
        arrToString.push(']]');
        return arrToString.join('\n');
    }
    openingBracket() {
        if (this.version === undefined) {
            return '[[';
        }
        return `[[ ${this.version.toString()}`;
    }
}
exports.ExtensionAdditionGroup = ExtensionAdditionGroup;
//# sourceMappingURL=extensionAdditionGroup.js.map