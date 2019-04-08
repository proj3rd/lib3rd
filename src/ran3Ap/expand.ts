import { IDefinitions, IMsgIeDefinition } from './interfaces';

interface IDefinitionTreeNode {
  content: IMsgIeDefinition;
  level: number;
}

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
                               definitionsExpanded: IDefinitions): IDefinitionTreeNode[] {
  const stackUntraversed: IDefinitionTreeNode[] = [{content: msgIeDefinition, level: 0}];
  const stackTraversed: IDefinitionTreeNode[] = [];
  // Stack length may not be constant. So not using for-of
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < stackUntraversed.length; i++) {
    const definitionTreeNode = stackUntraversed[i];
    const level = definitionTreeNode.level;

    const indexTraversed = stackTraversed.findIndex((elem) =>
      elem.content.section === definitionTreeNode.content.section);
    if (indexTraversed !== -1) {
      if (stackTraversed[indexTraversed].level >= level) {
        continue;
      }
      stackTraversed.splice(indexTraversed, 1);
    }
    stackTraversed.push(definitionTreeNode);

    definitionTreeNode.content.definition.forEach((definitionElem) => {
      const reference = getReference(definitionElem['ie type and reference']);
      if (!reference || (reference in definitionsExpanded) || !(reference in definitions)) {
        return;
      }
      const indexSubIeTraversed = stackTraversed.findIndex((elem) => elem.content.section === reference);
      if (indexSubIeTraversed !== -1) {
        if (stackTraversed[indexSubIeTraversed].level >= level + 1) {
          return;
        }
        stackTraversed.splice(indexSubIeTraversed, 1);
      }
      stackUntraversed.push({content: definitions[reference] as IMsgIeDefinition, level: level + 1});
    });
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
