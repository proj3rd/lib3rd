"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var asnBoolean_1 = require("../classes/asnBoolean");
var null_1 = require("../classes/null");
var bitStringType_1 = require("./bitStringType");
var choiceType_1 = require("./choiceType");
var enumeratedType_1 = require("./enumeratedType");
var integerType_1 = require("./integerType");
var octetStringType_1 = require("./octetStringType");
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
var BuiltinTypeVisitor = /** @class */ (function () {
    function BuiltinTypeVisitor() {
    }
    BuiltinTypeVisitor.prototype.visitChildren = function (builtinTypeCtx) {
        var childCtx = builtinTypeCtx.children[0];
        var builtinType = null;
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
            default: {
                switch (childCtx.getText().toLowerCase()) {
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
}());
exports.BuiltinTypeVisitor = BuiltinTypeVisitor;
