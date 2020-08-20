"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("../formatter");
class Imports {
    constructor(symbolsFromModule) {
        this.symbolsFromModule = symbolsFromModule;
    }
    toString() {
        const arrToString = ['IMPORTS'];
        this.symbolsFromModule.forEach((symbolsFromModule) => {
            arrToString.push(symbolsFromModule.toString());
        });
        return arrToString.join('\n') + ';';
    }
}
exports.Imports = Imports;
class SymbolsFromModule {
    constructor(moduleName, symbols) {
        this.moduleName = moduleName;
        this.symbols = symbols;
    }
    toString() {
        const arrToString = [
            formatter_1.indent(this.symbols.map((symbol) => symbol.toString()).join(',\n')),
        ];
        arrToString.push(`FROM ${this.moduleName}`);
        return arrToString.join('\n');
    }
}
exports.SymbolsFromModule = SymbolsFromModule;
//# sourceMappingURL=imports.js.map