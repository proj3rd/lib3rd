"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var common_1 = require("./common");
/**
 * Expand references in definition of message or IE
 * @param msgIeDefinition Message or IE definition object to be expanded
 * @param definitions Collection of messages and/or IEs to be referenced
 * @param definitionsExpanded Collection of already expanded messages and/or IEs to be merged
 * @returns Returns expanded definition and collection of expanded definitions
 * `{msgIeDefinition: IMsgIeDefinition, definitionsExpanded: IDefinitions}`
 */
function expand(msgIeDefinition, definitions, definitionsExpanded) {
    var section = msgIeDefinition.section;
    if (section in definitionsExpanded) {
        return { msgIeDefinition: definitionsExpanded[msgIeDefinition.section],
            definitionsExpanded: definitionsExpanded };
    }
    var definitionsExpandedClone = lodash_1.cloneDeep(definitionsExpanded);
    var stackUnexpanded = prepareExpansionStack(msgIeDefinition, definitions, definitionsExpandedClone);
    expandStack(stackUnexpanded, definitionsExpandedClone);
    return { msgIeDefinition: definitionsExpandedClone[section],
        definitionsExpanded: definitionsExpandedClone };
}
exports.expand = expand;
function prepareExpansionStack(msgIeDefinition, definitions, definitionsExpanded) {
    var stackUntraversed = [{ content: msgIeDefinition, level: 0 }];
    var stackTraversed = [];
    var _loop_1 = function (i) {
        var definitionTreeNode = stackUntraversed[i];
        var level = definitionTreeNode.level;
        var indexTraversed = stackTraversed.findIndex(function (elem) {
            return elem.content.section === definitionTreeNode.content.section;
        });
        if (indexTraversed !== -1) {
            if (stackTraversed[indexTraversed].level >= level) {
                return "continue";
            }
            stackTraversed.splice(indexTraversed, 1);
        }
        stackTraversed.push(definitionTreeNode);
        definitionTreeNode.content.ies.forEach(function (ie) {
            var reference = getReference(ie['ie type and reference']);
            if (!reference || (reference in definitionsExpanded) || !(reference in definitions)) {
                return;
            }
            var indexSubIeTraversed = stackTraversed.findIndex(function (elem) { return elem.content.section === reference; });
            if (indexSubIeTraversed !== -1) {
                if (stackTraversed[indexSubIeTraversed].level >= level + 1) {
                    return;
                }
                stackTraversed.splice(indexSubIeTraversed, 1);
            }
            stackUntraversed.push({ content: definitions[reference], level: level + 1 });
        });
    };
    // Stack length may not be constant. So not using for-of
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < stackUntraversed.length; i++) {
        _loop_1(i);
    }
    return stackTraversed;
}
function expandStack(stackUnexpanded, definitionsExpanded) {
    while (stackUnexpanded.length) {
        var msgIeDefinition = lodash_1.cloneDeep(stackUnexpanded.pop().content);
        var section = msgIeDefinition.section, ies = msgIeDefinition.ies;
        // ies length may not be constant. So not using for-of
        // tslint:disable-next-line:prefer-for-of
        for (var i = ies.length - 1; i >= 0; i--) {
            var reference = getReference(ies[i]['ie type and reference']);
            if (!reference || !(reference in definitionsExpanded)) {
                continue;
            }
            var depth = ies[i].depth;
            var subIes = lodash_1.cloneDeep(definitionsExpanded[reference].ies);
            var isSingleRooted = hasSingleRoot(subIes);
            var numIesToRemove = isSingleRooted ? 1 : 0;
            var offsetSingleRoot = isSingleRooted ? 0 : 1;
            if (isSingleRooted) {
                var rootIeNew = subIes[0];
                var rootIeOld = ies[i + offsetSingleRoot];
                rootIeNew['ie/group name'] = rootIeOld['ie/group name'];
                rootIeNew.presence = rootIeOld.presence;
                if (rootIeOld['semantics description']) {
                    rootIeNew['semantics description'] =
                        rootIeOld['semantics description'] + '\n\n' + rootIeNew['semantics description'];
                }
            }
            ies.splice.apply(ies, [i + offsetSingleRoot, numIesToRemove].concat(subIes));
            for (var j = 0; j < subIes.length; j++) {
                ies[i + j + offsetSingleRoot].depth += depth + offsetSingleRoot;
            }
        }
        definitionsExpanded[section] = msgIeDefinition;
    }
}
function getReference(text) {
    var matchReference = text.match(common_1.reReference);
    if (!matchReference) {
        return null;
    }
    return matchReference[0];
}
function hasSingleRoot(ies) {
    if (ies.length === 1) {
        return true;
    }
    var depthMin = ies[0].depth;
    var depthCount = ies.filter(function (ie) { return ie.depth === depthMin; }).length;
    return depthCount === 1;
}
