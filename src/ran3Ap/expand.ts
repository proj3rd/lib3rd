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
  const stackTraversed = prepareExpansionStack(msgIeDefinition, definitions, definitionsExpanded);
}

function prepareExpansionStack(msgIeDefinition: IMsgIeDefinition, definitions: IDefinitions,
                               definitionsExpanded: IDefinitions): IMsgIeDefinition[] {
  const stackUntraversed = [msgIeDefinition];
  const stackTraversed: IMsgIeDefinition[] = [];
  // Stack length may not be constant. So not using for-of
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < stackUntraversed.length; i++) {
    const definition = stackUntraversed[i];
    if (stackTraversed.findIndex((elem) => elem.section === definition.section) !== -1) {
      continue;
    }
    definition.definition.forEach((definitionElem) => {
      const reference = getReference(definitionElem['ie type and reference']);
      if (!reference || (reference in definitionsExpanded) || !(reference in definitions)) {
        return;
      }
      const index = stackTraversed.findIndex((elem) => elem.section === reference);
      if (index !== -1) {
        const traversedDefinition = stackTraversed.splice(index, 1)[0];
        stackTraversed.push(traversedDefinition);
        return;
      }
      stackUntraversed.push(definitions[reference] as IMsgIeDefinition);
    });
    stackTraversed.push(definition);
  }
  return stackTraversed;
}

function getReference(text: string): string {
  const matchReference = text.match(reReference);
  if (!matchReference) {
    return null;
  }
  return matchReference[0];
}
