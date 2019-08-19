"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var choice_1 = require("../classes/choice");
var alternativeTypeLists_1 = require("./alternativeTypeLists");
/**
 * ANTLR4 grammar
 * ```
 * choiceType    : CHOICE_LITERAL L_BRACE alternativeTypeLists R_BRACE
 * ```
 */
var ChoiceTypeVisitor = /** @class */ (function () {
    function ChoiceTypeVisitor() {
    }
    ChoiceTypeVisitor.prototype.visitChildren = function (choiceTypeCtx) {
        var alternativeTypeListsCtx = choiceTypeCtx.children[2];
        var alternativeTypeLists = alternativeTypeListsCtx.accept(new alternativeTypeLists_1.AlternativeTypeListsVisitor());
        return new choice_1.Choice(alternativeTypeLists);
    };
    return ChoiceTypeVisitor;
}());
exports.ChoiceTypeVisitor = ChoiceTypeVisitor;
