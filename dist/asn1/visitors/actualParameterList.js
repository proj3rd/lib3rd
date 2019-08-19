"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var actualParameter_1 = require("./actualParameter");
/**
 * ANTLR4 grammar
 * ```
 * actualParameterList : L_BRACE actualParameter (COMMA actualParameter)* R_BRACE
 * ```
 */
var ActualParameterListVisitor = /** @class */ (function () {
    function ActualParameterListVisitor() {
    }
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
}());
exports.ActualParameterListVisitor = ActualParameterListVisitor;
