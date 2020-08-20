"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
class TypeAssignment {
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
        return `${this.name} ::= ${this.asnType.toString()}`;
    }
}
exports.TypeAssignment = TypeAssignment;
class ObjectClassAssignment {
    constructor(name, objectClass) {
        this.name = name;
        this.objectClass = objectClass;
    }
    expand(modules, parameterMappings) {
        return unimpl_1.unimpl();
    }
    toString() {
        return `${this.name} ::= ${this.objectClass.toString()}`;
    }
}
exports.ObjectClassAssignment = ObjectClassAssignment;
class ParameterizedTypeAssignment {
    constructor(name, parameters, asnType) {
        this.name = name;
        this.parameters = parameters;
        this.asnType = asnType;
    }
    expand(modules, parameterMappings) {
        const parameterMappingsNew = this.parameters.map((parameter) => {
            return {
                actualParameter: undefined,
                parameter,
            };
        });
        const expandedType = this.asnType.expand(modules, parameterMappingsNew);
        if (expandedType !== undefined) {
            this.asnType = expandedType;
        }
        return this;
    }
    toString() {
        const parametersString = this.parameters
            .map((parameter) => parameter.toString())
            .join(', ');
        return `${this.name} {${parametersString}} ::= ${this.asnType.toString()}`;
    }
}
exports.ParameterizedTypeAssignment = ParameterizedTypeAssignment;
class ValueAssignment {
    constructor(name, asnType, value) {
        this.name = name;
        this.asnType = asnType;
        this.value = value;
    }
    expand(modules, parameterMappings) {
        return this;
    }
    toString() {
        return `${this.name}  ${this.asnType.toString()} ::= ${this.value.toString()}`;
    }
}
exports.ValueAssignment = ValueAssignment;
//# sourceMappingURL=assignment.js.map