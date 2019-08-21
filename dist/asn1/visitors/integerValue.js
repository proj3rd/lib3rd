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
var utils_1 = require("../utils");
var AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
var signedNumber_1 = require("./signedNumber");
/**
 * ANTLR4 grammar
 * ```
 * integerValue :  signedNumber | IDENTIFIER
 * ```
 */
var IntegerValueVisitor = /** @class */ (function (_super) {
    __extends(IntegerValueVisitor, _super);
    function IntegerValueVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntegerValueVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    IntegerValueVisitor.prototype.visitChildren = function (integerValueCtx) {
        var childCtx = integerValueCtx.children[0];
        var integerValue;
        switch (utils_1.getContextName(childCtx)) {
            case 'signedNumber': {
                integerValue = integerValueCtx.accept(new signedNumber_1.SignedNumberVisitor());
                break;
            }
            default: {
                integerValue = integerValueCtx.text;
                break;
            }
        }
        return integerValue;
    };
    return IntegerValueVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.IntegerValueVisitor = IntegerValueVisitor;
