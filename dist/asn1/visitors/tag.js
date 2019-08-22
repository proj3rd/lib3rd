"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const reTag = /^-- *?(Need|Cond) *?.+?$/;
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
class TagVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(tagCtx) {
        const childCtx = tagCtx.children[0];
        // FIXME: ASN_3gpp.g4 not working properly
        // Temporary workaround
        const tag = childCtx.text;
        return tag.match(reTag) ? tag : null;
    }
}
exports.TagVisitor = TagVisitor;
