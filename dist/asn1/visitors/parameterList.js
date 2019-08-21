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
var utils_1 = require("../utils");
var parameter_1 = require("./parameter");
/**
 * ANTLR4 grammar
 * ```
 * parameterList : L_BRACE parameter (COMMA parameter)* R_BRACE
 * ```
 */
var ParameterListVisitor = /** @class */ (function (_super) {
    __extends(ParameterListVisitor, _super);
    function ParameterListVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParameterListVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ParameterListVisitor.prototype.visitChildren = function (parameterListCtx) {
        var parameterList = [];
        var childCtxes = parameterListCtx.children;
        childCtxes.forEach(function (childCtx) {
            if (utils_1.getContextName(childCtx) !== 'parameter') {
                return;
            }
            parameterList.push(childCtx.accept(new parameter_1.ParameterVisitor()));
        });
        return parameterList;
    };
    return ParameterListVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ParameterListVisitor = ParameterListVisitor;
