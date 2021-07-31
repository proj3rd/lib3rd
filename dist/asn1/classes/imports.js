"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imports = void 0;
const constants_1 = require("../constants");
const symbolsFromModule_1 = require("./symbolsFromModule");
class Imports {
    constructor(symbolsFromModule) {
        this.importsTag = true;
        this.symbolsFromModule = symbolsFromModule;
    }
    static fromObject(obj) {
        const { symbolsFromModule: symbolsFromModuleObject, importsTag } = obj;
        if (!importsTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!(symbolsFromModuleObject instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const symbolsFromModule = symbolsFromModuleObject.map((item) => symbolsFromModule_1.SymbolsFromModule.fromObject(item));
        return new Imports(symbolsFromModule);
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