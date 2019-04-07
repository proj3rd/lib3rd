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
    var stackUntraversed = [msgIeDefinition];
    var stackTraversed = [];
    var _loop_1 = function (i) {
        var definition = stackUntraversed[i];
        if (stackTraversed.findIndex(function (elem) { return elem.section === definition.section; }) !== -1) {
            return "continue";
        }
        definition.definition.forEach(function (definitionElem) {
            var reference = getReference(definitionElem['ie type and reference']);
            if (!reference || (reference in definitionsExpanded) || !(reference in definitions)) {
                return;
            }
            var index = stackTraversed.findIndex(function (elem) { return elem.section === reference; });
            if (index !== -1) {
                var traversedDefinition = stackTraversed.splice(index, 1)[0];
                stackTraversed.push(traversedDefinition);
                return;
            }
            stackUntraversed.push(definitions[reference]);
        });
        stackTraversed.push(definition);
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
