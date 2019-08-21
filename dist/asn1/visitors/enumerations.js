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
var EnumerationsVisitor = /** @class */ (function (_super) {
    __extends(EnumerationsVisitor, _super);
    function EnumerationsVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnumerationsVisitor.prototype.defaultResult = function () {
        return [];
    };
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
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.EnumerationsVisitor = EnumerationsVisitor;
