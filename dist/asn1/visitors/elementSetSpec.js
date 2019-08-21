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
var unions_1 = require("./unions");
/**
 * ANTLR4 grammar
 * ```
 * elementSetSpec : unions | ALL_LITERAL exclusions
 * ```
 */
var ElementSetSpecVisitor = /** @class */ (function (_super) {
    __extends(ElementSetSpecVisitor, _super);
    function ElementSetSpecVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementSetSpecVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ElementSetSpecVisitor.prototype.visitChildren = function (elementSetSpecCtx) {
        var childCtxes = elementSetSpecCtx.children;
        var elementSetSpec;
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
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ElementSetSpecVisitor = ElementSetSpecVisitor;
