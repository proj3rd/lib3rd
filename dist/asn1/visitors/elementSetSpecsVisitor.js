"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const extensionMarker_1 = require("../classes/extensionMarker");
const ASN_3gppParser_1 = require("../grammar/ASN_3gppParser");
const additionalElementSetSpecVisitor_1 = require("./additionalElementSetSpecVisitor");
const rootElementSetSpecVisitor_1 = require("./rootElementSetSpecVisitor");
/**
 * # Grammar
 * ```
 * elementSetSpecs: rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
class ElementSetSpecsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const elementSetSpecs = [];
        const { childCount } = ctx;
        for (let i = 0; i < childCount; i++) {
            const childCtx = ctx.getChild(i);
            if (childCtx instanceof ASN_3gppParser_1.RootElementSetSpecContext) {
                const rootElementSetSpec = childCtx.accept(new rootElementSetSpecVisitor_1.RootElementSetSpecVisitor());
                elementSetSpecs.push(rootElementSetSpec);
            }
            else if (childCtx instanceof ASN_3gppParser_1.AdditionalElementSetSpecContext) {
                const additionalElementSetSpec = childCtx.accept(new additionalElementSetSpecVisitor_1.AdditionalElementSetSpecVisitor());
                elementSetSpecs.push(additionalElementSetSpec);
            }
            else {
                switch (childCtx.text) {
                    case ',': {
                        break;
                    }
                    case '...': {
                        elementSetSpecs.push(extensionMarker_1.ExtensionMarker.getInstance());
                        break;
                    }
                    default: {
                        throw Error();
                    }
                }
            }
        }
        return elementSetSpecs;
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ElementSetSpecsVisitor = ElementSetSpecsVisitor;
//# sourceMappingURL=elementSetSpecsVisitor.js.map