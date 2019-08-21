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
var componentTypeList_1 = require("./componentTypeList");
/**
 * ANTLR4 grammar
 * ```
 * rootComponentTypeList  : componentTypeList
 * ```
 */
var RootComponentTypeListVisitor = /** @class */ (function (_super) {
    __extends(RootComponentTypeListVisitor, _super);
    function RootComponentTypeListVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootComponentTypeListVisitor.prototype.defaultResult = function () {
        return [];
    };
    RootComponentTypeListVisitor.prototype.visitChildren = function (rootComponentTypeListCtx) {
        var componentTypeListCtx = rootComponentTypeListCtx.children[0];
        return componentTypeListCtx.accept(new componentTypeList_1.ComponentTypeListVisitor());
    };
    return RootComponentTypeListVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.RootComponentTypeListVisitor = RootComponentTypeListVisitor;
