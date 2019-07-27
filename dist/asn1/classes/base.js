"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.indent = function (text) {
        return text.replace(/^/gm, '  ');
    };
    Base.prototype.addToConstants = function (obj, constants) {
        if (obj !== undefined && isNaN(Number(obj)) && constants.findIndex(function (value) {
            return lodash_1.isEqual(value.constant, obj);
        }) === -1) {
            constants.push({ constant: obj, moduleName: this.moduleName });
        }
    };
    Base.prototype.getModuleNameToPass = function (moduleName) {
        return this.moduleName !== undefined ? this.moduleName : moduleName;
    };
    return Base;
}());
exports.Base = Base;
