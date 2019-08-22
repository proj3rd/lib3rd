"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const choice_1 = require("../classes/choice");
const alternativeTypeLists_1 = require("./alternativeTypeLists");
/**
 * ANTLR4 grammar
 * ```
 * choiceType    : CHOICE_LITERAL L_BRACE alternativeTypeLists R_BRACE
 * ```
 */
class ChoiceTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(choiceTypeCtx) {
        const alternativeTypeListsCtx = choiceTypeCtx.children[2];
        const alternativeTypeLists = alternativeTypeListsCtx.accept(new alternativeTypeLists_1.AlternativeTypeListsVisitor());
        return new choice_1.Choice(alternativeTypeLists);
    }
}
exports.ChoiceTypeVisitor = ChoiceTypeVisitor;
