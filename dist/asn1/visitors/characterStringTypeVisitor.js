"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterStringTypeVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const characterStringType_1 = require("../classes/characterStringType");
const restrictedCharacterStringTypeVisitor_1 = require("./restrictedCharacterStringTypeVisitor");
/**
 * # Grammar
 * ```
 * characterStringType:
 *   restrictedCharacterStringType
 * ```
 */
class CharacterStringTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const restrictedCharacterStringTypeCtx = ctx.restrictedCharacterStringType();
        const restrictedCharacterStringType = restrictedCharacterStringTypeCtx.accept(new restrictedCharacterStringTypeVisitor_1.RestrictedCharacterStringTypeVisitor());
        return new characterStringType_1.CharacterStringType(restrictedCharacterStringType);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.CharacterStringTypeVisitor = CharacterStringTypeVisitor;
//# sourceMappingURL=characterStringTypeVisitor.js.map