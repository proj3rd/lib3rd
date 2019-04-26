"use strict";
exports.__esModule = true;
function getContextName(ctx) {
    if ('ruleIndex' in ctx) {
        return ctx.parser.ruleNames[ctx.ruleIndex];
    }
    return null;
}
exports.getContextName = getContextName;
function getLogWithAsn1(ctx, prefix, postfix, length) {
    if (prefix === void 0) { prefix = ''; }
    if (postfix === void 0) { postfix = ''; }
    if (length === void 0) { length = 80; }
    var asn1Length = length - prefix.length - postfix.length;
    return [prefix, ctx.getText().substring(0, asn1Length), postfix].join(' ').trim();
}
exports.getLogWithAsn1 = getLogWithAsn1;
