"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const assignment_1 = require("./assignment");
class ExternalTypeReference {
    constructor(moduleReference, typeReference) {
        this.moduleReference = moduleReference;
        this.typeReference = typeReference;
    }
    expand(modules, parameterMappings) {
        const referencedAssignment = modules.findAssignment(this.typeReference, this.moduleReference);
        if (referencedAssignment === undefined) {
            return this;
        }
        else if (referencedAssignment instanceof assignment_1.TypeAssignment) {
            const { asnType } = referencedAssignment;
            const expandedType = asnType.expand(modules, []);
            return expandedType;
        }
        else if (referencedAssignment instanceof assignment_1.ParameterizedTypeAssignment) {
            return unimpl_1.unimpl();
        }
        else if (referencedAssignment instanceof assignment_1.ValueAssignment) {
            return unimpl_1.unimpl();
        }
        throw Error();
    }
    setConstraints(constraints) {
        if (constraints.length > 0) {
            unimpl_1.unimpl();
        }
    }
    toString() {
        return `${this.moduleReference}.${this.typeReference}`;
    }
}
exports.ExternalTypeReference = ExternalTypeReference;
//# sourceMappingURL=externalTypeReference.js.map