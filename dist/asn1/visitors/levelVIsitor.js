"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
/**
 * # Grammar
 * ```
 * level: (DOT level)?
 * ```
 */
class LevelVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const levelCtx = ctx.level();
        if (levelCtx === undefined) {
            return 0;
        }
        return 1 + levelCtx.accept(new LevelVisitor());
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.LevelVisitor = LevelVisitor;
//# sourceMappingURL=levelVIsitor.js.map