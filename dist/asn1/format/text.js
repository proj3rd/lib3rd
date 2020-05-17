"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("../../utils/logging");
const asnType_1 = require("../classes/asnType");
const objectSet_1 = require("../classes/objectSet");
/**
 * Format ASN.1 in text
 * @param msgIes Array of ASN.1 objects you want to format
 * @returns ASN.1 notation in string
 */
function format(msgIes) {
    const formattedStrings = [];
    msgIes.forEach((msgIe) => {
        logging_1.log.debug(`Formatting ${msgIe.name} in text...`);
        const parameterList = msgIe.definition instanceof asnType_1.AsnType ? msgIe.definition.parameterList : undefined;
        const parameterString = parameterList ? ` { ${parameterList.join(', ')} }` : '';
        const definedObjectClass = msgIe.definition instanceof objectSet_1.ObjectSet ? msgIe.definition.definedObjectClass : undefined;
        const definedObjectClassString = definedObjectClass ? ` ${definedObjectClass.toString()}` : '';
        formattedStrings.push(`${msgIe.name}${parameterString || definedObjectClassString} ::= ${msgIe.definition.toString()}`);
    });
    return formattedStrings.join('\n\n');
}
exports.format = format;
