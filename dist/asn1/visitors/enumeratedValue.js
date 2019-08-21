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
/**
 * ANTLR4 grammar
 * ```
 * enumeratedValue  : IDENTIFIER
 * ```
 */
var EnumeratedValueVisitor = /** @class */ (function (_super) {
    __extends(EnumeratedValueVisitor, _super);
    function EnumeratedValueVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnumeratedValueVisitor.prototype.defaultResult = function () {
        return '';
    };
    EnumeratedValueVisitor.prototype.visitChildren = function (enumeratedValueCtx) {
        return enumeratedValueCtx.text;
    };
    return EnumeratedValueVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.EnumeratedValueVisitor = EnumeratedValueVisitor;
