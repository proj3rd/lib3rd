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
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
/**
 * ANTLR4 grammar
 * ```
 * parameter : (paramGovernor COLON)? IDENTIFIER
 * ```
 */
var ParameterVisitor = /** @class */ (function (_super) {
    __extends(ParameterVisitor, _super);
    function ParameterVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParameterVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ParameterVisitor.prototype.visitChildren = function (parameterCtx) {
        var childCtxes = parameterCtx.children;
        if (utils_1.getContextName(childCtxes[0]) !== null) {
            logging_1.log.warn(utils_1.getLogWithAsn1(parameterCtx, 'ParamGovernor not supported'));
            return childCtxes[2].text;
        }
        return childCtxes[0].text;
    };
    return ParameterVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ParameterVisitor = ParameterVisitor;
