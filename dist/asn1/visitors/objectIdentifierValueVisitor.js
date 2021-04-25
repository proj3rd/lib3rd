"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectIdentifierValueVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const objectIdentifierValue_1 = require("../classes/objectIdentifierValue");
const objIdComponentsListVisitor_1 = require("./objIdComponentsListVisitor");
/**
 * # Grammar
 * ```
 * objectIdentifierValue: L_BRACE objIdComponentsList R_BRACE
 * ```
 */
class ObjectIdentifierValueVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const objIdComponentsListCtx = ctx.objIdComponentsList();
        const objIdComponentsList = objIdComponentsListCtx.accept(new objIdComponentsListVisitor_1.ObjIdComponentsListVisitor());
        return new objectIdentifierValue_1.ObjectIdentifierValue(objIdComponentsList);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ObjectIdentifierValueVisitor = ObjectIdentifierValueVisitor;
//# sourceMappingURL=objectIdentifierValueVisitor.js.map