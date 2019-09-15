"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const objectClassField_1 = require("../classes/objectClassField");
const definedObjectClass_1 = require("./definedObjectClass");
/**
 * ANTLR4 grammar
 * ```
 * objectClassFieldType : definedObjectClass DOT fieldName
 * ```
 */
class ObjectClassFieldTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(objectClassFieldTypeCtx) {
        const { children } = objectClassFieldTypeCtx;
        const definedObjectClassCtx = children[0];
        const { moduleReference, objectClassReference } = definedObjectClassCtx.accept(new definedObjectClass_1.DefinedObjectClassVisitor());
        const fieldName = children[2].text;
        return new objectClassField_1.ObjectClassField(moduleReference, objectClassReference, fieldName);
    }
}
exports.ObjectClassFieldTypeVisitor = ObjectClassFieldTypeVisitor;
