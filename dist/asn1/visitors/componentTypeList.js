"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var componentType_1 = require("./componentType");
var tag_1 = require("./tag");
/**
 * ANTLR4 grammar
 * ```
 * componentTypeList  : (componentType) (COMMA tag? componentType)*
 * ```
 */
var ComponentTypeListVisitor = /** @class */ (function () {
    function ComponentTypeListVisitor() {
    }
    ComponentTypeListVisitor.prototype.visitChildren = function (componentTypeListCtx) {
        var childCtxes = componentTypeListCtx.children;
        var componentTypeList = [];
        childCtxes.forEach(function (childCtx, index) {
            switch (utils_1.getContextName(childCtx)) {
                case 'componentType': {
                    var componentType = childCtx.accept(new componentType_1.ComponentTypeVisitor());
                    if (componentType) {
                        componentTypeList.push(componentType);
                    }
                    break;
                }
                case 'tag': {
                    var tag = childCtx.accept(new tag_1.TagVisitor());
                    if (tag) {
                        componentTypeList[componentTypeList.length - 1].tag = tag;
                    }
                    break;
                }
                default: {
                    return;
                }
            }
        });
        return componentTypeList;
    };
    return ComponentTypeListVisitor;
}());
exports.ComponentTypeListVisitor = ComponentTypeListVisitor;
