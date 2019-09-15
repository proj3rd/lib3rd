"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const tableConstraint_1 = require("../classes/tableConstraint");
const atNotation_1 = require("./atNotation");
/**
 * ANTLR4 grammar
 * ```
 * componentRelationConstraint : L_BRACE (IDENTIFIER (DOT IDENTIFIER)?) R_BRACE
 *      (L_BRACE atNotation (COMMA atNotation)* R_BRACE)?
 * ```
 */
class ComponentRelationConstraintVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(componentRelationConstraintCtx) {
        let moduleReference;
        let objectSetReference;
        let offsetAtNotation;
        const { children } = componentRelationConstraintCtx;
        if (children[2].text === '.') {
            moduleReference = children[1].text;
            objectSetReference = children[3].text;
            offsetAtNotation = 5;
        }
        else {
            objectSetReference = children[1].text;
            offsetAtNotation = 3;
        }
        const atNotations = children.slice(offsetAtNotation)
            .filter((ctx) => ctx instanceof ASN_3gppParser_1.AtNotationContext)
            .map((atNotationCtx) => atNotationCtx.accept(new atNotation_1.AtNotationVisitor()));
        return new tableConstraint_1.TableConstraint(moduleReference, objectSetReference, atNotations);
    }
}
exports.ComponentRelationConstraintVisitor = ComponentRelationConstraintVisitor;
