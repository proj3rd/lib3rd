"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const objectIdentifierValue_1 = require("../classes/objectIdentifierValue");
const objIdComponentsList_1 = require("./objIdComponentsList");
/**
 * ANTLR4 grammar
 * ```
 * objectIdentifierValue : L_BRACE objIdComponentsList R_BRACE
 * ```
 */
class ObjectIdentifierValueVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return new objectIdentifierValue_1.ObjectIdentifierValue([]);
    }
    visitChildren(objectIdentifierValueCtx) {
        const { children } = objectIdentifierValueCtx;
        return new objectIdentifierValue_1.ObjectIdentifierValue(children[1].accept(new objIdComponentsList_1.ObjIdComponentsListVisitor()));
    }
}
exports.ObjectIdentifierValueVisitor = ObjectIdentifierValueVisitor;
