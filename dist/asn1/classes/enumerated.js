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
var Enumerated = /** @class */ (function (_super) {
    __extends(Enumerated, _super);
    function Enumerated(items) {
        var _this = _super.call(this) || this;
        _this.items = items;
        return _this;
    }
    Enumerated.prototype.setConstraint = function (constraint) {
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("Enumerated could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    Enumerated.prototype.expand = function () {
        return this;
    };
    Enumerated.prototype.toString = function (depth) {
        if (depth === void 0) { depth = 0; }
        return "ENUMERATED {" + this.items.join(', ') + "}";
    };
    return Enumerated;
}(base_1.Base));
exports.Enumerated = Enumerated;
