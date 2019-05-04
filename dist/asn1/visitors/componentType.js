"use strict";
exports.__esModule = true;
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
var ComponentTypeVisitor = /** @class */ (function () {
    function ComponentTypeVisitor() {
    }
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
                        componentType["default"] = value;
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
        return componentTypeCtx;
    };
    return ComponentTypeVisitor;
}());
exports.ComponentTypeVisitor = ComponentTypeVisitor;
