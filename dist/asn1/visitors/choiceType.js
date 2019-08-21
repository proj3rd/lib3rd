"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
var choice_1 = require("../classes/choice");
var alternativeTypeLists_1 = require("./alternativeTypeLists");
/**
 * ANTLR4 grammar
 * ```
 * choiceType    : CHOICE_LITERAL L_BRACE alternativeTypeLists R_BRACE
 * ```
 */
var ChoiceTypeVisitor = /** @class */ (function (_super) {
    __extends(ChoiceTypeVisitor, _super);
    function ChoiceTypeVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChoiceTypeVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ChoiceTypeVisitor.prototype.visitChildren = function (choiceTypeCtx) {
        var alternativeTypeListsCtx = choiceTypeCtx.children[2];
        var alternativeTypeLists = alternativeTypeListsCtx.accept(new alternativeTypeLists_1.AlternativeTypeListsVisitor());
        return new choice_1.Choice(alternativeTypeLists);
    };
    return ChoiceTypeVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ChoiceTypeVisitor = ChoiceTypeVisitor;
