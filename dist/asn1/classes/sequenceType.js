"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequenceType = exports.toStringWithComma = exports.COMMA_PLACEHOLDER = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const logger_1 = require("../../logger");
const constants_1 = require("../constants");
const formatter_1 = require("../formatter");
const spreadsheet_2 = require("../formatter/spreadsheet");
const rootSequenceComponents_1 = require("../types/rootSequenceComponents");
const componentType_1 = require("./componentType");
const extensionAdditionGroup_1 = require("./extensionAdditionGroup");
const extensionMarker_1 = require("./extensionMarker");
const objectClassFieldType_1 = require("./objectClassFieldType");
const objectSetAssignment_1 = require("./objectSetAssignment");
const typeReference_1 = require("./typeReference");
const logger = logger_1.Logger.getLogger('asn1.class.SequenceType');
/**
 * This is a comma placeholder for a sequence component.
 * `ComponentType.toString()` will put this placeholder for the item.
 * `SequenceType` and `ExtensionAdditionGroup` will replace with with either
 * ',' or '' (empty) based on its position in a sequence by using
 * `toStringWithComma()`.
 */
exports.COMMA_PLACEHOLDER = '_COMMA_';
function toStringWithComma(component, shouldInsert) {
    const componentString = component.toString();
    const charToInsert = shouldInsert ? ',' : '';
    if (component instanceof componentType_1.ComponentType) {
        return componentString.replace(exports.COMMA_PLACEHOLDER, charToInsert);
    }
    if (component instanceof extensionAdditionGroup_1.ExtensionAdditionGroup) {
        return `${componentString}${charToInsert}`;
    }
    if (component instanceof extensionMarker_1.ExtensionMarker) {
        return `${componentString}${charToInsert}`;
    }
    return unimpl_1.unimpl();
}
exports.toStringWithComma = toStringWithComma;
class SequenceType {
    constructor(components) {
        this.sequenceTypeTag = true;
        this.components = components;
    }
    static fromObject(obj) {
        const { components: componentsObject, reference: referenceObject, sequenceTypeTag, } = obj;
        if (!sequenceTypeTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!(componentsObject instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (referenceObject && typeof referenceObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const components = componentsObject.map((item) => rootSequenceComponents_1.RootSequenceComponentsFromObject(item));
        const sequenceType = new SequenceType(components);
        sequenceType.reference = referenceObject;
        return sequenceType;
    }
    /**
     * Expand `components` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     * @returns Returns {@link SequenceType} of {@link ObjectSet}.
     * {@link ObjectSet} is only applicable when expanding RAN3 ASN.1 spec.
     */
    expand(modules, parameterMappings) {
        logger.debug('expand()');
        const paramToInstantiate = this.parameterToInstantiate(parameterMappings);
        if (paramToInstantiate) {
            const { actualParameter } = paramToInstantiate;
            if (typeof actualParameter !== 'string') {
                return this.expandFallback(modules, parameterMappings);
            }
            const assignment = modules.findAssignment(actualParameter);
            if (assignment === undefined) {
                return this;
            }
            if (!(assignment instanceof objectSetAssignment_1.ObjectSetAssignment)) {
                return unimpl_1.unimpl();
            }
            const objectSet = lodash_1.cloneDeep(assignment.objectSet);
            const expandedObjectSet = lodash_1.cloneDeep(lodash_1.cloneDeep(objectSet).expand(modules, []));
            if (lodash_1.isEqual(expandedObjectSet, objectSet)) {
                objectSet.reference = actualParameter;
                return objectSet;
            }
            expandedObjectSet.reference = actualParameter;
            return expandedObjectSet;
        }
        return this.expandFallback(modules, parameterMappings);
    }
    getDepth() {
        return this.components.reduce((prev, curr) => Math.max(prev, curr.getDepth() + 1), 0);
    }
    // eslint-disable-next-line class-methods-use-this
    setConstraints(constraints) {
        if (constraints.length > 0) {
            unimpl_1.unimpl();
        }
    }
    toSpreadsheet(worksheet, row, depth) {
        if (this.reference && !row[spreadsheet_2.HEADER_REFERENCE]) {
            // eslint-disable-next-line no-param-reassign
            row[spreadsheet_2.HEADER_REFERENCE] = this.reference;
        }
        spreadsheet_2.appendInColumn(row, spreadsheet_2.HEADER_TYPE, 'SEQUENCE');
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
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
            .map((component, index) => toStringWithComma(component, index !== this.components.length - 1))
            .join('\n');
        arrToString.push(formatter_1.indent(componentsString));
        arrToString.push('}');
        return arrToString.join('\n');
    }
    expandFallback(modules, parameterMappings) {
        this.components = this.components.map((component) => {
            const expandedComponent = lodash_1.cloneDeep(component).expand(modules, parameterMappings);
            if (lodash_1.isEqual(expandedComponent, component)) {
                return component;
            }
            return expandedComponent;
        });
        return this;
    }
    parameterToInstantiate(parameterMappings) {
        return parameterMappings.find((paramMap) => {
            const { parameter } = paramMap;
            const { paramGovernor } = parameter;
            if (!(paramGovernor instanceof typeReference_1.TypeReference)) {
                return false;
            }
            const component = this.components.find((compo) => {
                if (compo instanceof componentType_1.ComponentType) {
                    const { asnType } = compo;
                    if (!(asnType instanceof objectClassFieldType_1.ObjectClassFieldType)) {
                        return false;
                    }
                    const { definedObjectClass } = asnType;
                    const { objectClassReference } = definedObjectClass;
                    if (paramGovernor.typeReference === objectClassReference) {
                        return true;
                    }
                }
                return unimpl_1.todo('ExtensionAdditionGroup');
            });
            return component !== undefined;
        });
    }
}
exports.SequenceType = SequenceType;
//# sourceMappingURL=sequenceType.js.map