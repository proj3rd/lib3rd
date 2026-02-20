"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldNameVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const primitiveFieldName_1 = require("../classes/primitiveFieldName");
/**
 * # Grammar
 * ```
 * fieldName: (AMPERSAND IDENTIFIER) (DOT AMPERSAND IDENTIFIER)*
 * ```
 */
class FieldNameVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const primitiveFieldNameList = [];
        const { childCount } = ctx;
        for (let i = 1; i < childCount; i += 3) {
            const name = ctx.getChild(i).text;
            primitiveFieldNameList.push(new primitiveFieldName_1.PrimitiveFieldName(name));
        }
        return primitiveFieldNameList;
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.FieldNameVisitor = FieldNameVisitor;
//# sourceMappingURL=fieldNameVisitor.js.map