"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const extensionMarker_1 = require("../classes/extensionMarker");
const additionalElementSetSpec_1 = require("./additionalElementSetSpec");
const rootElementSetSpec_1 = require("./rootElementSetSpec");
/**
 * ANTLR4 grammar
 * ```
 * elementSetSpecs :
 *  rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
class ElementSetSpecsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(elementSetSpecsCtx) {
        const elementSetSpecs = [];
        const { children } = elementSetSpecsCtx;
        children.forEach((childCtx) => {
            if (childCtx instanceof ASN_3gppParser_1.RootElementSetSpecContext) {
                elementSetSpecs.splice(elementSetSpecs.length, 0, ...childCtx.accept(new rootElementSetSpec_1.RootElementSetSpecVisitor()));
            }
            else if (childCtx instanceof ASN_3gppParser_1.AdditionalElementSetSpecContext) {
                elementSetSpecs.splice(elementSetSpecs.length, 0, ...childCtx.accept(new additionalElementSetSpec_1.AdditionalElementSetSpecVisitor()));
            }
            else if (childCtx instanceof TerminalNode_1.TerminalNode) {
                if (childCtx.text === '...') {
                    elementSetSpecs.push(new extensionMarker_1.ExtensionMarker());
                }
            }
        });
        return elementSetSpecs;
    }
}
exports.ElementSetSpecsVisitor = ElementSetSpecsVisitor;
