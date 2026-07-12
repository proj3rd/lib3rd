"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoiceTypeVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const choiceType_1 = require("../classes/choiceType");
const alternativeTypeListsVisitor_1 = require("./alternativeTypeListsVisitor");
/**
 * # Grammar
 * ```
 * choiceType: CHOICE_LITERAL L_BRACE alternativeTypeLists R_BRACE
 * ```
 */
class ChoiceTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const alternativeTypeListsCtx = ctx.alternativeTypeLists();
        const alternativeTypeLists = alternativeTypeListsCtx.accept(new alternativeTypeListsVisitor_1.AlternativeTypeListsVisitor());
        return new choiceType_1.ChoiceType(alternativeTypeLists);
    }
    defaultResult() {
        return new choiceType_1.ChoiceType([]);
    }
}
exports.ChoiceTypeVisitor = ChoiceTypeVisitor;
//# sourceMappingURL=choiceTypeVisitor.js.map