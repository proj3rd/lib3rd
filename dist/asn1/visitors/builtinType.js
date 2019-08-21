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
var asnBoolean_1 = require("../classes/asnBoolean");
var null_1 = require("../classes/null");
var bitStringType_1 = require("./bitStringType");
var choiceType_1 = require("./choiceType");
var enumeratedType_1 = require("./enumeratedType");
var integerType_1 = require("./integerType");
var octetStringType_1 = require("./octetStringType");
var sequenceOfType_1 = require("./sequenceOfType");
var sequenceType_1 = require("./sequenceType");
/**
 * ANTLR4 grammar
 * builtinType :
 *    octetStringType
 *  | bitStringType
 *  | choiceType
 *  | enumeratedType
 *  | integerType
 *  | sequenceType
 *  | sequenceOfType
 *  | setType
 *  | setOfType
 *  | objectidentifiertype
 *  | objectClassFieldType
 *  | BOOLEAN_LITERAL
 *  | NULL_LITERAL
 */
var BuiltinTypeVisitor = /** @class */ (function (_super) {
    __extends(BuiltinTypeVisitor, _super);
    function BuiltinTypeVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BuiltinTypeVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    BuiltinTypeVisitor.prototype.visitChildren = function (builtinTypeCtx) {
        var childCtx = builtinTypeCtx.children[0];
        var builtinType;
        switch (utils_1.getContextName(childCtx)) {
            case 'bitStringType': {
                builtinType = childCtx.accept(new bitStringType_1.BitStringTypeVisitor());
                break;
            }
            case 'choiceType': {
                builtinType = childCtx.accept(new choiceType_1.ChoiceTypeVisitor());
                break;
            }
            case 'enumeratedType': {
                builtinType = childCtx.accept(new enumeratedType_1.EnumeratedTypeVisitor());
                break;
            }
            case 'integerType': {
                builtinType = childCtx.accept(new integerType_1.IntegerTypeVisitor());
                break;
            }
            case 'octetStringType': {
                builtinType = childCtx.accept(new octetStringType_1.OctetStringTypeVisitor());
                break;
            }
            case 'sequenceOfType': {
                builtinType = childCtx.accept(new sequenceOfType_1.SequenceOfTypeVisitor());
                break;
            }
            case 'sequenceType': {
                builtinType = childCtx.accept(new sequenceType_1.SequenceTypeVisitor());
                break;
            }
            default: {
                switch (childCtx.text.toLowerCase()) {
                    case 'boolean': {
                        builtinType = new asnBoolean_1.AsnBoolean();
                        break;
                    }
                    case 'null': {
                        builtinType = new null_1.Null();
                        break;
                    }
                    default: {
                        // TODO
                        logging_1.log.warn(utils_1.getLogWithAsn1(childCtx, 'Not supported ASN1:'));
                        break;
                    }
                }
                break;
            }
        }
        return builtinType;
    };
    return BuiltinTypeVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.BuiltinTypeVisitor = BuiltinTypeVisitor;
