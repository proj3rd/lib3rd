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
var reTag = /^-- *?(Need|Cond) *?.+?$/;
/**
 * ANTLR4 grammar
 * ```
 * tag
 *   : TAG
 *   ;
 *
 * TAG
 *   | '--' ~('\n'|'\r')*
 *   ;
 * ```
 */
var TagVisitor = /** @class */ (function (_super) {
    __extends(TagVisitor, _super);
    function TagVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TagVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    TagVisitor.prototype.visitChildren = function (tagCtx) {
        var childCtx = tagCtx.children[0];
        // FIXME: ASN_3gpp.g4 not working properly
        // Temporary workaround
        var tag = childCtx.text;
        return tag.match(reTag) ? tag : null;
    };
    return TagVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.TagVisitor = TagVisitor;
