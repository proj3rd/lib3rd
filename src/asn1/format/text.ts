import { log } from '../../utils/logging';

/**
 * Format ASN.1 in text
 * @param msgIeDefinition ASN.1 object you want to format
 */
export function format(msgIes: any[]): string {
  const formattedStrings = [];
  msgIes.forEach((msgIe) => {
    log.debug(`Formatting ${msgIe.name} in text...`);
    formattedStrings.push(`${msgIe.name} ::= ${msgIe.definition.toString()}`);
  });
  return formattedStrings.join('\n\n');
}
