"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const objectIdentifier_1 = require("../classes/objectIdentifier");
/**
 * ANTLR4 grammar
 * ```
 * objectidentifiertype  :  OBJECT_LITERAL IDENTIFIER_LITERAL
 * ```
 */
class ObjectidentifiertypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return new objectIdentifier_1.ObjectIdentifier();
    }
    visitChildren(objectidentifiertypeCtx) {
        return new objectIdentifier_1.ObjectIdentifier();
    }
}
exports.ObjectidentifiertypeVisitor = ObjectidentifiertypeVisitor;
