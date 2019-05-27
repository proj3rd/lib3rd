"use strict";
exports.__esModule = true;
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.indent = function (text) {
        return text.replace(/^/gm, '  ');
    };
    Base.prototype.addToConstants = function (obj, constants) {
        if (obj !== undefined && isNaN(Number(obj))) {
            constants.push({ constant: obj });
        }
    };
    Base.prototype.getModuleNameToPass = function (moduleName) {
        return this.moduleName !== undefined ? this.moduleName : moduleName;
    };
    return Base;
}());
exports.Base = Base;
