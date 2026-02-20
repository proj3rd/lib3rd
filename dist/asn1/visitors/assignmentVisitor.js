"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const nullType_1 = require("../classes/nullType");
const objectClassAssignment_1 = require("../classes/objectClassAssignment");
const objectSetAssignment_1 = require("../classes/objectSetAssignment");
const parameterizedTypeAssignment_1 = require("../classes/parameterizedTypeAssignment");
const typeAssignment_1 = require("../classes/typeAssignment");
const valueAssignment_1 = require("../classes/valueAssignment");
const objectClassAssignmentVisitor_1 = require("./objectClassAssignmentVisitor");
const parameterizedAssignmentVisitor_1 = require("./parameterizedAssignmentVisitor");
const typeAssignmentVisitor_1 = require("./typeAssignmentVisitor");
const valueAssignmentVisitor_1 = require("./valueAssignmentVisitor");
/**
 * # Grammar
 * ```
 * assignment: IDENTIFIER (
 *   valueAssignment |
 *   typeAssignment |
 *   parameterizedAssignment |
 *   objectClassAssignment
 * )
 * ```
 */
class AssignmentVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const name = ctx.getChild(0).text;
        const valueAssignmentCtx = ctx.valueAssignment();
        if (valueAssignmentCtx !== undefined) {
            const typeAndValue = valueAssignmentCtx.accept(new valueAssignmentVisitor_1.ValueAssignmentVisitor());
            const { asnType, value } = typeAndValue;
            return new valueAssignment_1.ValueAssignment(name, asnType, value);
        }
        const typeAssignmentCtx = ctx.typeAssignment();
        if (typeAssignmentCtx !== undefined) {
            const asnType = typeAssignmentCtx.accept(new typeAssignmentVisitor_1.TypeAssignmentVisitor());
            return new typeAssignment_1.TypeAssignment(name, asnType);
        }
        const parameterizedAssignmentCtx = ctx.parameterizedAssignment();
        if (parameterizedAssignmentCtx !== undefined) {
            const { parameterizedTypeAssignmentElements, objectSetAssignmentElements, } = parameterizedAssignmentCtx.accept(new parameterizedAssignmentVisitor_1.ParameterizedAssignmentVisitor());
            if (parameterizedTypeAssignmentElements) {
                const { parameters, asnType } = parameterizedTypeAssignmentElements;
                return new parameterizedTypeAssignment_1.ParameterizedTypeAssignment(name, parameters, asnType);
            }
            if (objectSetAssignmentElements) {
                const { definedObjectClass, objectSet } = objectSetAssignmentElements;
                return new objectSetAssignment_1.ObjectSetAssignment(name, definedObjectClass, objectSet);
            }
        }
        const objectClassAssignmentCtx = ctx.objectClassAssignment();
        if (objectClassAssignmentCtx !== undefined) {
            const objectClass = objectClassAssignmentCtx.accept(new objectClassAssignmentVisitor_1.ObjectClassAssignmentVisitor());
            return new objectClassAssignment_1.ObjectClassAssignment(name, objectClass);
        }
        throw Error();
    }
    defaultResult() {
        return new typeAssignment_1.TypeAssignment('', new nullType_1.NullType());
    }
}
exports.AssignmentVisitor = AssignmentVisitor;
//# sourceMappingURL=assignmentVisitor.js.map