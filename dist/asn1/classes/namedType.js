"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NamedType {
    constructor(name, asnType) {
        this.name = name;
        this.asnType = asnType;
    }
    expand(modules, parameterMappings) {
        const expandedType = this.asnType.expand(modules, parameterMappings);
        if (expandedType !== undefined) {
            this.asnType = expandedType;
        }
        return this;
    }
    toString() {
        return `${this.name}    ${this.asnType.toString()}`;
    }
}
exports.NamedType = NamedType;
//# sourceMappingURL=namedType.js.map