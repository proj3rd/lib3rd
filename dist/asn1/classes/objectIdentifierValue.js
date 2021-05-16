"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectIdentifierValue = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const formatter_1 = require("../formatter");
const spreadsheet_2 = require("../formatter/spreadsheet");
const asnType_1 = require("../types/asnType");
const value_1 = require("../types/value");
const objectClassAssignment_1 = require("./objectClassAssignment");
const objectSet_1 = require("./objectSet");
const objectSetAssignment_1 = require("./objectSetAssignment");
const parameterizedTypeAssignment_1 = require("./parameterizedTypeAssignment");
const typeAssignment_1 = require("./typeAssignment");
const valueAssignment_1 = require("./valueAssignment");
/**
 * X.680 clause 32.3
 * ```
 * { objectIdComponents[0] ... objectIdComponents[n-1] }
 * ```
 * # Limitations
 * A form of `{ definedValue objectIdComponentsList }` is not supported
 */
class ObjectIdentifierValue {
    constructor(objectIdComponentsList) {
        this.objectIdentifierValueTag = true;
        this.compoundComponentList = [
            // 36413-g00
            'INITIATING MESSAGE',
            'SUCCESSFUL OUTCOME',
            'UNSUCCESSFUL OUTCOME',
            'PROCEDURE CODE',
            'FIRST CRITICALITY',
            'FIRST TYPE',
            'SECOND CRITICALITY',
            'SECOND TYPE',
        ];
        this.objectIdComponentsList = this.compoundComponent(objectIdComponentsList);
        // TODO: Check `objectIdComponentsList[i]` is instance of `ObjectIdComponents`
    }
    static fromObject(obj) {
        const { objectIdComponentsList: objectIdComponentsListObj, reference: referenceObj, objectIdentifierValueTag, } = obj;
        if (!objectIdentifierValueTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (referenceObj && typeof referenceObj !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!(objectIdComponentsListObj instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const objectIdComponentsList = objectIdComponentsListObj.map((item) => {
            if (typeof item === 'string') {
                return item;
            }
            try {
                return asnType_1.AsnTypeFromObject(item);
            }
            catch (e) { }
            finally { }
            try {
                return value_1.ValueFromObject(item);
            }
            catch (e) { }
            finally { }
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        });
        const objectIdentifierValue = new ObjectIdentifierValue([]);
        objectIdentifierValue.objectIdComponentsList = objectIdComponentsList;
        objectIdentifierValue.reference = referenceObj;
        return objectIdentifierValue;
    }
    /**
     * Expand `objectIdComponentsList` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        if (parameterMappings.length) {
            return unimpl_1.unimpl();
        }
        this.objectIdComponentsList = this.objectIdComponentsList.map((objectIdComponents, index) => {
            if (index % 2 === 0) {
                return objectIdComponents;
            }
            if (typeof objectIdComponents === 'string') {
                const assignment = modules.findAssignment(objectIdComponents);
                if (assignment === undefined) {
                    return objectIdComponents;
                }
                if (assignment instanceof typeAssignment_1.TypeAssignment) {
                    const asnType = lodash_1.cloneDeep(assignment.asnType);
                    const expandedType = lodash_1.cloneDeep(lodash_1.cloneDeep(asnType).expand(modules, []));
                    if (lodash_1.isEqual(expandedType, asnType)) {
                        if (asnType instanceof objectSet_1.ObjectSet) {
                            return unimpl_1.unimpl();
                        }
                        asnType.reference = objectIdComponents;
                        return asnType;
                    }
                    if (expandedType instanceof objectSet_1.ObjectSet) {
                        return unimpl_1.unimpl();
                    }
                    expandedType.reference = objectIdComponents;
                    return expandedType;
                }
                if (assignment instanceof objectClassAssignment_1.ObjectClassAssignment) {
                    return unimpl_1.unimpl();
                }
                if (assignment instanceof objectSetAssignment_1.ObjectSetAssignment) {
                    return unimpl_1.unimpl();
                }
                if (assignment instanceof parameterizedTypeAssignment_1.ParameterizedTypeAssignment) {
                    return unimpl_1.unimpl();
                }
                if (assignment instanceof valueAssignment_1.ValueAssignment) {
                    return objectIdComponents;
                }
                return unimpl_1.unreach();
            }
            const expandedType = lodash_1.cloneDeep(objectIdComponents).expand(modules, parameterMappings);
            if (lodash_1.isEqual(expandedType, objectIdComponents)) {
                return objectIdComponents;
            }
            if (expandedType instanceof objectSet_1.ObjectSet) {
                return unimpl_1.unimpl();
            }
            return expandedType;
        });
        return this;
    }
    getDepth() {
        return this.objectIdComponentsList.reduce((prev, curr) => {
            const depthCurr = typeof curr === 'string' ? 0 : curr.getDepth();
            return Math.max(prev, depthCurr + 1);
        }, 0);
    }
    toSpreadsheet(worksheet, row, depth) {
        if (this.objectIdComponentsList.length === 1) {
            unimpl_1.unreach();
        }
        spreadsheet_2.appendInColumn(row, spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth), '{');
        if (this.reference && !row[spreadsheet_2.HEADER_REFERENCE]) {
            // eslint-disable-next-line no-param-reassign
            row[spreadsheet_2.HEADER_REFERENCE] = this.reference;
        }
        const r1 = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r1, depth);
        spreadsheet_1.drawBorder(worksheet, r1, depth);
        this.objectIdComponentsList.forEach((components, index) => {
            if (index % 2 !== 0) {
                return;
            }
            if (typeof components !== 'string') {
                unimpl_1.unreach(components);
                return;
            }
            const rowComponents = {
                [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth + 1)]: components,
            };
            const componentsNext = this.objectIdComponentsList[index + 1];
            if (componentsNext === undefined) {
                const rComponents = worksheet.addRow(rowComponents);
                spreadsheet_1.setOutlineLevel(rComponents, depth + 1);
                spreadsheet_1.drawBorder(worksheet, rComponents, depth + 1);
            }
            else if (typeof componentsNext === 'string') {
                rowComponents[spreadsheet_2.HEADER_REFERENCE] = componentsNext;
                const rComponents = worksheet.addRow(rowComponents);
                spreadsheet_1.setOutlineLevel(rComponents, depth + 1);
                spreadsheet_1.drawBorder(worksheet, rComponents, depth + 1);
            }
            else {
                componentsNext.toSpreadsheet(worksheet, rowComponents, depth + 1);
            }
        });
        const r2 = worksheet.addRow({
            [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)]: '}',
        });
        spreadsheet_1.setOutlineLevel(r2, depth);
        spreadsheet_1.drawBorder(worksheet, r2, depth);
    }
    toString() {
        if (this.objectIdComponentsList.length === 1) {
            return `{${this.objectIdComponentsList[0].toString()}}`;
        }
        const arrToString = ['{'];
        this.objectIdComponentsList.forEach((component, index) => {
            if (index % 2 !== 0) {
                return;
            }
            const componentNext = this.objectIdComponentsList[index + 1];
            if (componentNext === undefined) {
                arrToString.push(formatter_1.indent(component.toString()));
                return;
            }
            arrToString.push(formatter_1.indent(`${component.toString()}    ${componentNext.toString()}`));
        });
        arrToString.push('}');
        return arrToString.join('\n');
    }
    compoundComponent(objectIdComponentsList) {
        const objectIdComponentsListOut = [];
        const { length } = objectIdComponentsList;
        for (let i = 0; i < length;) {
            const firstComponent = objectIdComponentsList[i];
            if (typeof firstComponent !== 'string') {
                objectIdComponentsListOut.push(firstComponent);
                i += 1;
            }
            else {
                // Make the longest word matching one of compound component list
                const tempStringList = [firstComponent];
                for (let j = i + 1; j < length; j += 1) {
                    const latestComponent = tempStringList.join(' ');
                    const component = objectIdComponentsList[j];
                    if (typeof component !== 'string') {
                        objectIdComponentsListOut.push(latestComponent);
                        tempStringList.length = 0;
                        i = j;
                        break;
                    }
                    tempStringList.push(component);
                    const newComponent = tempStringList.join(' ');
                    if (this.compoundComponentList
                        .find((compound) => compound.startsWith(newComponent)) === undefined) {
                        objectIdComponentsListOut.push(latestComponent);
                        tempStringList.length = 0;
                        i = j;
                        break;
                    }
                    if (this.compoundComponentList.find((compound) => compound === newComponent) !== undefined) {
                        objectIdComponentsListOut.push(newComponent);
                        tempStringList.length = 0;
                        i = j + 1;
                        break;
                    }
                }
                if (tempStringList.length) {
                    objectIdComponentsListOut.push(tempStringList.join(' '));
                    i += 1;
                }
            }
        }
        return objectIdComponentsListOut;
    }
}
exports.ObjectIdentifierValue = ObjectIdentifierValue;
//# sourceMappingURL=objectIdentifierValue.js.map