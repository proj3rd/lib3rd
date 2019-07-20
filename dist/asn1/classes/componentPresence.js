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
var ComponentPresence = /** @class */ (function (_super) {
    __extends(ComponentPresence, _super);
    function ComponentPresence(identifier, absentPresent) {
        var _this = _super.call(this) || this;
        _this.identifier = identifier;
        _this.absentPresent = absentPresent;
        return _this;
    }
    ComponentPresence.prototype.setConstraint = function (constraint) {
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("ComponentPresence could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    ComponentPresence.prototype.expand = function (asn1Pool /* TODO */, moduleName) {
        throw Error(this.constructor.name + ".expand does not need to be implemented");
    };
    ComponentPresence.prototype.depthMax = function () {
        throw Error('Depth of this class is not valid');
    };
    ComponentPresence.prototype.replaceParameters = function (parameterMapping) {
        // Do nothing
    };
    ComponentPresence.prototype.toString = function () {
        return this.identifier + " " + this.absentPresent;
    };
    ComponentPresence.prototype.fillWorksheet = function (ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        if (depth === void 0) { depth = 0; }
        throw Error(this.constructor.name + ".fillWorksheet does not need to be implemented");
    };
    return ComponentPresence;
}(base_1.Base));
exports.ComponentPresence = ComponentPresence;
