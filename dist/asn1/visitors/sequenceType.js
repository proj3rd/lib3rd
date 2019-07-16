"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var sequence_1 = require("../classes/sequence");
var componentTypeLists_1 = require("./componentTypeLists");
var optionalExtensionMarker_1 = require("./optionalExtensionMarker");
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
        var sequenceType = [];
        var childCtxes = sequenceTypeCtx.children;
        childCtxes.forEach(function (childCtx) {
            switch (utils_1.getContextName(childCtx)) {
                case 'extensionAndException': {
                    logging_1.log.warn(utils_1.getLogWithAsn1(sequenceTypeCtx, 'extensionAndException Not supported:'));
                    break;
                }
                case 'optionalExtensionMarker': {
                    sequenceType.splice(sequenceType.length, 0, childCtx.accept(new optionalExtensionMarker_1.OptionalExtensionMarkerVisitor()));
                    break;
                }
                case 'componentTypeLists': {
                    sequenceType.splice(sequenceType.length, 0, childCtx.accept(new componentTypeLists_1.ComponentTypeListsVisitor()));
                    break;
                }
                case null: {
                    break;
                }
                default: {
                    logging_1.log.warn(utils_1.getLogWithAsn1(sequenceTypeCtx, 'Not supported ASN1:'));
                    break;
                }
            }
        });
        return new sequence_1.Sequence(sequenceType);
    };
    return SequenceTypeVisitor;
}());
exports.SequenceTypeVisitor = SequenceTypeVisitor;
