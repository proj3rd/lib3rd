"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constraint_1 = require("./constraint");
class TableConstraint extends constraint_1.Constraint {
    constructor(moduleReference, objectSetReference, atNotations = []) {
        super();
        this.moduleReference = moduleReference;
        this.objectSetReference = objectSetReference;
        this.atNotations = atNotations;
    }
    setConstraint(constraint) {
        throw Error('Constraint cannot be set to constraint');
    }
    expand(asn1Pool, moduleName) {
        throw Error('Constraint cannot be expanded');
    }
    depthMax() {
        throw Error('Depth of constraint is not valid');
    }
    replaceParameters(parameterMapping) {
        throw Error('Parameters of constraint cannot be replaced');
    }
    toString() {
        const definedObjectSet = `${this.moduleReference ? this.moduleReference + '.' : ''}${this.objectSetReference}`;
        const atNotations = !this.atNotations.length ? '' : ` ({${this.atNotations.join(', ')}})`;
        return `{${definedObjectSet}}${atNotations}`;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        throw Error('fillWorksheet() of Constraint cannot be called independently');
    }
}
exports.TableConstraint = TableConstraint;
