"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionAdditionGroup = void 0;
const lodash_1 = require("lodash");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const formatter_1 = require("../formatter");
const spreadsheet_2 = require("../formatter/spreadsheet");
const componentType_1 = require("./componentType");
const sequenceType_1 = require("./sequenceType");
class ExtensionAdditionGroup {
    constructor(version, components) {
        this.extensionAdditionGroupTag = true;
        this.version = version;
        this.components = components;
    }
    static fromObject(obj) {
        const { version, components: componentsObject, extensionAdditionGroupTag } = obj;
        if (!extensionAdditionGroupTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (version !== undefined && typeof version !== 'number') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!(componentsObject instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const components = componentsObject.map((item) => componentType_1.ComponentType.fromObject(item));
        return new ExtensionAdditionGroup(version, components);
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
        return this.components.reduce((prev, curr) => Math.max(prev, curr.getDepth() + 1), 0);
    }
    toSpreadsheet(worksheet, row, depth) {
        const r1 = worksheet.addRow({
            [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)]: this.openingBracket(),
        });
        spreadsheet_1.setOutlineLevel(r1, depth);
        spreadsheet_1.drawBorder(worksheet, r1, depth);
        this.components.forEach((component) => {
            component.toSpreadsheet(worksheet, {}, depth + 1);
        });
        const r2 = worksheet.addRow({
            [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)]: ']]',
        });
        spreadsheet_1.setOutlineLevel(r2, depth);
        spreadsheet_1.drawBorder(worksheet, r2, depth);
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
            .map((component, index) => sequenceType_1.toStringWithComma(component, index !== this.components.length - 1))
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