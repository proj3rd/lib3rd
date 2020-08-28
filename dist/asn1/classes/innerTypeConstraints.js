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
//# sourceMappingURL=innerTypeConstraints.js.map