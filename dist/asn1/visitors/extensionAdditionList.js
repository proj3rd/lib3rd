"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var extensionAddition_1 = require("./extensionAddition");
var tag_1 = require("./tag");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionList  :  (extensionAddition) (COMMA tag? extensionAddition)*
 * ```
 */
var ExtensionAdditionListVisitor = /** @class */ (function () {
    function ExtensionAdditionListVisitor() {
    }
    ExtensionAdditionListVisitor.prototype.visitChildren = function (extensionAdditionListCtx) {
        var childCtxes = extensionAdditionListCtx.children;
        var extensionAdditionList = [];
        childCtxes.forEach(function (childCtx, index) {
            switch (utils_1.getContextName(childCtx)) {
                case 'extensionAddition': {
                    var extensionAddition = childCtx.accept(new extensionAddition_1.ExtensionAdditionVisitor());
                    extensionAdditionList.splice.apply(extensionAdditionList, [extensionAdditionList.length, 0].concat(extensionAddition));
                    break;
                }
                case 'tag': {
                    var tag = childCtx.accept(new tag_1.TagVisitor());
                    if (tag) {
                        extensionAdditionList[extensionAdditionList.length - 1].tag = tag;
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
}());
exports.ExtensionAdditionListVisitor = ExtensionAdditionListVisitor;
