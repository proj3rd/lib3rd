"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
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
        return { moduleReference: undefined, objectClassReference: undefined };
    }
    visitChildren(definedObjectClassCtx) {
        const definedObjectClass = {
            moduleReference: undefined,
            objectClassReference: undefined,
        };
        if (definedObjectClassCtx.childCount === 1) {
            definedObjectClass.objectClassReference = definedObjectClassCtx.children[0].text;
        }
        else {
            definedObjectClass.moduleReference = definedObjectClassCtx.children[0].text;
            definedObjectClass.objectClassReference = definedObjectClassCtx.children[1].text;
        }
        return definedObjectClass;
    }
}
exports.DefinedObjectClassVisitor = DefinedObjectClassVisitor;
