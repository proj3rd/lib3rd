"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
class ObjectClassAssignmentVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(objectClassAssignmentCtx) {
        // TODO
    }
}
exports.ObjectClassAssignmentVisitor = ObjectClassAssignmentVisitor;
