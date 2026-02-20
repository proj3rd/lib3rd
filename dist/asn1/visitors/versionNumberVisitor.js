"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionNumberVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
/**
 * # Grammar
 * ```
 * versionNumber: (NUMBER COLON)?
 * ```
 */
class VersionNumberVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        if (ctx.childCount === 0) {
            return undefined;
        }
        const firstCtx = ctx.getChild(0);
        return +firstCtx.text;
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.VersionNumberVisitor = VersionNumberVisitor;
//# sourceMappingURL=versionNumberVisitor.js.map