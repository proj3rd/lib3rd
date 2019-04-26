"use strict";
exports.__esModule = true;
var logging_1 = require("../utils/logging");
function getContextName(ctx) {
    if ('ruleIndex' in ctx) {
        return ctx.parser.ruleNames[ctx.ruleIndex];
    }
    return null;
}
exports.getContextName = getContextName;
function warnNotSupportedAsn1(ctx) {
    logging_1.log.warn("Not supported ASN.1:", ctx.getText().substring(0, 48));
}
exports.warnNotSupportedAsn1 = warnNotSupportedAsn1;
