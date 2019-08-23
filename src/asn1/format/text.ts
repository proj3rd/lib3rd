import { log } from '../../utils/logging';

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
    const parameterList: string[] = msgIe.definition.parameterList;
    const parameterString = parameterList ? ` { ${parameterList.join(', ')} }` : '';
    formattedStrings.push(`${msgIe.name}${parameterString} ::= ${msgIe.definition.toString()}`);
  });
  return formattedStrings.join('\n\n');
}
