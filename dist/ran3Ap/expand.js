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
    var stack = [msgIeDefinition];
    // Stack length may not be constant. So not using for-of
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < stack.length; i++) {
        var elem = stack[i];
        elem.definition.forEach(function (definitionElem) {
            var reference = getReference(definitionElem['ie type and reference']);
            if (!reference || (reference in definitionsExpanded) || !(reference in definitions)) {
                return;
            }
            var index = stack.findIndex(function (stackElem) {
                return stackElem.section === reference;
            });
            if (index !== -1) {
                return;
            }
            stack.push(definitions[reference]);
        });
    }
}
exports.expand = expand;
function getReference(text) {
    var matchReference = text.match(reReference);
    if (!matchReference) {
        return null;
    }
    return matchReference[0];
}
