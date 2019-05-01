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
var base_1 = require("./base");
var DefinedType = /** @class */ (function (_super) {
    __extends(DefinedType, _super);
    function DefinedType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinedType.prototype.setConstraint = function (constraint) {
        // TODO
        return this;
    };
    DefinedType.prototype.expand = function () {
        // TODO
        return this;
    };
    DefinedType.prototype.toString = function (depth) {
        if (depth === void 0) { depth = 0; }
        // TODO
        return null;
    };
    return DefinedType;
}(base_1.Base));
exports.DefinedType = DefinedType;
