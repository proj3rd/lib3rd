"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("../utils/logging");
function getLogWithAsn1(ctx, prefix = '', postfix = '', length = 80) {
    const asn1Length = length - prefix.length - postfix.length;
    return [prefix, ctx.text.substring(0, asn1Length), postfix].join(' ').trim();
}
exports.getLogWithAsn1 = getLogWithAsn1;
function findConstantValue(constant, moduleName, asn1Pool) {
    if (moduleName in asn1Pool) {
        if (constant in asn1Pool[moduleName].constants) {
            return asn1Pool[moduleName].constants[constant];
        }
        if (constant in asn1Pool[moduleName].imports) {
            const importedModuleName = asn1Pool[moduleName].imports[constant];
            if (importedModuleName in asn1Pool) {
                const importedModule = asn1Pool[importedModuleName];
                if (constant in importedModule.constants) {
                    return importedModule.constants[constant];
                }
            }
        }
    }
    logging_1.log.warn(`Cannot find a reference ${constant} in a module ${moduleName}`);
    return undefined;
}
exports.findConstantValue = findConstantValue;
function findDefinition(typeName, moduleName, asn1Pool) {
    if (moduleName in asn1Pool) {
        if (typeName in asn1Pool[moduleName].assignments) {
            return asn1Pool[moduleName].assignments[typeName];
        }
        if (typeName in asn1Pool[moduleName].imports) {
            const importedModuleName = asn1Pool[moduleName].imports[typeName];
            if (importedModuleName in asn1Pool) {
                const importedModule = asn1Pool[importedModuleName];
                if (typeName in importedModule.assignments) {
                    return importedModule.assignments[typeName];
                }
            }
        }
    }
    logging_1.log.warn(`Cannot find a reference ${typeName} in a module ${moduleName}`);
    return undefined;
}
exports.findDefinition = findDefinition;
function sanitizeAsn1(asn1) {
    // Removes comments which are not a Need tag neither a Cond tag
    // Gives one space before a Need tag and a Cond tag
    return asn1.replace(/--(?!.*(Need|Cond)).*$/gm, '')
        .replace(/(--\s*?(Need|Cond).*?)$/gm, ' $1')
        .replace(/,\.\.\./gm, ', ...');
}
exports.sanitizeAsn1 = sanitizeAsn1;
