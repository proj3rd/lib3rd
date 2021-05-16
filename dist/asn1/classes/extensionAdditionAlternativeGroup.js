"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionAdditionAlternativeGroup = void 0;
const lodash_1 = require("lodash");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const formatter_1 = require("../formatter");
const spreadsheet_2 = require("../formatter/spreadsheet");
const namedType_1 = require("./namedType");
class ExtensionAdditionAlternativeGroup {
    constructor(version, components) {
        this.extensionAdditionAlternativeGroupTag = true;
        this.version = version;
        this.components = components;
    }
    static fromObject(obj) {
        const { version: versionObject, components: componentsObject, extensionAdditionAlternativeGroupTag, } = obj;
        if (!extensionAdditionAlternativeGroupTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (versionObject !== undefined && typeof versionObject !== 'number') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!(componentsObject instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const components = componentsObject.map((item) => namedType_1.NamedType.fromObject(item));
        return new ExtensionAdditionAlternativeGroup(versionObject, components);
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
            const arrToStringEmpty = [this.openingBracket()];
            arrToStringEmpty.push(']]');
            return arrToStringEmpty.join(' ');
        }
        const arrToString = [];
        arrToString.push(this.openingBracket());
        const componentsString = this.components
            .map((component) => component.toString())
            .join(',\n');
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
exports.ExtensionAdditionAlternativeGroup = ExtensionAdditionAlternativeGroup;
//# sourceMappingURL=extensionAdditionAlternativeGroup.js.map