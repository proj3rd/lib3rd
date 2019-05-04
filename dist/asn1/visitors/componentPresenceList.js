"use strict";
exports.__esModule = true;
var componentPresence_1 = require("./componentPresence");
/**
 * ANTRL4 grammar
 * ```
 * componentPresenceList: (componentPresence) (COMMA componentPresence)*
 * ```
 */
var ComponentPresenceListVisitor = /** @class */ (function () {
    function ComponentPresenceListVisitor() {
    }
    ComponentPresenceListVisitor.prototype.visitChildren = function (componentPresenceListCtx) {
        var childCtxes = componentPresenceListCtx.children;
        var componentPresenceList = [];
        childCtxes.forEach(function (childCtx, index) {
            if (index % 2) {
                // return;
            }
            componentPresenceList.push(childCtx.accept(new componentPresence_1.ComponentPresenceVisitor()));
        });
        return componentPresenceList;
    };
    return ComponentPresenceListVisitor;
}());
exports.ComponentPresenceListVisitor = ComponentPresenceListVisitor;
