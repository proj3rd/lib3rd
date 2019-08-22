"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const elements_1 = require("./elements");
/**
 * ANTLR4 grammar
 * ```
 * intersectionElements : elements (exclusions)?
 * ```
 */
class IntersectionElementsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(intersectionElementsCtx) {
        const childCtxes = intersectionElementsCtx.children;
        const elementsCtx = childCtxes[0];
        const exclusionsCtx = childCtxes[1];
        const intersectionElements = elementsCtx.accept(new elements_1.ElementsVisitor());
        if (exclusionsCtx) {
            logging_1.log.warn(utils_1.getLogWithAsn1(intersectionElementsCtx, 'Exclusions not supported:'));
        }
        return intersectionElements;
    }
}
exports.IntersectionElementsVisitor = IntersectionElementsVisitor;
