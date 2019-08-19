"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var extensionMarker_1 = require("../classes/extensionMarker");
var additionalEnumeration_1 = require("./additionalEnumeration");
var rootEnumeration_1 = require("./rootEnumeration");
/**
 * ANTLR4 grammar
 * ```
 * rootEnumeration (COMMA   ELLIPSIS exceptionSpec? (COMMA   additionalEnumeration )?)?
 * ```
 */
var EnumerationsVisitor = /** @class */ (function () {
    function EnumerationsVisitor() {
    }
    EnumerationsVisitor.prototype.visitChildren = function (enumerationsCtx) {
        var childCtxes = enumerationsCtx.children;
        var rootEnumerationCtx = childCtxes[0];
        var enumerations = rootEnumerationCtx.accept(new rootEnumeration_1.RootEnumerationVisitor());
        var exceptionSpecCtx = childCtxes[3] && utils_1.getContextName(childCtxes[3]) === 'exceptionSpec' ? childCtxes[3] : null;
        if (exceptionSpecCtx) {
            // TODO
            logging_1.log.warn(utils_1.getLogWithAsn1(enumerationsCtx, 'ExceptionSpec not supported:'));
        }
        var lastCtx = childCtxes[childCtxes.length - 1];
        var additionalEnumerationCtx = utils_1.getContextName(lastCtx) === 'additionalEnumeration' ? lastCtx : null;
        if (additionalEnumerationCtx) {
            var additionalEnumeration = additionalEnumerationCtx.accept(new additionalEnumeration_1.AdditionalEnumerationVisitor());
            enumerations.splice.apply(enumerations, [enumerations.length, 0, new extensionMarker_1.ExtensionMarker()].concat(additionalEnumeration));
        }
        return enumerations;
    };
    return EnumerationsVisitor;
}());
exports.EnumerationsVisitor = EnumerationsVisitor;
