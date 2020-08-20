"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const objectClassFieldType_1 = require("../classes/objectClassFieldType");
const definedObjectClassVisitor_1 = require("./definedObjectClassVisitor");
const fieldNameVisitor_1 = require("./fieldNameVisitor");
/**
 * # Grammar
 * ```
 * objectClassFieldType: definedObjectClass DOT fieldName
 * ```
 */
class ObjectClassFieldTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const definedObjectClassCtx = ctx.definedObjectClass();
        const definedObjectClass = definedObjectClassCtx.accept(new definedObjectClassVisitor_1.DefinedObjectClassVisitor());
        const fieldNameCtx = ctx.fieldName();
        const fieldName = fieldNameCtx.accept(new fieldNameVisitor_1.FieldNameVisitor());
        return new objectClassFieldType_1.ObjectClassFieldType(definedObjectClass, fieldName);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ObjectClassFieldTypeVisitor = ObjectClassFieldTypeVisitor;
//# sourceMappingURL=objectClassFieldTypeVisitor.js.map