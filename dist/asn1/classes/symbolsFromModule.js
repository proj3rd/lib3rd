"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolsFromModule = void 0;
const constants_1 = require("../constants");
const formatter_1 = require("../formatter");
const asnSymbol_1 = require("./asnSymbol");
class SymbolsFromModule {
    constructor(moduleName, symbols) {
        this.symbolsFromModuleTag = true;
        this.moduleName = moduleName;
        this.symbols = symbols;
    }
    static fromObject(obj) {
        const { moduleName: moduleNameObject, symbols: symbolsObject, symbolsFromModuleTag } = obj;
        if (!symbolsFromModuleTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof moduleNameObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!(symbolsObject instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const symbols = symbolsObject.map((item) => asnSymbol_1.Reference.fromObject(item));
        return new SymbolsFromModule(moduleNameObject, symbols);
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