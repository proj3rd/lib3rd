"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalObjectSetReference = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("../../utils/unimpl");
const constants_1 = require("../constants");
const objectClassAssignment_1 = require("./objectClassAssignment");
const typeAssignment_1 = require("./typeAssignment");
class ExternalObjectSetReference {
    constructor(moduleReference, objectSetReference) {
        this.externalObjectSetReferenceTag = true;
        this.moduleReference = moduleReference;
        this.objectSetReference = objectSetReference;
    }
    static fromObject(obj) {
        const { moduleReference, objectSetReference, externalObjectSetReferenceTag } = obj;
        if (!externalObjectSetReferenceTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof moduleReference !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof objectSetReference !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        return new ExternalObjectSetReference(moduleReference, objectSetReference);
    }
    /**
     * Find an Assignment indicated by ExternalObjectSetReference and
     * returns an expanded copy of it.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        if (parameterMappings.length) {
            return unimpl_1.unimpl(this, parameterMappings);
        }
        const assignment = modules.findAssignment(this.objectSetReference, this.moduleReference);
        if (assignment === undefined) {
            return this;
        }
        if (assignment instanceof typeAssignment_1.TypeAssignment) {
            const expandedType = lodash_1.cloneDeep(lodash_1.cloneDeep(assignment.asnType).expand(modules, []));
            expandedType.reference = this.toString();
            return expandedType;
        }
        if (assignment instanceof objectClassAssignment_1.ObjectClassAssignment) {
            const expandedType = lodash_1.cloneDeep(lodash_1.cloneDeep(assignment.objectClass).expand(modules, []));
            expandedType.reference = this.toString();
            return expandedType;
        }
        return unimpl_1.unimpl(assignment);
    }
    // eslint-disable-next-line class-methods-use-this
    getDepth() {
        return 0;
    }
    toString() {
        return `${this.moduleReference}.${this.objectSetReference}`;
    }
}
exports.ExternalObjectSetReference = ExternalObjectSetReference;
//# sourceMappingURL=externalObjectSetReference.js.map