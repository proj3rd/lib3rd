"use strict";
exports.__esModule = true;
function ruleName(ctx) {
    if (!ctx.ruleIndex) {
        return null;
    }
    return ctx.parser.ruleNames[ctx.ruleIndex];
}
exports.ruleName = ruleName;
