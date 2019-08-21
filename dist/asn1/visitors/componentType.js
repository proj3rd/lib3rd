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
var namedType_1 = require("./namedType");
var value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```
 * componentType  :
 *  namedType (OPTIONAL_LITERAL | DEFAULT_LITERAL value )?
 *  |  COMPONENTS_LITERAL OF_LITERAL  asnType
 * ```
 */
var ComponentTypeVisitor = /** @class */ (function (_super) {
    __extends(ComponentTypeVisitor, _super);
    function ComponentTypeVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentTypeVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ComponentTypeVisitor.prototype.visitChildren = function (componentTypeCtx) {
        var childCtxes = componentTypeCtx.children;
        var componentType = null;
        switch (utils_1.getContextName(childCtxes[0])) {
            case 'namedType': {
                var namedTypeCtx = childCtxes[0];
                componentType = namedTypeCtx.accept(new namedType_1.NamedTypeVisitor());
                switch (childCtxes.length) {
                    case 1: {
                        break;
                    }
                    case 2: {
                        componentType.optional = true;
                        break;
                    }
                    case 3: {
                        var valueCtx = childCtxes[2];
                        var value = valueCtx.accept(new value_1.ValueVisitor());
                        componentType.default = value;
                        break;
                    }
                    default: {
                        logging_1.log.warn(utils_1.getLogWithAsn1(componentTypeCtx, 'Not suported ASN1:'));
                        break;
                    }
                }
                break;
            }
            case null: {
                logging_1.log.warn(utils_1.getLogWithAsn1(componentTypeCtx, 'COMPONENTS OF not supported:'));
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(componentTypeCtx, 'Not suported ASN1:'));
                break;
            }
        }
        return componentType;
    };
    return ComponentTypeVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ComponentTypeVisitor = ComponentTypeVisitor;
