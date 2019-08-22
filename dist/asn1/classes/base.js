"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class Base {
    indent(text) {
        return text.replace(/^/gm, '  ');
    }
    addToConstants(obj, constants) {
        if (obj !== undefined && isNaN(Number(obj)) && constants.findIndex((value) => {
            return lodash_1.isEqual(value.constant, obj);
        }) === -1) {
            constants.push({ constant: obj, moduleName: this.moduleName });
        }
    }
    getModuleNameToPass(moduleName) {
        return this.moduleName !== undefined ? this.moduleName : moduleName;
    }
}
exports.Base = Base;
