"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var Enumerated = /** @class */ (function () {
    function Enumerated(items) {
        this.items = items;
    }
    Enumerated.prototype.setConstraint = function (constraint) {
        logging_1.log.info("Enumerated constraint " + JSON.stringify(constraint));
        // TODO
        return this;
    };
    Enumerated.prototype.expand = function () {
        return this;
    };
    Enumerated.prototype.toString = function () {
        return "ENUMERATED {" + this.items.join(', ') + "}";
    };
    return Enumerated;
}());
exports.Enumerated = Enumerated;
