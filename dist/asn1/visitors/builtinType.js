"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var asnBoolean_1 = require("../classes/asnBoolean");
var null_1 = require("../classes/null");
var integerType_1 = require("./integerType");
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
        switch (utils_1.getContextName(childCtx)) {
            case 'integerType': {
                return childCtx.accept(new integerType_1.IntegerTypeVisitor());
                break;
            }
            default: {
                switch (childCtx.getText().toLowerCase()) {
                    case 'boolean': {
                        return new asnBoolean_1.AsnBoolean();
                        break;
                    }
                    case 'null': {
                        return new null_1.Null();
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
        return null;
    };
    return BuiltinTypeVisitor;
}());
exports.BuiltinTypeVisitor = BuiltinTypeVisitor;
