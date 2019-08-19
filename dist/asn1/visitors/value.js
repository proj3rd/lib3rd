"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var builtinValue_1 = require("./builtinValue");
/**
 * ANTLR4 grammar
 * ```
 * value  :   builtinValue
 * ```
 */
var ValueVisitor = /** @class */ (function () {
    function ValueVisitor() {
    }
    ValueVisitor.prototype.visitChildren = function (valueCtx) {
        var builtinValueCtx = valueCtx.children[0];
        return builtinValueCtx.accept(new builtinValue_1.BuiltinValueVisitor());
    };
    return ValueVisitor;
}());
exports.ValueVisitor = ValueVisitor;
