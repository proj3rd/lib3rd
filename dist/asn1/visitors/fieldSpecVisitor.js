"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldSpecVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const fixedTypeValueFieldSpec_1 = require("../classes/fixedTypeValueFieldSpec");
const primitiveFieldName_1 = require("../classes/primitiveFieldName");
const typeFieldSpec_1 = require("../classes/typeFieldSpec");
const asnTypeVisitor_1 = require("./asnTypeVisitor");
const typeOptionalitySpecVisitor_1 = require("./typeOptionalitySpecVisitor");
const valueOptionalitySpecVisitor_1 = require("./valueOptionalitySpecVisitor");
const valueSetOptionalitySpecVisitor_1 = require("./valueSetOptionalitySpecVisitor");
/**
 * # Grammar
 * ```
 * fieldSpec: AMPERSAND IDENTIFIER (
 *     typeOptionalitySpec?
 *   | asnType (valueSetOptionalitySpec? | UNIQUE_LITERAL? valueOptionalitySpec?)
 *   | fieldName (OPTIONAL_LITERAL | (DEFAULT_LITERAL (valueSet | value)))?
 *   | definedObjectClass (OPTIONAL_LITERAL | (DEFAULT_LITERAL (objectSet | object)))?
 * )
 * ```
 */
class FieldSpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const name = new primitiveFieldName_1.PrimitiveFieldName(ctx.getChild(1).text);
        let optionality;
        const asnTypeCtx = ctx.asnType();
        if (asnTypeCtx !== undefined) {
            const asnType = asnTypeCtx.accept(new asnTypeVisitor_1.AsnTypeVisitor());
            const valueSetOptionalitySpecCtx = ctx.valueSetOptionalitySpec();
            if (valueSetOptionalitySpecCtx !== undefined) {
                optionality = valueSetOptionalitySpecCtx.accept(new valueSetOptionalitySpecVisitor_1.ValueSetOptionalitySpecVisitor());
            }
            const possiblyUniqueCtx = ctx.childCount >= 4 ? ctx.getChild(3) : undefined;
            const unique = !!(possiblyUniqueCtx !== undefined && possiblyUniqueCtx.text === 'UNIQUE');
            const valueOptionalitySpecCtx = ctx.valueOptionalitySpec();
            if (valueOptionalitySpecCtx !== undefined) {
                optionality = valueOptionalitySpecCtx.accept(new valueOptionalitySpecVisitor_1.ValueOptionalitySpecVisitor());
            }
            return new fixedTypeValueFieldSpec_1.FixedTypeValueFieldSpec(name, asnType, unique, optionality);
        }
        const fieldNameCtx = ctx.fieldName();
        if (fieldNameCtx !== undefined) {
            return unimpl_1.unimpl();
        }
        const definedObjectClassCtx = ctx.definedObjectClass();
        if (definedObjectClassCtx !== undefined) {
            return unimpl_1.unimpl();
        }
        const typeOptionalitySpecCtx = ctx.typeOptionalitySpec();
        optionality = typeOptionalitySpecCtx === undefined
            ? undefined
            : typeOptionalitySpecCtx.accept(new typeOptionalitySpecVisitor_1.TypeOptionalitySpecVisitor());
        return new typeFieldSpec_1.TypeFieldSpec(name, optionality);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.FieldSpecVisitor = FieldSpecVisitor;
//# sourceMappingURL=fieldSpecVisitor.js.map