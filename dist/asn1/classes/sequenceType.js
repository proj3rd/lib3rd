"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const formatter_1 = require("../formatter");
const extensionMarker_1 = require("./extensionMarker");
/**
 * This is a comma placeholder for a sequence component.
 * `ComponentType.toString()` will put this placeholder for the item.
 * `SequenceType` and `ExtensionAdditionGroup` will replace with with either
 * ',' or '' (empty) based on its position in a sequence by using
 * `toStringWithComma()`.
 */
const _COMMA = '_COMMA_';
function toStringWithComma(component, shouldInsert) {
    const componentString = component.toString();
    const charToInsert = shouldInsert ? ',' : '';
    if (component instanceof ComponentType) {
        return componentString.replace(_COMMA, charToInsert);
    }
    else if (component instanceof ExtensionAdditionGroup) {
        return `${componentString}${charToInsert}`;
    }
    else if (component instanceof extensionMarker_1.ExtensionMarker) {
        return `${componentString}${charToInsert}`;
    }
    else {
        return unimpl_1.unimpl();
    }
}
class SequenceType {
    constructor(components) {
        this.components = components;
    }
    expand(modules, parameterMappings) {
        this.components.forEach((component, index) => {
            const expandedComponent = component.expand(modules, parameterMappings);
            this.components[index] = expandedComponent;
        });
        return this;
    }
    setConstraints(constraints) {
        if (constraints.length > 0) {
            unimpl_1.unimpl();
        }
    }
    toString() {
        if (this.components.length === 0) {
            return 'SEQUENCE {}';
        }
        const arrToString = ['SEQUENCE {'];
        const componentsString = this.components
            .map((component, index) => {
            return toStringWithComma(component, index !== this.components.length - 1);
        })
            .join('\n');
        arrToString.push(formatter_1.indent(componentsString));
        arrToString.push('}');
        return arrToString.join('\n');
    }
}
exports.SequenceType = SequenceType;
class ComponentType {
    constructor(namedType, optionality, tag) {
        const { name, asnType } = namedType;
        this.name = name;
        this.asnType = asnType;
        this.optionality = optionality;
        this.tag = tag;
    }
    expand(modules, parameterMappings) {
        const expandedType = this.asnType.expand(modules, parameterMappings);
        if (expandedType) {
            this.asnType = expandedType;
        }
        return this;
    }
    /**
     * This method will return a string with a comma placeholder.
     * And it is discouraged to call `ComponentType.toString()` outside of
     * `SequenceType` and `ExtensionAdditionGroup`.
     */
    toString() {
        const arrToString = [this.name];
        if (this.optionality === undefined) {
            arrToString.push(`${this.asnType.toString()}${_COMMA}`);
        }
        else if (this.optionality !== undefined) {
            arrToString.push(this.asnType.toString());
            arrToString.push(`${this.optionality.toString()}${_COMMA}`);
        }
        if (this.tag.length > 0) {
            arrToString.push(this.tag);
        }
        return arrToString.join('    ');
    }
}
exports.ComponentType = ComponentType;
class ExtensionAdditionGroup {
    constructor(version, components) {
        this.version = version;
        this.components = components;
    }
    expand(modules, parameterMappings) {
        this.components.forEach((component, index) => {
            const expandedComponent = component.expand(modules, parameterMappings);
            this.components[index] = expandedComponent;
        });
        return this;
    }
    toString() {
        if (this.components.length === 0) {
            const arrToStringEmpty = ['[['];
            if (this.version !== undefined) {
                arrToStringEmpty.push(this.version.toString());
            }
            arrToStringEmpty.push(']]');
            return arrToStringEmpty.join(' ');
        }
        const arrToString = [];
        if (this.version !== undefined) {
            arrToString.push(`[[ ${this.version.toString()}`);
        }
        else {
            arrToString.push('[[');
        }
        const componentsString = this.components
            .map((component, index) => {
            return toStringWithComma(component, index !== this.components.length - 1);
        })
            .join('\n');
        arrToString.push(formatter_1.indent(componentsString));
        arrToString.push(']]');
        return arrToString.join('\n');
    }
}
exports.ExtensionAdditionGroup = ExtensionAdditionGroup;
//# sourceMappingURL=sequenceType.js.map