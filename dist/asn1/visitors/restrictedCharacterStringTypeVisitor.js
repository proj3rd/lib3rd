"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictedCharacterStringTypeVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
/**
 * # Grammar
 * ```
 * restrictedCharacterStringType:
 *     BMP_STRING_LITERAL
 *   | GRAPHIC_STRING_LITERAL
 *   | IA5_STRING_LITERAL
 *   | ISO646_STRING_LITERAL
 *   | NUMERIC_STRING_LITERAL
 *   | PRINTABLE_STRING_LITERAL
 *   | TELETEXT_STRING_LITERAL
 *   | T61_STRING_LITERAL
 *   | UNIVERSAL_STRING_LITERAL
 *   | UTF8_STRING_LITERAL
 *   | VIDEOTEX_STRING_LITERAL
 *   | VISIBLE_STRING_LITERAL
 * ```
 */
class RestrictedCharacterStringTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        return ctx.text;
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.RestrictedCharacterStringTypeVisitor = RestrictedCharacterStringTypeVisitor;
//# sourceMappingURL=restrictedCharacterStringTypeVisitor.js.map