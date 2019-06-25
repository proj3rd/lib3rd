"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var reTag = /^-- *?(Need|Cond) *?.+?$/;
/**
 * ANTLR4 grammar
 * ```
 * tag
 *   : needTag
 *   | condTag
 *   | INVALID_TAG
 *   ;
 * needTag
 *  : NEED_LITERAL IDENTIFIER
 *  ;
 * condTag
 *   : COND_LITERAL IDENTIFIER
 *   ;
 * ```
 */
var TagVisitor = /** @class */ (function () {
    function TagVisitor() {
    }
    TagVisitor.prototype.visitChildren = function (tagCtx) {
        var childCtx = tagCtx.children[0];
        switch (utils_1.getContextName(childCtx)) {
            case 'needTag': {
                // needTag and condTag have the same logic
            }
            case 'condTag': {
                return childCtx.getText();
            }
            default: {
                // FIXME: ASN_3gpp.g4 not working properly
                // Temporary workaround
                var tag = childCtx.getText();
                if (tag.match(reTag)) {
                    return tag;
                }
                return null;
            }
        }
    };
    return TagVisitor;
}());
exports.TagVisitor = TagVisitor;
