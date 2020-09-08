"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const formatter_1 = require("../formatter");
const spreadsheet_1 = require("../formatter/spreadsheet");
class ChoiceType {
    constructor(components) {
        this.components = components;
    }
    /**
     * Expand `components` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        this.components = this.components.map((component) => {
            const expandedComponent = lodash_1.cloneDeep(component).expand(modules, parameterMappings);
            if (lodash_1.isEqual(expandedComponent, component)) {
                return component;
            }
            return expandedComponent;
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
        row[spreadsheet_1.HEADER_TYPE] = 'CHOICE';
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_1.drawBorder(worksheet, r, depth);
        this.components.forEach((component) => {
            component.toSpreadsheet(worksheet, {}, depth + 1);
        });
    }
    toString() {
        if (this.components.length === 0) {
            return 'CHOICE {}';
        }
        const arrToString = ['CHOICE {'];
        const componentsString = this.components
            .map((component) => component.toString())
            .join(',\n');
        arrToString.push(formatter_1.indent(componentsString));
        arrToString.push('}');
        return arrToString.join('\n');
    }
}
exports.ChoiceType = ChoiceType;
//# sourceMappingURL=choiceType.js.map