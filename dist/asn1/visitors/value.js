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
var builtinValue_1 = require("./builtinValue");
/**
 * ANTLR4 grammar
 * ```
 * value  :   builtinValue
 * ```
 */
var ValueVisitor = /** @class */ (function (_super) {
    __extends(ValueVisitor, _super);
    function ValueVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValueVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ValueVisitor.prototype.visitChildren = function (valueCtx) {
        var builtinValueCtx = valueCtx.children[0];
        return builtinValueCtx.accept(new builtinValue_1.BuiltinValueVisitor());
    };
    return ValueVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ValueVisitor = ValueVisitor;
