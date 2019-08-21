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
var utils_1 = require("../utils");
var componentType_1 = require("./componentType");
var tag_1 = require("./tag");
/**
 * ANTLR4 grammar
 * ```
 * componentTypeList  : (componentType) (COMMA tag? componentType)*
 * ```
 */
var ComponentTypeListVisitor = /** @class */ (function (_super) {
    __extends(ComponentTypeListVisitor, _super);
    function ComponentTypeListVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentTypeListVisitor.prototype.defaultResult = function () {
        return [];
    };
    ComponentTypeListVisitor.prototype.visitChildren = function (componentTypeListCtx) {
        var childCtxes = componentTypeListCtx.children;
        var componentTypeList = [];
        childCtxes.forEach(function (childCtx) {
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
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ComponentTypeListVisitor = ComponentTypeListVisitor;
