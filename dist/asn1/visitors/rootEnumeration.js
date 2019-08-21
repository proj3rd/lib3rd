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
var enumeration_1 = require("./enumeration");
/**
 * ANTLR4 grammar
 * ```
 * rootEnumeration : enumeration
 * ```
 */
var RootEnumerationVisitor = /** @class */ (function (_super) {
    __extends(RootEnumerationVisitor, _super);
    function RootEnumerationVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootEnumerationVisitor.prototype.defaultResult = function () {
        return [];
    };
    RootEnumerationVisitor.prototype.visitChildren = function (rootEnumerationCtx) {
        var enumerationCtx = rootEnumerationCtx.children[0];
        return enumerationCtx.accept(new enumeration_1.EnumerationVisitor());
    };
    return RootEnumerationVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.RootEnumerationVisitor = RootEnumerationVisitor;
