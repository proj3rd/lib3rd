"use strict";
exports.__esModule = true;
var reReference = /\d+(\.\d+)+/;
/**
 *
 * @param msgIeDefinition
 * @param definitions
 * @param definitionsExpanded
 */
function expand(msgIeDefinition, definitions, definitionsExpanded) {
    if (msgIeDefinition.section in definitionsExpanded) {
        return definitionsExpanded[msgIeDefinition.section];
    }
    var stackTraversed = prepareExpansionStack(msgIeDefinition, definitions, definitionsExpanded);
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
        definitionTreeNode.content.definition.forEach(function (definitionElem) {
            var reference = getReference(definitionElem['ie type and reference']);
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
function getReference(text) {
    var matchReference = text.match(reReference);
    if (!matchReference) {
        return null;
    }
    return matchReference[0];
}
