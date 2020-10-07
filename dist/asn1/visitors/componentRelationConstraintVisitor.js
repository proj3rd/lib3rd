"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const componentRelationConstraint_1 = require("../classes/componentRelationConstraint");
const externalObjectSetReference_1 = require("../classes/externalObjectSetReference");
const objectSetReference_1 = require("../classes/objectSetReference");
const atNotationVisitor_1 = require("./atNotationVisitor");
/**
 * # Grammar
 * ```
 * componentRelationConstraint: L_BRACE (IDENTIFIER (DOT IDENTIFIER)?) R_BRACE
 * (L_BRACE atNotation (COMMA atNotation)* R_BRACE)?
 * ```
 * If atNotation is not present, it is SimpleTableConstraint (= ObjectSet)
 *   defined by X.682 clause 10, but it can be further concluded to
 *   ComponentRelationConstraint as defeind by X.680 clause 50.1 and X.681 clause 12.10.
 * Otherwise, it is ComponentRelationConstraint
 */
class ComponentRelationConstraintVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        let definedObjectSet;
        const { childCount } = ctx;
        let firstCurlyRightIndex = -1;
        for (let i = 0; i < childCount; i += 1) {
            if (ctx.getChild(i).text === '}') {
                firstCurlyRightIndex = i;
                break;
            }
        }
        if (firstCurlyRightIndex === 2) {
            const objectSetReference = ctx.getChild(1).text;
            definedObjectSet = new objectSetReference_1.ObjectSetReference(objectSetReference);
        }
        else if (firstCurlyRightIndex === 4) {
            const moduleReference = ctx.getChild(1).text;
            const objectSetReference = ctx.getChild(3).text;
            definedObjectSet = new externalObjectSetReference_1.ExternalObjectSetReference(moduleReference, objectSetReference);
        }
        else {
            throw Error();
        }
        const atNotationCtxes = ctx.atNotation();
        const atNotations = atNotationCtxes
            .map((atNotationCtx) => atNotationCtx.accept(new atNotationVisitor_1.AtNotationVisitor()));
        if (atNotations.length === 0) {
            return new componentRelationConstraint_1.ComponentRelationConstraint(definedObjectSet);
        }
        return new componentRelationConstraint_1.ComponentRelationConstraint(definedObjectSet, atNotations);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ComponentRelationConstraintVisitor = ComponentRelationConstraintVisitor;
//# sourceMappingURL=componentRelationConstraintVisitor.js.map