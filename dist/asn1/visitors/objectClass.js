"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const objectClassDefn_1 = require("./objectClassDefn");
/**
 * ANTLR4 grammar
 * ```
 * objectClass : definedObjectClass | objectClassDefn
 * ```
 */
class ObjectClassVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(objectClassCtx) {
        const childCtx = objectClassCtx.children[0];
        if (childCtx instanceof ASN_3gppParser_1.DefinedObjectClassContext) {
            logging_1.log.warn('definedObjectClass not supported');
        }
        if (childCtx instanceof ASN_3gppParser_1.ObjectClassDefnContext) {
            return childCtx.accept(new objectClassDefn_1.ObjectClassDefnVisitor());
        }
    }
}
exports.ObjectClassVisitor = ObjectClassVisitor;
