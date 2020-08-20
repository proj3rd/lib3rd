"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const formatter_1 = require("../formatter");
class ChoiceType {
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
            return 'CHOICE {}';
        }
        const arrToString = ['CHOICE {'];
        const componentsString = this.components
            .map((component) => component.toString())
            .join(',\n');
        arrToString.push(formatter_1.indent(componentsString));
        arrToString.push('}');
        return arrToString.join('\n');
    }
}
exports.ChoiceType = ChoiceType;
class ExtensionAdditionAlternativeGroup {
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
            .map((component) => component.toString())
            .join(',\n');
        arrToString.push(formatter_1.indent(componentsString));
        arrToString.push(']]');
        return arrToString.join('\n');
    }
}
exports.ExtensionAdditionAlternativeGroup = ExtensionAdditionAlternativeGroup;
//# sourceMappingURL=choiceType.js.map