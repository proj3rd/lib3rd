"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
/**
 * Format ASN.1 in text
 * @param msgIes Array of ASN.1 objects you want to format
 * @returns ASN.1 notation in string
 */
function format(msgIes) {
    var formattedStrings = [];
    msgIes.forEach(function (msgIe) {
        logging_1.log.debug("Formatting " + msgIe.name + " in text...");
        var parameterList = msgIe.definition.parameterList;
        var parameterString = parameterList ? " { " + parameterList.join(', ') + " }" : '';
        formattedStrings.push("" + msgIe.name + parameterString + " ::= " + msgIe.definition.toString());
    });
    return formattedStrings.join('\n\n');
}
exports.format = format;
