"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```
 * enumerationItem : IDENTIFIER | namedNumber | value
 * ```
 */
var EnumerationItemVisitor = /** @class */ (function () {
    function EnumerationItemVisitor() {
    }
    EnumerationItemVisitor.prototype.visitChildren = function (enumerationItemCtx) {
        var childCtx = enumerationItemCtx.children[0];
        var enumerationItem = null;
        switch (utils_1.getContextName(childCtx)) {
            case null: {
                enumerationItem = childCtx.getText();
                break;
            }
            case 'namedNumber': {
                logging_1.log.warn(utils_1.getLogWithAsn1(enumerationItemCtx, 'NamedNumber not supported:'));
                break;
            }
            case 'value': {
                enumerationItem = childCtx.accept(new value_1.ValueVisitor());
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(enumerationItemCtx, 'Not supported ASN1:'));
            }
        }
        return enumerationItem;
    };
    return EnumerationItemVisitor;
}());
exports.EnumerationItemVisitor = EnumerationItemVisitor;
