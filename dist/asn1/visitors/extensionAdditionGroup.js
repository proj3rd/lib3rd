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
var extensionAdditionGroup_1 = require("../classes/extensionAdditionGroup");
var componentTypeList_1 = require("./componentTypeList");
var tag_1 = require("./tag");
var versionNumber_1 = require("./versionNumber");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionGroup  :  DOUBLE_L_BRACKET  versionNumber  componentTypeList tag?  DOUBLE_R_BRACKET
 * ```
 */
var ExtensionAdditionGroupVisitor = /** @class */ (function (_super) {
    __extends(ExtensionAdditionGroupVisitor, _super);
    function ExtensionAdditionGroupVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionAdditionGroupVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ExtensionAdditionGroupVisitor.prototype.visitChildren = function (extensionAdditionGroupCtx) {
        var childCtxes = extensionAdditionGroupCtx.children;
        var versionNumberCtx = childCtxes[1];
        var versionNumber = versionNumberCtx.accept(new versionNumber_1.VersionNumberVisitor());
        var componentTypeListCtx = childCtxes[2];
        var componentTypeList = componentTypeListCtx.accept(new componentTypeList_1.ComponentTypeListVisitor());
        if (utils_1.getContextName(childCtxes[3]) === 'tag') {
            var tag = childCtxes[3].accept(new tag_1.TagVisitor());
            if (tag) {
                componentTypeList[componentTypeList.length - 1].tag = tag;
            }
        }
        return new extensionAdditionGroup_1.ExtensionAdditionGroup(componentTypeList, versionNumber);
    };
    return ExtensionAdditionGroupVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ExtensionAdditionGroupVisitor = ExtensionAdditionGroupVisitor;
