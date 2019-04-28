"use strict";
exports.__esModule = true;
var BitString = /** @class */ (function () {
    function BitString() {
    }
    BitString.prototype.setConstraint = function (constraint) {
        if ('value' in constraint) {
            this.size = constraint.value;
            this.sizeMin = null;
            this.sizeMax = null;
        }
        if ('min' in constraint && 'max' in constraint) {
            this.size = null;
            this.sizeMin = constraint.min;
            this.sizeMax = constraint.max;
        }
        return this;
    };
    BitString.prototype.expand = function () {
        return this;
    };
    BitString.prototype.toString = function () {
        var valueConstraint = this.size ? "(SIZE (" + this.size + "))" :
            this.sizeMin !== null && this.sizeMax !== null ? "(SIZE (" + this.sizeMin + ".." + this.sizeMax + "))" : '';
        return "BIT STRING " + valueConstraint;
    };
    return BitString;
}());
exports.BitString = BitString;
