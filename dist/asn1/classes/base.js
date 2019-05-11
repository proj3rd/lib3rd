"use strict";
exports.__esModule = true;
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.indent = function (text) {
        return text.replace(/^/gm, '  ');
    };
    Base.prototype.addToConstants = function (obj, constants) {
        if (typeof obj === 'string') {
            constants.push(obj);
        }
    };
    return Base;
}());
exports.Base = Base;
