"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var sequence_1 = require("../classes/sequence");
var componentTypeLists_1 = require("./componentTypeLists");
/**
 * ANTLR4 grammar
 * ```
 * sequenceType :SEQUENCE_LITERAL L_BRACE
 * (extensionAndException  optionalExtensionMarker | componentTypeLists )?
 * R_BRACE
 * ```
 */
var SequenceTypeVisitor = /** @class */ (function () {
    function SequenceTypeVisitor() {
    }
    SequenceTypeVisitor.prototype.visitChildren = function (sequenceTypeCtx) {
        var sequenceType = null;
        var childCtxes = sequenceTypeCtx.children;
        switch (childCtxes.length) {
            case 3: {
                // Empty sequence
                sequenceType = [];
                break;
            }
            case 4: {
                // SEQUENCE_LITERAL L_BRACE componentTypeLists R_BRACE
                var componentTypeListsCtx = childCtxes[2];
                sequenceType = componentTypeListsCtx.accept(new componentTypeLists_1.ComponentTypeListsVisitor());
                break;
            }
            case 5: {
                // sequenceType :SEQUENCE_LITERAL L_BRACE extensionAndException optionalExtensionMarker R_BRACE
                // TODO
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(sequenceTypeCtx, 'Not supported ASN1:'));
                break;
            }
        }
        return new sequence_1.Sequence(sequenceType);
    };
    return SequenceTypeVisitor;
}());
exports.SequenceTypeVisitor = SequenceTypeVisitor;
