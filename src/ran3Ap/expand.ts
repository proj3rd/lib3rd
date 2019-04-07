import { IDefinitions, IMsgIeDefinition } from './interfaces';

const reReference = /\d+(\.\d+)+/;

/**
 *
 * @param msgIeDefinition
 * @param definitions
 * @param definitionsExpanded
 */
export function expand(msgIeDefinition: IMsgIeDefinition, definitions: IDefinitions,
                       definitionsExpanded: IDefinitions): IMsgIeDefinition {
  if (msgIeDefinition.section in definitionsExpanded) {
    return definitionsExpanded[msgIeDefinition.section] as IMsgIeDefinition;
  }
  const stack = [msgIeDefinition];
  // Stack length may not be constant. So not using for-of
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < stack.length; i++) {
    const elem = stack[i];
    elem.definition.forEach((definitionElem) => {
      const reference = getReference(definitionElem['ie type and reference']);
      if (!reference || (reference in definitionsExpanded) || !(reference in definitions)) {
        return;
      }
      const index = stack.findIndex((stackElem) => {
        return stackElem.section === reference;
      });
      if (index !== -1) {
        return;
      }
      stack.push(definitions[reference] as IMsgIeDefinition);
    });
  }
}

function getReference(text: string): string {
  const matchReference = text.match(reReference);
  if (!matchReference) {
    return null;
  }
  return matchReference[0];
}
