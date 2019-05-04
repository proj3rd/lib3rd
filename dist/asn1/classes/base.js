"use strict";
exports.__esModule = true;
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.indent = function (text) {
        return text.replace(/^/gm, '  ');
    };
    return Base;
}());
exports.Base = Base;
