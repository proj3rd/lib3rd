"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const elementSetSpecs_1 = require("./elementSetSpecs");
/**
 * ANTLR4 grammar
 * ```
 * subtypeConstraint	:
 * elementSetSpecs
 * ```
 */
class SubtypeConstraintVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(subtypeConstraintCtx) {
        const elementSetSpecs = subtypeConstraintCtx.children[0];
        return elementSetSpecs.accept(new elementSetSpecs_1.ElementSetSpecsVisitor());
    }
}
exports.SubtypeConstraintVisitor = SubtypeConstraintVisitor;
