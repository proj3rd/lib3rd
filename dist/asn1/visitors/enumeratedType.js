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
var enumerated_1 = require("../classes/enumerated");
var enumerations_1 = require("./enumerations");
/**
 * ANTLR4 grammar
 * ```
 * enumeratedType : ENUMERATED_LITERAL L_BRACE enumerations R_BRACE
 * ```
 */
var EnumeratedTypeVisitor = /** @class */ (function (_super) {
    __extends(EnumeratedTypeVisitor, _super);
    function EnumeratedTypeVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnumeratedTypeVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    EnumeratedTypeVisitor.prototype.visitChildren = function (enumeratedTypeCtx) {
        var enumerationsCtx = enumeratedTypeCtx.children[2];
        return new enumerated_1.Enumerated(enumerationsCtx.accept(new enumerations_1.EnumerationsVisitor()));
    };
    return EnumeratedTypeVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.EnumeratedTypeVisitor = EnumeratedTypeVisitor;
