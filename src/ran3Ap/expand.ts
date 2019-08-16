import { cloneDeep } from 'lodash';

import { IDefinitions, IIe, IMsgIeDefinition, reReference } from './common';

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
  const definitionsExpandedClone = cloneDeep(definitionsExpanded);
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
    const msgIeDefinition = cloneDeep(stackUnexpanded.pop().content);
    const {section, ies} = msgIeDefinition;
    // ies length may not be constant. So not using for-of
    // tslint:disable-next-line:prefer-for-of
    for (let i = ies.length - 1; i >= 0; i--) {
      const reference = getReference(ies[i]['ie type and reference']);
      if (!reference || !(reference in definitionsExpanded)) {
        continue;
      }
      const depth = ies[i].depth;
      const subIes = cloneDeep((definitionsExpanded[reference] as IMsgIeDefinition).ies);
      const isSingleRooted = hasSingleRoot(subIes);
      const numIesToRemove = isSingleRooted ? 1 : 0;
      const offsetSingleRoot = isSingleRooted ? 0 : 1;
      if (isSingleRooted) {
        const rootIeNew = subIes[0];
        const rootIeOld = ies[i + offsetSingleRoot];
        rootIeNew['ie/group name'] = rootIeOld['ie/group name'];
        rootIeNew.presence = rootIeOld.presence;
        if (rootIeOld['semantics description']) {
          rootIeNew['semantics description'] =
            rootIeOld['semantics description'] + '\n\n' + rootIeNew['semantics description'];
        }
      }
      ies.splice(i + offsetSingleRoot, numIesToRemove, ...subIes);
      for (let j = 0; j < subIes.length; j++) {
        ies[i + j + offsetSingleRoot].depth += depth + offsetSingleRoot;
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

function hasSingleRoot(ies: IIe[]): boolean {
  if (ies.length === 1) {
    return true;
  }
  const depthMin = ies[0].depth;
  const depthCount = ies.filter((ie) => ie.depth === depthMin).length;
  return depthCount === 1;
}
