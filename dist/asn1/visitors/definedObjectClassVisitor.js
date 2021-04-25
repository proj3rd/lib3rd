"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinedObjectClassVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const objectClassReference_1 = require("../classes/objectClassReference");
/**
 * # Grammar
 * ```
 * definedObjectClass :
 *   (IDENTIFIER DOT)? IDENTIFIER
 *   | TYPE_IDENTIFIER_LITERAL
 *   |  ABSTRACT_SYNTAX_LITERAL
 * ```
 */
class DefinedObjectClassVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        if (ctx.text === 'TYPE-IDENTIFIER') {
            return unimpl_1.unimpl();
        }
        if (ctx.text === 'ABSTRACT-SYNTAX') {
            return unimpl_1.unimpl();
        }
        if (ctx.childCount > 1) {
            return unimpl_1.unimpl();
        }
        const objectClassReference = ctx.getChild(0).text;
        return new objectClassReference_1.ObjectClassReference(objectClassReference);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.DefinedObjectClassVisitor = DefinedObjectClassVisitor;
//# sourceMappingURL=definedObjectClassVisitor.js.map