import * as _ from 'lodash';

import { IDefinitions, IMsgIeDefinition, reReference } from './common';

interface IDefinitionTreeNode {
  content: IMsgIeDefinition;
  level: number;
}

/**
 * Expand references in definition of message or IE
 * @param msgIeDefinition Message or IE definition object to be expanded
 * @param definitions Collection of messages and/or IEs to be referenced
 * @param definitionsExpanded Collection of already expanded messages and/or IEs to be merged
 * @returns Returns expanded definition and collection of expanded definitions
 * `{msgIeDefinition: IMsgIeDefinition, definitionsExpanded: IDefinitions}`
 */
export function expand(msgIeDefinition: IMsgIeDefinition, definitions: IDefinitions,
                       definitionsExpanded: IDefinitions):
                       {msgIeDefinition: IMsgIeDefinition, definitionsExpanded: IDefinitions} {
  const section = msgIeDefinition.section;
  if (section in definitionsExpanded) {
    return {msgIeDefinition: definitionsExpanded[msgIeDefinition.section] as IMsgIeDefinition,
            definitionsExpanded};
  }
  const definitionsExpandedClone = _.cloneDeep(definitionsExpanded);
  const stackUnexpanded = prepareExpansionStack(msgIeDefinition, definitions, definitionsExpandedClone);
  expandStack(stackUnexpanded, definitionsExpandedClone);
  return {msgIeDefinition: definitionsExpandedClone[section] as IMsgIeDefinition,
          definitionsExpanded: definitionsExpandedClone};
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

    definitionTreeNode.content.ies.forEach((ie) => {
      const reference = getReference(ie['ie type and reference']);
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

function expandStack(stackUnexpanded: IDefinitionTreeNode[], definitionsExpanded: IDefinitions): void {
  while (stackUnexpanded.length) {
    const msgIeDefinition = _.cloneDeep(stackUnexpanded.pop().content);
    const {section, ies} = msgIeDefinition;
    // ies length may not be constant. So not using for-of
    // tslint:disable-next-line:prefer-for-of
    for (let i = ies.length - 1; i >= 0; i--) {
      const reference = getReference(ies[i]['ie type and reference']);
      if (!reference || !(reference in definitionsExpanded)) {
        continue;
      }
      const depth = ies[i].depth;
      const subIes = (definitionsExpanded[reference] as IMsgIeDefinition).ies;
      ies.splice(i + 1, 0, ...(_.cloneDeep(subIes)));
      for (let j = 0; j < subIes.length; j++) {
        ies[i + j + 1].depth += depth + 1;
      }
    }
    definitionsExpanded[section] = msgIeDefinition;
  }
}

function getReference(text: string): string {
  const matchReference = text.match(reReference);
  if (!matchReference) {
    return null;
  }
  return matchReference[0];
}
