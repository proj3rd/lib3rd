"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var componentTypeList_1 = require("./componentTypeList");
/**
 * ANTLR4 grammar
 * ```
 * rootComponentTypeList  : componentTypeList
 * ```
 */
var RootComponentTypeListVisitor = /** @class */ (function () {
    function RootComponentTypeListVisitor() {
    }
    RootComponentTypeListVisitor.prototype.visitChildren = function (rootComponentTypeListCtx) {
        var componentTypeListCtx = rootComponentTypeListCtx.children[0];
        return componentTypeListCtx.accept(new componentTypeList_1.ComponentTypeListVisitor());
    };
    return RootComponentTypeListVisitor;
}());
exports.RootComponentTypeListVisitor = RootComponentTypeListVisitor;
