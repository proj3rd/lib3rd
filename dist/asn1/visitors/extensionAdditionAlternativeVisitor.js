"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const ASN_3gppParser_1 = require("../grammar/ASN_3gppParser");
const extensionAdditionAlternativesGroupVisitor_1 = require("./extensionAdditionAlternativesGroupVisitor");
const namedTypeVisitor_1 = require("./namedTypeVisitor");
/**
 * # Grammar
 * ```
 * extensionAdditionAlternative: extensionAdditionAlternativesGroup | namedType
 * ```
 */
class ExtensionAdditionAlternativeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const childCtx = ctx.getChild(0);
        if (childCtx instanceof ASN_3gppParser_1.ExtensionAdditionAlternativesGroupContext) {
            return childCtx.accept(new extensionAdditionAlternativesGroupVisitor_1.ExtensionAdditionAlternativesGroupVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.NamedTypeContext) {
            return childCtx.accept(new namedTypeVisitor_1.NamedTypeVisitor());
        }
        else {
            throw Error();
        }
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ExtensionAdditionAlternativeVisitor = ExtensionAdditionAlternativeVisitor;
//# sourceMappingURL=extensionAdditionAlternativeVisitor.js.map