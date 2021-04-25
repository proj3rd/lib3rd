"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentsConstraintVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const contentsConstraint_1 = require("../classes/contentsConstraint");
const innerTypeConstraints_1 = require("../classes/innerTypeConstraints");
const asnTypeVisitor_1 = require("./asnTypeVisitor");
const componentPresenceListsVisitor_1 = require("./componentPresenceListsVisitor");
const valueVisitor_1 = require("./valueVisitor");
/**
 * # Grammar
 * ```
 * contentsConstraint :
 *     CONTAINING_LITERAL asnType
 *   | ENCODED_LITERAL BY_LITERAL value
 *   | CONTAINING_LITERAL asnType ENCODED_LITERAL BY_LITERAL value
 *   | WITH_LITERAL COMPONENTS_LITERAL L_BRACE componentPresenceLists R_BRACE
 * ```
 */
class ContentsConstraintVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const asnTypeCtx = ctx.asnType();
        let asnType;
        if (asnTypeCtx !== undefined) {
            asnType = asnTypeCtx.accept(new asnTypeVisitor_1.AsnTypeVisitor());
        }
        const valueCtx = ctx.value();
        let value;
        if (valueCtx !== undefined) {
            value = valueCtx.accept(new valueVisitor_1.ValueVisitor());
        }
        const componentPresenceListsCtx = ctx.componentPresenceLists();
        if (componentPresenceListsCtx !== undefined) {
            const componentPresenceLists = componentPresenceListsCtx.accept(new componentPresenceListsVisitor_1.ComponentPresenceListsVisitor());
            return new innerTypeConstraints_1.InnerTypeConstraints(componentPresenceLists);
        }
        if (asnType === undefined && value === undefined) {
            throw Error();
        }
        return new contentsConstraint_1.ContentsConstraint(asnType, value);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ContentsConstraintVisitor = ContentsConstraintVisitor;
//# sourceMappingURL=contentsConstraintVisitor.js.map