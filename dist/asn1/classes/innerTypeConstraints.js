"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Currently it supports only MultipleTypeConstraints
 */
class InnerTypeConstraints {
    constructor(components) {
        this.components = components;
    }
    toString() {
        const componentsString = this.components
            .map((component) => component.toString())
            .join(', ');
        return `WITH COMPONENTS {${componentsString}}`;
    }
}
exports.InnerTypeConstraints = InnerTypeConstraints;
class ComponentPresence {
    constructor(name, presence) {
        if (presence !== 'ABSENT' && presence !== 'PRESENT') {
            throw Error();
        }
        this.name = name;
        this.presence = presence;
    }
    toString() {
        return `${this.name} ${this.presence}`;
    }
}
exports.ComponentPresence = ComponentPresence;
//# sourceMappingURL=innerTypeConstraints.js.map