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
var value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```
 * enumerationItem : IDENTIFIER | namedNumber | value
 * ```
 */
var EnumerationItemVisitor = /** @class */ (function (_super) {
    __extends(EnumerationItemVisitor, _super);
    function EnumerationItemVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnumerationItemVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    EnumerationItemVisitor.prototype.visitChildren = function (enumerationItemCtx) {
        var childCtx = enumerationItemCtx.children[0];
        var enumerationItem;
        switch (utils_1.getContextName(childCtx)) {
            case null: {
                enumerationItem = childCtx.text;
                break;
            }
            case 'namedNumber': {
                logging_1.log.warn(utils_1.getLogWithAsn1(enumerationItemCtx, 'NamedNumber not supported:'));
                break;
            }
            case 'value': {
                enumerationItem = childCtx.accept(new value_1.ValueVisitor());
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(enumerationItemCtx, 'Not supported ASN1:'));
            }
        }
        return enumerationItem;
    };
    return EnumerationItemVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.EnumerationItemVisitor = EnumerationItemVisitor;
