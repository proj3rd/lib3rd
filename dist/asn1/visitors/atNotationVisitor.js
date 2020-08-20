"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const atNotation_1 = require("../classes/atNotation");
const componentIdListVisitor_1 = require("./componentIdListVisitor");
const levelVIsitor_1 = require("./levelVIsitor");
/**
 * # Grammar
 * ```
 * atNotation: (A_ROND | (A_ROND_DOT level)) componentIdList
 * ```
 */
class AtNotationVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const levelCtx = ctx.level();
        const level = levelCtx === undefined ? 0 : levelCtx.accept(new levelVIsitor_1.LevelVisitor());
        const componentIdListCtx = ctx.componentIdList();
        const componentIdList = componentIdListCtx.accept(new componentIdListVisitor_1.ComponentIdListVisitor());
        return new atNotation_1.AtNotation(level, componentIdList);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.AtNotationVisitor = AtNotationVisitor;
//# sourceMappingURL=atNotationVisitor.js.map