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
var Sequence = /** @class */ (function (_super) {
    __extends(Sequence, _super);
    function Sequence(items /* TODO */) {
        var _this = _super.call(this) || this;
        _this.items = items;
        return _this;
    }
    Sequence.prototype.setConstraint = function (constraint) {
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("Sequence could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    Sequence.prototype.expand = function () {
        // TODO
        return this;
    };
    Sequence.prototype.toString = function (depth) {
        if (depth === void 0) { depth = 0; }
        // TODO
        return ['SEQUENCE {'].concat(this.items.map(function (item) { return item.toString(depth + 1); }), ['}']).join('\n');
    };
    return Sequence;
}(base_1.Base));
exports.Sequence = Sequence;
