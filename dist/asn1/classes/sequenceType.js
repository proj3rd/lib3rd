"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const formatter_1 = require("../formatter");
const spreadsheet_1 = require("../formatter/spreadsheet");
const componentType_1 = require("./componentType");
const extensionAdditionGroup_1 = require("./extensionAdditionGroup");
const extensionMarker_1 = require("./extensionMarker");
/**
 * This is a comma placeholder for a sequence component.
 * `ComponentType.toString()` will put this placeholder for the item.
 * `SequenceType` and `ExtensionAdditionGroup` will replace with with either
 * ',' or '' (empty) based on its position in a sequence by using
 * `toStringWithComma()`.
 */
exports._COMMA = '_COMMA_';
function toStringWithComma(component, shouldInsert) {
    const componentString = component.toString();
    const charToInsert = shouldInsert ? ',' : '';
    if (component instanceof componentType_1.ComponentType) {
        return componentString.replace(exports._COMMA, charToInsert);
    }
    else if (component instanceof extensionAdditionGroup_1.ExtensionAdditionGroup) {
        return `${componentString}${charToInsert}`;
    }
    else if (component instanceof extensionMarker_1.ExtensionMarker) {
        return `${componentString}${charToInsert}`;
    }
    else {
        return unimpl_1.unimpl();
    }
}
exports.toStringWithComma = toStringWithComma;
class SequenceType {
    constructor(components) {
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
    setConstraints(constraints) {
        if (constraints.length > 0) {
            unimpl_1.unimpl();
        }
    }
    toSpreadsheet(worksheet, row, depth) {
        row[spreadsheet_1.HEADER_TYPE] = 'SEQUENCE';
        const r = worksheet.addRow(row);
        spreadsheet_1.drawBorder(worksheet, r, depth);
        this.components.forEach((component) => {
            component.toSpreadsheet(worksheet, {}, depth + 1);
        });
    }
    toString() {
        if (this.components.length === 0) {
            return 'SEQUENCE {}';
        }
        const arrToString = ['SEQUENCE {'];
        const componentsString = this.components
            .map((component, index) => {
            return toStringWithComma(component, index !== this.components.length - 1);
        })
            .join('\n');
        arrToString.push(formatter_1.indent(componentsString));
        arrToString.push('}');
        return arrToString.join('\n');
    }
}
exports.SequenceType = SequenceType;
//# sourceMappingURL=sequenceType.js.map