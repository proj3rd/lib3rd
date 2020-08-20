"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExtensionMarker {
    constructor() {
    }
    static getInstance() {
        return ExtensionMarker.instance;
    }
    expand(modules, parameterMappings) {
        return this;
    }
    toString() {
        return '...';
    }
}
exports.ExtensionMarker = ExtensionMarker;
ExtensionMarker.instance = new ExtensionMarker();
//# sourceMappingURL=extensionMarker.js.map