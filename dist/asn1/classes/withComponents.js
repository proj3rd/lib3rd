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
var WithComponents = /** @class */ (function (_super) {
    __extends(WithComponents, _super);
    function WithComponents(components) {
        var _this = _super.call(this) || this;
        _this.components = components;
        return _this;
    }
    WithComponents.prototype.setConstraint = function (constraint) {
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("WithComponents could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    WithComponents.prototype.expand = function () {
        throw Error(this.constructor.name + ".expand does not need to be implemented");
    };
    WithComponents.prototype.depthMax = function () {
        throw Error('Depth of this class is not valid');
    };
    WithComponents.prototype.toString = function () {
        return "{" + this.components.map(function (component) { return component.toString(); }).join(', ') + "}";
    };
    WithComponents.prototype.fillWorksheet = function (ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        if (depth === void 0) { depth = 0; }
        throw Error(this.constructor.name + ".fillWorksheet does not need to be implemented");
    };
    return WithComponents;
}(base_1.Base));
exports.WithComponents = WithComponents;
