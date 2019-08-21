"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
var componentPresence_1 = require("../classes/componentPresence");
/**
 * ANTLR4 grammar
 * ```
 * componentPresence: IDENTIFIER (ABSENT_LITERAL | PRESENT_LITERAL)
 * ```
 */
var ComponentPresenceVisitor = /** @class */ (function (_super) {
    __extends(ComponentPresenceVisitor, _super);
    function ComponentPresenceVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentPresenceVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ComponentPresenceVisitor.prototype.visitChildren = function (componentPresenceCtx) {
        var childCtxes = componentPresenceCtx.children;
        return new componentPresence_1.ComponentPresence(childCtxes[0].text, childCtxes[1].text);
    };
    return ComponentPresenceVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ComponentPresenceVisitor = ComponentPresenceVisitor;
