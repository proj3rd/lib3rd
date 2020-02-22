"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const definedObjectClass_1 = require("../classes/definedObjectClass");
/**
 * ANTLR4 grammar
 * ```
 *  definedObjectClass :
 *    (IDENTIFIER DOT)? IDENTIFIER
 *    | TYPE_IDENTIFIER_LITERAL
 *    |  ABSTRACT_SYNTAX_LITERAL
 * ```
 */
class DefinedObjectClassVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(definedObjectClassCtx) {
        const childCtxes = definedObjectClassCtx.children;
        const moduleReference = childCtxes.length === 1 ? undefined : childCtxes[0].text;
        const objectClassReference = childCtxes.length === 1 ? childCtxes[0].text : childCtxes[1].text;
        return new definedObjectClass_1.DefinedObjectClass(moduleReference, objectClassReference);
    }
}
exports.DefinedObjectClassVisitor = DefinedObjectClassVisitor;
