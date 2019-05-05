import { log } from '../../utils/logging';

/**
 * Format ASN.1 in text
 * @param msgIes Collection of ASN.1 objects you want to format
 * @returns ASN.1 notation in string
 */
export function format(msgIes: any[]): string {
  const formattedStrings = [];
  msgIes.forEach((msgIe) => {
    log.debug(`Formatting ${msgIe.name} in text...`);
    formattedStrings.push(`${msgIe.name} ::= ${msgIe.definition.toString()}`);
  });
  return formattedStrings.join('\n\n');
}
