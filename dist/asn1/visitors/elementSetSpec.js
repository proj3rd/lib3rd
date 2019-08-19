"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var unions_1 = require("./unions");
/**
 * ANTLR4 grammar
 * ```
 * elementSetSpec : unions | ALL_LITERAL exclusions
 * ```
 */
var ElementSetSpecVisitor = /** @class */ (function () {
    function ElementSetSpecVisitor() {
    }
    ElementSetSpecVisitor.prototype.visitChildren = function (elementSetSpecCtx) {
        var childCtxes = elementSetSpecCtx.children;
        var elementSetSpec = null;
        switch (childCtxes.length) {
            case 1: {
                elementSetSpec = childCtxes[0].accept(new unions_1.UnionsVisitor());
                break;
            }
            case 2: {
                logging_1.log.warn(utils_1.getLogWithAsn1(elementSetSpecCtx, 'ALL EXCEPT not supported:'));
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(elementSetSpecCtx, 'Not suported ASN1:'));
                break;
            }
        }
        return elementSetSpec;
    };
    return ElementSetSpecVisitor;
}());
exports.ElementSetSpecVisitor = ElementSetSpecVisitor;
