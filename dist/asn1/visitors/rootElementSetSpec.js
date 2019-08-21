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
var elementSetSpec_1 = require("./elementSetSpec");
/**
 * ANTLR4 grammar
 * rootElementSetSpec : elementSetSpec
 */
var RootElementSetSpecVisitor = /** @class */ (function (_super) {
    __extends(RootElementSetSpecVisitor, _super);
    function RootElementSetSpecVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootElementSetSpecVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    RootElementSetSpecVisitor.prototype.visitChildren = function (rootElementSetSpecCtx) {
        var elementSetSpec = rootElementSetSpecCtx.children[0];
        return elementSetSpec.accept(new elementSetSpec_1.ElementSetSpecVisitor());
    };
    return RootElementSetSpecVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.RootElementSetSpecVisitor = RootElementSetSpecVisitor;
