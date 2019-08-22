"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const sequence_1 = require("../classes/sequence");
const componentTypeLists_1 = require("./componentTypeLists");
const extensionAndException_1 = require("./extensionAndException");
const optionalExtensionMarker_1 = require("./optionalExtensionMarker");
/**
 * ANTLR4 grammar
 * ```
 * sequenceType :SEQUENCE_LITERAL L_BRACE
 * (extensionAndException  optionalExtensionMarker | componentTypeLists )?
 * R_BRACE
 * ```
 */
class SequenceTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(sequenceTypeCtx) {
        const sequenceType = [];
        const childCtxes = sequenceTypeCtx.children;
        childCtxes.forEach((childCtx) => {
            if (childCtx instanceof ASN_3gppParser_1.ExtensionAndExceptionContext) {
                sequenceType.splice(sequenceType.length, 0, ...childCtx.accept(new extensionAndException_1.ExtensionAndExceptionVisitor()));
            }
            else if (childCtx instanceof ASN_3gppParser_1.OptionalExtensionMarkerContext) {
                sequenceType.splice(sequenceType.length, 0, ...childCtx.accept(new optionalExtensionMarker_1.OptionalExtensionMarkerVisitor()));
            }
            else if (childCtx instanceof ASN_3gppParser_1.ComponentTypeListsContext) {
                sequenceType.splice(sequenceType.length, 0, ...childCtx.accept(new componentTypeLists_1.ComponentTypeListsVisitor()));
            }
            else if (childCtx instanceof TerminalNode_1.TerminalNode) {
                // Do nothing
            }
            else {
                logging_1.log.warn(utils_1.getLogWithAsn1(sequenceTypeCtx, 'Not supported ASN1:'));
            }
        });
        return new sequence_1.Sequence(sequenceType);
    }
}
exports.SequenceTypeVisitor = SequenceTypeVisitor;
