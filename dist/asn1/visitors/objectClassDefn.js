"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const objectClass_1 = require("../classes/objectClass");
const fieldSpec_1 = require("./fieldSpec");
const withSyntaxSpec_1 = require("./withSyntaxSpec");
/**
 * ANTLR4 grammar
 * ```
 * objectClassDefn : CLASS_LITERAL L_BRACE  fieldSpec (COMMA fieldSpec  )*  R_BRACE  withSyntaxSpec?
 * ```
 */
class ObjectClassDefnVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(objectClassDefnCtx) {
        const childCtxes = objectClassDefnCtx.children;
        const fieldSpecs = [];
        let withSyntaxSpec;
        childCtxes.forEach((childCtx) => {
            if (childCtxes instanceof ASN_3gppParser_1.FieldSpecContext) {
                fieldSpecs.push(childCtx.accept(new fieldSpec_1.FieldSpecVisitor()));
            }
            if (childCtxes instanceof ASN_3gppParser_1.WithSyntaxSpecContext) {
                withSyntaxSpec = childCtx.accept(new withSyntaxSpec_1.WithSyntaxSpecVisitor());
            }
        });
        return new objectClass_1.ObjectClass(fieldSpecs, withSyntaxSpec);
    }
}
exports.ObjectClassDefnVisitor = ObjectClassDefnVisitor;
