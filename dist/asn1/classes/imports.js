"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imports = void 0;
class Imports {
    constructor(symbolsFromModule) {
        this.symbolsFromModule = symbolsFromModule;
    }
    toString() {
        const arrToString = ['IMPORTS'];
        this.symbolsFromModule.forEach((symbolsFromModule) => {
            arrToString.push(symbolsFromModule.toString());
        });
        return `${arrToString.join('\n')};`;
    }
}
exports.Imports = Imports;
//# sourceMappingURL=imports.js.map