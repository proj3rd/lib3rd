"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const common_1 = require("./common");
/**
 * Expand references in definition of message or IE
 * @param msgIeDefinition Message or IE definition object to be expanded
 * @param definitions Collection of messages and/or IEs to be referenced
 * @param definitionsExpanded Collection of already expanded messages and/or IEs to be merged
 * @returns Returns expanded definition and collection of expanded definitions
 * `{msgIeDefinition: IMsgIeDefinition, definitionsExpanded: IDefinitions}`
 */
function expand(msgIeDefinition, definitions, definitionsExpanded) {
    const section = msgIeDefinition.section;
    if (section in definitionsExpanded) {
        return { msgIeDefinition: definitionsExpanded[msgIeDefinition.section],
            definitionsExpanded };
    }
    const definitionsExpandedClone = lodash_1.cloneDeep(definitionsExpanded);
    const stackUnexpanded = prepareExpansionStack(msgIeDefinition, definitions, definitionsExpandedClone);
    expandStack(stackUnexpanded, definitionsExpandedClone);
    return { msgIeDefinition: definitionsExpandedClone[section],
        definitionsExpanded: definitionsExpandedClone };
}
exports.expand = expand;
function prepareExpansionStack(msgIeDefinition, definitions, definitionsExpanded) {
    const stackUntraversed = [{ content: msgIeDefinition, level: 0 }];
    const stackTraversed = [];
    // Stack length may not be constant. So not using for-of
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < stackUntraversed.length; i++) {
        const definitionTreeNode = stackUntraversed[i];
        const level = definitionTreeNode.level;
        const indexTraversed = stackTraversed.findIndex((elem) => elem.content.section === definitionTreeNode.content.section);
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
            stackUntraversed.push({ content: definitions[reference], level: level + 1 });
        });
    }
    return stackTraversed;
}
function expandStack(stackUnexpanded, definitionsExpanded) {
    while (stackUnexpanded.length) {
        const msgIeDefinition = lodash_1.cloneDeep(stackUnexpanded.pop().content);
        const { section, ies } = msgIeDefinition;
        // ies length may not be constant. So not using for-of
        // tslint:disable-next-line:prefer-for-of
        for (let i = ies.length - 1; i >= 0; i--) {
            const reference = getReference(ies[i]['ie type and reference']);
            if (!reference || !(reference in definitionsExpanded)) {
                continue;
            }
            const depth = ies[i].depth;
            const subIes = lodash_1.cloneDeep(definitionsExpanded[reference].ies);
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
function getReference(text) {
    const matchReference = text.match(common_1.reReference);
    if (!matchReference) {
        return null;
    }
    return matchReference[0];
}
function hasSingleRoot(ies) {
    if (ies.length === 1) {
        return true;
    }
    const depthMin = ies[0].depth;
    const depthCount = ies.filter((ie) => ie.depth === depthMin).length;
    return depthCount === 1;
}
