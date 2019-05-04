"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var lodash_1 = require("lodash");
var logging_1 = require("../../utils/logging");
var base_1 = require("./base");
var Integer = /** @class */ (function (_super) {
    __extends(Integer, _super);
    function Integer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Integer.prototype.setConstraint = function (constraint) {
        if ('value' in constraint) {
            this.value = constraint.value;
            delete constraint.value;
            this.min = null;
            this.max = null;
        }
        if ('min' in constraint && 'max' in constraint) {
            this.value = null;
            this.min = constraint.min;
            delete constraint.min;
            this.max = constraint.max;
            delete constraint.max;
        }
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("Integer could not handle constraint " + JSON.stringify(constraint));
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
}(base_1.Base));
exports.Integer = Integer;
