"use strict";
exports.__esModule = true;
var componentType_1 = require("./componentType");
/**
 * ANTLR4 grammar
 * ```
 * componentTypeList  : (componentType) (COMMA componentType)*
 * ```
 */
var ComponentTypeListVisitor = /** @class */ (function () {
    function ComponentTypeListVisitor() {
    }
    ComponentTypeListVisitor.prototype.visitChildren = function (componentTypeListCtx) {
        var childCtxes = componentTypeListCtx.children;
        var componetTypeList = [];
        childCtxes.forEach(function (childCtx, index) {
            if (index % 2) {
                return;
            }
            var componentType = childCtx.accept(new componentType_1.ComponentTypeVisitor());
            if (componentType) {
                componetTypeList.push(componentType);
            }
        });
        return componetTypeList;
    };
    return ComponentTypeListVisitor;
}());
exports.ComponentTypeListVisitor = ComponentTypeListVisitor;
