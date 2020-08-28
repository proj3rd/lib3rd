"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("../formatter");
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
//# sourceMappingURL=symbolsFromModule.js.map