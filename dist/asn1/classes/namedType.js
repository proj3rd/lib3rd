"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedType = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("../../utils/unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
const asnType_1 = require("../types/asnType");
const nullType_1 = require("./nullType");
const objectSet_1 = require("./objectSet");
class NamedType {
    constructor(name, asnType) {
        this.namedTypeTag = true;
        this.name = name;
        this.asnType = asnType;
        if (asnType instanceof objectSet_1.ObjectSet) {
            return unimpl_1.unimpl('ObjectSet cannot be used in instantiating but expanding NamedType');
        }
    }
    static fromObject(obj) {
        const { name: nameObject, asnType: asnTypeObject, namedTypeTag } = obj;
        if (!namedTypeTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof nameObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const { objectSetTag } = obj;
        const asnType = objectSetTag ? objectSet_1.ObjectSet.fromObject(asnTypeObject) : asnType_1.AsnTypeFromObject(asnTypeObject);
        const namedType = new NamedType(nameObject, new nullType_1.NullType()); // new NullType() is WA
        namedType.asnType = asnType;
        return namedType;
    }
    /**
     * Expand `asnType` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        const expandedType = lodash_1.cloneDeep(this.asnType).expand(modules, parameterMappings);
        if (!lodash_1.isEqual(expandedType, this.asnType)) {
            this.asnType = expandedType;
        }
        return this;
    }
    getDepth() {
        return this.asnType.getDepth();
    }
    toSpreadsheet(worksheet, row, depth) {
        this.asnType.toSpreadsheet(worksheet, {
            [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)]: this.name,
        }, depth);
    }
    toString() {
        return `${this.name}    ${this.asnType.toString()}`;
    }
}
exports.NamedType = NamedType;
//# sourceMappingURL=namedType.js.map