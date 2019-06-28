"use strict";
exports.__esModule = true;
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
var TagVisitor = /** @class */ (function () {
    function TagVisitor() {
    }
    TagVisitor.prototype.visitChildren = function (tagCtx) {
        var childCtx = tagCtx.children[0];
        // FIXME: ASN_3gpp.g4 not working properly
        // Temporary workaround
        var tag = childCtx.getText();
        if (tag.match(reTag)) {
            return tag;
        }
        return null;
    };
    return TagVisitor;
}());
exports.TagVisitor = TagVisitor;
