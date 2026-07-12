"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeConstraintVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const booleanValue_1 = require("../classes/booleanValue");
const componentRelationConstraint_1 = require("../classes/componentRelationConstraint");
const contentsConstraint_1 = require("../classes/contentsConstraint");
const extensionMarker_1 = require("../classes/extensionMarker");
const innerTypeConstraints_1 = require("../classes/innerTypeConstraints");
const integerValue_1 = require("../classes/integerValue");
const objectSet_1 = require("../classes/objectSet");
const sizeConstraint_1 = require("../classes/sizeConstraint");
const valueRange_1 = require("../classes/valueRange");
const constraintVisitor_1 = require("./constraintVisitor");
/**
 * # Grammar
 * ```
 * sizeConstraint: SIZE_LITERAL constraint
 * ```
 */
class SizeConstraintVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const constraintCtx = ctx.constraint();
        const constraint = constraintCtx.accept(new constraintVisitor_1.ConstraintVisitor());
        const { constraintSpec, exceptionSpec } = constraint;
        if (exceptionSpec !== undefined) {
            return unimpl_1.unimpl();
        }
        if (constraintSpec instanceof contentsConstraint_1.ContentsConstraint) {
            return unimpl_1.unimpl();
        }
        if (constraintSpec instanceof innerTypeConstraints_1.InnerTypeConstraints) {
            return unimpl_1.unimpl();
        }
        if (constraintSpec instanceof objectSet_1.ObjectSet) {
            return unimpl_1.unimpl();
        }
        if (constraintSpec instanceof componentRelationConstraint_1.ComponentRelationConstraint) {
            return unimpl_1.unimpl();
        }
        const sizeConstraint = [];
        for (let i = 0; i < constraintSpec.elementSetSpecList.length; i += 1) {
            const elementSetSpec = constraintSpec.elementSetSpecList[i];
            if (elementSetSpec instanceof extensionMarker_1.ExtensionMarker) {
                sizeConstraint.push(elementSetSpec);
            }
            else {
                if (elementSetSpec.intersectionsList.length > 1) {
                    return unimpl_1.unimpl();
                }
                const intersections = elementSetSpec.intersectionsList[0];
                if (intersections.length !== 1) {
                    throw Error();
                }
                const intersectionElements = intersections[0];
                if (intersectionElements instanceof integerValue_1.IntegerValue) {
                    sizeConstraint.push(intersectionElements);
                }
                else if (intersectionElements instanceof sizeConstraint_1.SizeConstraint) {
                    return intersectionElements;
                }
                else if (intersectionElements instanceof valueRange_1.ValueRange) {
                    sizeConstraint.push(intersectionElements);
                }
                else if (intersectionElements instanceof booleanValue_1.BooleanValue) {
                    return unimpl_1.unimpl();
                }
                else if (typeof intersectionElements === 'string') {
                    sizeConstraint.push(new integerValue_1.IntegerValue(intersectionElements));
                }
                else {
                    throw Error();
                }
            }
        }
        return new sizeConstraint_1.SizeConstraint(sizeConstraint);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.SizeConstraintVisitor = SizeConstraintVisitor;
//# sourceMappingURL=sizeConstraintVisitor.js.map