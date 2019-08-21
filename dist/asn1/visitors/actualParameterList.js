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
var actualParameter_1 = require("./actualParameter");
/**
 * ANTLR4 grammar
 * ```
 * actualParameterList : L_BRACE actualParameter (COMMA actualParameter)* R_BRACE
 * ```
 */
var ActualParameterListVisitor = /** @class */ (function (_super) {
    __extends(ActualParameterListVisitor, _super);
    function ActualParameterListVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActualParameterListVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ActualParameterListVisitor.prototype.visitChildren = function (actualParameterListCtx) {
        var actualParameterList = [];
        var childCtxes = actualParameterListCtx.children;
        childCtxes.forEach(function (childCtx) {
            switch (utils_1.getContextName(childCtx)) {
                case 'actualParameter': {
                    actualParameterList.push(childCtx.accept(new actualParameter_1.ActualParameterVisitor()));
                    break;
                }
                case null: {
                    break;
                }
                default: {
                    logging_1.log.warn(utils_1.getLogWithAsn1(actualParameterListCtx, 'Not supported ASN.1'));
                    break;
                }
            }
        });
        return actualParameterList;
    };
    return ActualParameterListVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ActualParameterListVisitor = ActualParameterListVisitor;
