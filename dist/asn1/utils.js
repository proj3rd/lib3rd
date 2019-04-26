"use strict";
exports.__esModule = true;
function getContextName(ctx) {
    if ('ruleIndex' in ctx) {
        return ctx.parser.ruleNames[ctx.ruleIndex];
    }
    return null;
}
exports.getContextName = getContextName;
