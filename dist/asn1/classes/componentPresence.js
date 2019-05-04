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
var ComponentPresence = /** @class */ (function (_super) {
    __extends(ComponentPresence, _super);
    function ComponentPresence(identifier, absentPresent) {
        var _this = _super.call(this) || this;
        _this.identifier = identifier;
        _this.absentPresent = absentPresent;
        return _this;
    }
    ComponentPresence.prototype.setConstraint = function (constraint) {
        return this;
    };
    ComponentPresence.prototype.expand = function () {
        return this;
    };
    ComponentPresence.prototype.toString = function (depth) {
        if (depth === void 0) { depth = 0; }
        // TODO
        return null;
    };
    return ComponentPresence;
}(base_1.Base));
exports.ComponentPresence = ComponentPresence;
