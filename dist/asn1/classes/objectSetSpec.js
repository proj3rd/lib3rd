"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const lodash_1 = require("lodash");
const utils_1 = require("../utils");
const base_1 = require("./base");
const comma_1 = require("./comma");
const definedType_1 = require("./definedType");
const extensionMarker_1 = require("./extensionMarker");
const namedType_1 = require("./namedType");
const objectClass_1 = require("./objectClass");
const objectClassField_1 = require("./objectClassField");
const objectIdentifierValue_1 = require("./objectIdentifierValue");
const sequence_1 = require("./sequence");
const singleValue_1 = require("./singleValue");
const unionMark_1 = require("./unionMark");
class ObjectSetSpec extends base_1.Base {
    constructor(objectSetSpec) {
        super();
        this.objectSetSpec = objectSetSpec;
    }
    depthMax() {
        let depthMax = 0;
        this.objectSetSpec.forEach((item) => {
            if (item instanceof extensionMarker_1.ExtensionMarker) {
                depthMax = Math.max(depthMax, item.depthMax() + 1);
            }
        });
        return depthMax;
    }
    expand(asn1Pool, moduleName, parameterList = [], classDefinition) {
        /**
         * TODO: Replace each objectSetSpec with ObjectClass with specified value
         */
        if (this.instantiatedMembers) {
            this.instantiatedMembers = this.instantiatedMembers.map((member) => {
                return member.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
            });
        }
        else {
            this.objectSetSpec = this.objectSetSpec.map((item) => {
                if (item instanceof singleValue_1.SingleValue) {
                    return item.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList, classDefinition);
                }
                return item;
            });
        }
        return this;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        // TODO
        this.objectSetSpec.forEach((item) => {
            // TODO
        });
        return [row, col];
    }
    instantiate(template, asn1Pool) {
        console.log(colors.blue(__filename), 'instantiate()');
        console.log(colors.yellow('Class template'));
        console.log(JSON.stringify(template, null, 2));
        const objectClasses = lodash_1.uniqWith(template.items.map((item) => {
            const { type } = item;
            if (!(type instanceof objectClassField_1.ObjectClassField)) {
                return;
            }
            const { moduleReference, objectClassReference } = type;
            return { reference: { moduleReference, objectClassReference } };
        }).filter((item) => item !== undefined), lodash_1.isEqual);
        objectClasses.forEach((objectClass) => {
            const { moduleReference, objectClassReference } = objectClass.reference;
            objectClass.type = utils_1.findDefinition(objectClassReference, this.getModuleNameToPass(moduleReference), asn1Pool);
        });
        console.log(colors.yellow('ObjectClasses'));
        console.log(JSON.stringify(objectClasses, null, 2));
        template.items.forEach((item) => {
            const { type } = item;
            if (!(type instanceof objectClassField_1.ObjectClassField)) {
                return;
            }
            const objectClass = objectClasses.find((value) => {
                return value.reference.moduleReference === type.moduleReference &&
                    value.reference.objectClassReference === type.objectClassReference;
            });
            if (!objectClass || !(objectClass.type instanceof objectClass_1.ObjectClass)) {
                return;
            }
            const { fieldName } = type;
            const fieldSpec = objectClass.type.fieldSpecs.find((value) => value.reference === fieldName);
            if (!fieldSpec) {
                return;
            }
            type.alias = fieldSpec.alias;
            if (fieldSpec.type instanceof definedType_1.DefinedType) {
                type.typeReference = fieldSpec.type.typeReference;
            }
        });
        console.log(colors.yellow('Updated template'));
        console.log(JSON.stringify(template, null, 2));
        this.instantiatedMembers = [];
        this.objectSetSpec.forEach((item, index) => {
            console.log(colors.yellow('Object Set Spec item'));
            console.log(item);
            if (!(item instanceof singleValue_1.SingleValue)) {
                return;
            }
            if (!(item.value instanceof objectIdentifierValue_1.ObjectIdentifierValue)) {
                return;
            }
            const { objIdComponentsList } = item.value;
            const items = [];
            objIdComponentsList.forEach((objIdComponent, objIdComponentIndex) => {
                const templateItem = template.items.find((value) => {
                    const { type } = value;
                    if (!(type instanceof objectClassField_1.ObjectClassField)) {
                        return false;
                    }
                    return type.alias === objIdComponent;
                });
                if (templateItem) {
                    const type = templateItem.type;
                    const name = type.fieldName;
                    const nextObjIdComponent = objIdComponentsList[objIdComponentIndex + 1];
                    const typeReference = type.typeReference ? type.typeReference : nextObjIdComponent;
                    const value = type.typeReference ? nextObjIdComponent : null;
                    const itemType = new definedType_1.DefinedType();
                    itemType.typeReference = typeReference;
                    const sequenceItem = new namedType_1.NamedType(name, itemType);
                    sequenceItem.default = value;
                    items.push(sequenceItem);
                }
            });
            const sequenceInstantiated = new sequence_1.Sequence(items);
            this.instantiatedMembers.push(sequenceInstantiated);
        });
        return this;
    }
    replaceParameters() {
        return this;
    }
    setConstraint() {
        // TODO
        return this;
    }
    toString() {
        const stringArray = [];
        const stringArrayBeforeComma = [];
        const stringArrayBeforeUnion = [];
        this.objectSetSpec.forEach((item) => {
            if (item instanceof comma_1.Comma) {
                stringArrayBeforeUnion.push(item.toString());
                stringArrayBeforeComma.push(stringArrayBeforeUnion.join(''));
                stringArray.push(stringArrayBeforeComma.join('\n'));
                stringArrayBeforeUnion.length = 0;
                stringArrayBeforeComma.length = 0;
            }
            else if (item instanceof unionMark_1.UnionMark) {
                stringArrayBeforeUnion.push(item.toString());
                stringArrayBeforeComma.push(stringArrayBeforeUnion.join('    '));
                stringArrayBeforeUnion.length = 0;
            }
            else {
                stringArrayBeforeUnion.push(item.toString());
            }
        });
        if (stringArrayBeforeUnion.length) {
            stringArrayBeforeComma.push(stringArrayBeforeUnion.join('    '));
            stringArray.push(stringArrayBeforeComma.join('\n'));
        }
        return stringArray.join('\n');
    }
}
exports.ObjectSetSpec = ObjectSetSpec;
