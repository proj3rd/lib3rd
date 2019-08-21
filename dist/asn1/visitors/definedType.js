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
var definedType_1 = require("../classes/definedType");
var actualParameterList_1 = require("./actualParameterList");
/**
 * ANTLR4 grammar
 * ```
 * definedType :
 * IDENTIFIER (DOT IDENTIFIER)? actualParameterList?
 * ```
 */
var DefinedTypeVisitor = /** @class */ (function (_super) {
    __extends(DefinedTypeVisitor, _super);
    function DefinedTypeVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinedTypeVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    DefinedTypeVisitor.prototype.visitChildren = function (definedTypeCtx) {
        var definedType = new definedType_1.DefinedType();
        var childCtxes = definedTypeCtx.children;
        childCtxes.forEach(function (childCtx) {
            switch (utils_1.getContextName(childCtx)) {
                case 'actualParameterList': {
                    definedType.actualParameterList = childCtx.accept(new actualParameterList_1.ActualParameterListVisitor());
                    break;
                }
                case null: {
                    var text = childCtx.text;
                    if (text !== '.') {
                        if (!definedType.typeReference) {
                            definedType.typeReference = text;
                        }
                        else {
                            definedType.moduleReference = definedType.typeReference;
                            definedType.typeReference = text;
                        }
                    }
                    break;
                }
                default: {
                    logging_1.log.warn(utils_1.getLogWithAsn1(definedTypeCtx, 'Not supported ASN.1'));
                    break;
                }
            }
        });
        return definedType;
    };
    return DefinedTypeVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.DefinedTypeVisitor = DefinedTypeVisitor;
