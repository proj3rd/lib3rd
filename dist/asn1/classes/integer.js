"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var Integer = /** @class */ (function () {
    function Integer() {
    }
    Integer.prototype.setConstraint = function (constraint) {
        logging_1.log.info("Integer constraint " + JSON.stringify(constraint));
        if ('value' in constraint) {
            this.value = constraint.value;
            this.min = null;
            this.max = null;
        }
        if ('min' in constraint && 'max' in constraint) {
            this.value = null;
            this.min = constraint.min;
            this.max = constraint.max;
        }
        return this;
    };
    Integer.prototype.expand = function () {
        return this;
    };
    Integer.prototype.toString = function () {
        var valueConstraint = this.value ? "(" + this.value + ")" :
            this.min !== null && this.max !== null ? "(" + this.min + ".." + this.max + ")" : '';
        return "INTENGER " + valueConstraint;
    };
    return Integer;
}());
exports.Integer = Integer;
