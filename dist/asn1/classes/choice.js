"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var Choice = /** @class */ (function () {
    function Choice(choices) {
        this.choices = choices;
    }
    Choice.prototype.setConstraint = function (constraint) {
        logging_1.log.info("Choice constraint " + JSON.stringify(constraint));
        return this;
    };
    Choice.prototype.expand = function () {
        // TODO
        return this;
    };
    Choice.prototype.toString = function () {
        // TODO
        return null;
    };
    return Choice;
}());
exports.Choice = Choice;
