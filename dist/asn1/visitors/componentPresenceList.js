"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const componentPresence_1 = require("./componentPresence");
/**
 * ANTRL4 grammar
 * ```
 * componentPresenceList: (componentPresence) (COMMA componentPresence)*
 * ```
 */
class ComponentPresenceListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(componentPresenceListCtx) {
        const childCtxes = componentPresenceListCtx.children;
        const componentPresenceList = [];
        childCtxes.forEach((childCtx, index) => {
            if (index % 2) {
                return;
            }
            componentPresenceList.push(childCtx.accept(new componentPresence_1.ComponentPresenceVisitor()));
        });
        return componentPresenceList;
    }
}
exports.ComponentPresenceListVisitor = ComponentPresenceListVisitor;
