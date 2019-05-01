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
var logging_1 = require("../../utils/logging");
var base_1 = require("./base");
var Choice = /** @class */ (function (_super) {
    __extends(Choice, _super);
    function Choice(choices) {
        var _this = _super.call(this) || this;
        _this.choices = choices;
        return _this;
    }
    Choice.prototype.setConstraint = function (constraint) {
        logging_1.log.info("Choice constraint " + JSON.stringify(constraint));
        return this;
    };
    Choice.prototype.expand = function () {
        // TODO
        return this;
    };
    Choice.prototype.toString = function (depth) {
        if (depth === void 0) { depth = 0; }
        var contentStrings = this.choices.map(function (choice) {
            return choice.toString(depth + 1);
        });
        return "CHOICE " + ['{'].concat(contentStrings, ['}']).join(',\n');
    };
    return Choice;
}(base_1.Base));
exports.Choice = Choice;
