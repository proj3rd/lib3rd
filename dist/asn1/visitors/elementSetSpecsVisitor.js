"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementSetSpecsVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const extensionMarker_1 = require("../classes/extensionMarker");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
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
        for (let i = 0; i < childCount; i += 1) {
            const childCtx = ctx.getChild(i);
            if (childCtx instanceof grammar3rdParser_1.RootElementSetSpecContext) {
                const rootElementSetSpec = childCtx.accept(new rootElementSetSpecVisitor_1.RootElementSetSpecVisitor());
                elementSetSpecs.push(rootElementSetSpec);
            }
            else if (childCtx instanceof grammar3rdParser_1.AdditionalElementSetSpecContext) {
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