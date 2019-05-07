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
var Null = /** @class */ (function (_super) {
    __extends(Null, _super);
    function Null() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Null.prototype.setConstraint = function (constraint) {
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("Null could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    Null.prototype.expand = function () {
        return this;
    };
    Null.prototype.depthMax = function () {
        return 1;
    };
    Null.prototype.toString = function () {
        return 'NULL';
    };
    return Null;
}(base_1.Base));
exports.Null = Null;
