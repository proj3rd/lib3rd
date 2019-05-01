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
var ExtensionMarker = /** @class */ (function (_super) {
    __extends(ExtensionMarker, _super);
    function ExtensionMarker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionMarker.prototype.setConstraint = function (constraint) {
        return this;
    };
    ExtensionMarker.prototype.expand = function () {
        return this;
    };
    ExtensionMarker.prototype.toString = function (depth) {
        if (depth === void 0) { depth = 0; }
        return '...';
    };
    return ExtensionMarker;
}(base_1.Base));
exports.ExtensionMarker = ExtensionMarker;
