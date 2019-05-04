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
var withComponents_1 = require("./withComponents");
var DefinedType = /** @class */ (function (_super) {
    __extends(DefinedType, _super);
    function DefinedType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinedType.prototype.setConstraint = function (constraint) {
        if ('withComponents' in constraint) {
            this.withComponents = new withComponents_1.WithComponents(constraint.withComponents);
            delete constraint.withComponents;
        }
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("DefinedType could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    DefinedType.prototype.expand = function () {
        // TODO
        return this;
    };
    DefinedType.prototype.toString = function (depth) {
        if (depth === void 0) { depth = 0; }
        // TODO
        return "" + (this.moduleReference ? this.moduleReference + '.' : '') + this.typeReference;
    };
    return DefinedType;
}(base_1.Base));
exports.DefinedType = DefinedType;
