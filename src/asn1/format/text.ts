import { log } from '../../utils/logging';
import { AsnType } from '../classes/asnType';
import { ObjectSet } from '../classes/objectSet';
import { IMsgIe } from './common';

/**
 * Format ASN.1 in text
 * @param msgIes Array of ASN.1 objects you want to format
 * @returns ASN.1 notation in string
 */
export function format(msgIes: IMsgIe[]): string {
  const formattedStrings = [];
  msgIes.forEach((msgIe) => {
    log.debug(`Formatting ${msgIe.name} in text...`);
    const parameterList = msgIe.definition instanceof AsnType ? msgIe.definition.parameterList : undefined;
    const parameterString = parameterList ? ` { ${parameterList.join(', ')} }` : '';
    const definedObjectClass = msgIe.definition instanceof ObjectSet ? msgIe.definition.definedObjectClass : undefined;
    const definedObjectClassString = definedObjectClass ? ` ${definedObjectClass.toString()}` : '';
    formattedStrings.push(`${msgIe.name}${parameterString || definedObjectClassString} ::= ${msgIe.definition.toString()}`);
  });
  return formattedStrings.join('\n\n');
}
