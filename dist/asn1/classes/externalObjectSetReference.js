"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExternalObjectSetReference {
    constructor(moduleReference, objectSetReference) {
        this.moduleReference = moduleReference;
        this.objectSetReference = objectSetReference;
    }
    toString() {
        return `${this.moduleReference}.${this.objectSetReference}`;
    }
}
exports.ExternalObjectSetReference = ExternalObjectSetReference;
//# sourceMappingURL=externalObjectSetReference.js.map