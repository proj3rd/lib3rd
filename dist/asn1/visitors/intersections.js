"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const intersectionElements_1 = require("./intersectionElements");
/**
 * ANTLR4 grammar
 * ```
 * intersections : (intersectionElements) (intersectionMark intersectionElements)*
 * ```
 */
class IntersectionsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(intersectionsCtx) {
        const childCtxes = intersectionsCtx.children;
        let intersections;
        if (childCtxes.length === 1) {
            intersections = childCtxes[0].accept(new intersectionElements_1.IntersectionElementsVisitor());
        }
        else if (childCtxes.length > 1) {
            // TODO
            logging_1.log.warn(utils_1.getLogWithAsn1(intersectionsCtx, 'Multiple IntersectionElements\'s not supported:'));
        }
        return intersections;
    }
}
exports.IntersectionsVisitor = IntersectionsVisitor;
