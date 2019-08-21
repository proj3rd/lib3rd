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
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var extensionAddition_1 = require("./extensionAddition");
var tag_1 = require("./tag");
var namedType_1 = require("../classes/namedType");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionList  :  (extensionAddition) (COMMA tag? extensionAddition)*
 * ```
 */
var ExtensionAdditionListVisitor = /** @class */ (function (_super) {
    __extends(ExtensionAdditionListVisitor, _super);
    function ExtensionAdditionListVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionAdditionListVisitor.prototype.defaultResult = function () {
        return [];
    };
    ExtensionAdditionListVisitor.prototype.visitChildren = function (extensionAdditionListCtx) {
        var childCtxes = extensionAdditionListCtx.children;
        var extensionAdditionList = [];
        childCtxes.forEach(function (childCtx) {
            switch (utils_1.getContextName(childCtx)) {
                case 'extensionAddition': {
                    extensionAdditionList.push(childCtx.accept(new extensionAddition_1.ExtensionAdditionVisitor()));
                    break;
                }
                case 'tag': {
                    var tag = childCtx.accept(new tag_1.TagVisitor());
                    var lastItem = extensionAdditionList[extensionAdditionList.length - 1];
                    if (tag && lastItem instanceof namedType_1.NamedType) {
                        lastItem.tag = tag;
                    }
                    break;
                }
                case null: {
                    break;
                }
                default: {
                    logging_1.log.warn(utils_1.getLogWithAsn1(childCtx, 'Not supported ASN.1 in ExtensionAdditionList'));
                    break;
                }
            }
        });
        return extensionAdditionList;
    };
    return ExtensionAdditionListVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ExtensionAdditionListVisitor = ExtensionAdditionListVisitor;
