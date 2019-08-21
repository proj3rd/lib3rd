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
var asnType_1 = require("./asnType");
var value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```
 * actualParameter : asnType | value
 * ```
 */
var ActualParameterVisitor = /** @class */ (function (_super) {
    __extends(ActualParameterVisitor, _super);
    function ActualParameterVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActualParameterVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ActualParameterVisitor.prototype.visitChildren = function (actualParameterCtx) {
        var childCtx = actualParameterCtx.children[0];
        switch (utils_1.getContextName(childCtx)) {
            case 'asnType': {
                return childCtx.accept(new asnType_1.AsnTypeVisitor());
            }
            case 'value': {
                return childCtx.accept(new value_1.ValueVisitor());
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(actualParameterCtx, 'Not supported ASN.1'));
                break;
            }
        }
    };
    return ActualParameterVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ActualParameterVisitor = ActualParameterVisitor;
