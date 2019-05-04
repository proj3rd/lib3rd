"use strict";
exports.__esModule = true;
var componentPresence_1 = require("../classes/componentPresence");
/**
 * ANTLR4 grammar
 * ```
 * componentPresence: IDENTIFIER (ABSENT_LITERAL | PRESENT_LITERAL)
 * ```
 */
var ComponentPresenceVisitor = /** @class */ (function () {
    function ComponentPresenceVisitor() {
    }
    ComponentPresenceVisitor.prototype.visitChildren = function (componentPresenceCtx) {
        var childCtxes = componentPresenceCtx.children;
        return new componentPresence_1.ComponentPresence(childCtxes[0].getText(), childCtxes[1].getText());
    };
    return ComponentPresenceVisitor;
}());
exports.ComponentPresenceVisitor = ComponentPresenceVisitor;
