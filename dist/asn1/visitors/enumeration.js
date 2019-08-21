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
var enumerationItem_1 = require("./enumerationItem");
/**
 * ANTLR4 grammar
 * ```
 * enumeration : enumerationItem ( COMMA enumerationItem)*
 * ```
 */
var EnumerationVisitor = /** @class */ (function (_super) {
    __extends(EnumerationVisitor, _super);
    function EnumerationVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnumerationVisitor.prototype.defaultResult = function () {
        return [];
    };
    EnumerationVisitor.prototype.visitChildren = function (enumerationCtx) {
        var childCtxes = enumerationCtx.children;
        var enumeration = [];
        childCtxes.forEach(function (childCtx, index) {
            if (index % 2) {
                return;
            }
            enumeration.push(childCtx.accept(new enumerationItem_1.EnumerationItemVisitor()));
        });
        return enumeration;
    };
    return EnumerationVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.EnumerationVisitor = EnumerationVisitor;
