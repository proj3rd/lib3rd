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
var octetString_1 = require("../classes/octetString");
/**
 * ANTLR4 grammar
 * ```
 * octetStringType  :  OCTET_LITERAL STRING_LITERAL
 * ```
 */
var OctetStringTypeVisitor = /** @class */ (function (_super) {
    __extends(OctetStringTypeVisitor, _super);
    function OctetStringTypeVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OctetStringTypeVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    OctetStringTypeVisitor.prototype.visitChildren = function (octetStringTypeCtx) {
        return new octetString_1.OctetString();
    };
    return OctetStringTypeVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.OctetStringTypeVisitor = OctetStringTypeVisitor;
