"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("../formatter");
/**
 * X.681 clause 9.3
 * ```
 * CLASS { fieldSpec[0], ..., fieldSpec[n-1] } WITH SYNTAX { syntax[0] ... syntax[n-1] }
 * ```
 */
class ObjectClassDefinition {
    constructor(fieldSpecs, syntaxList) {
        this.fieldSpecs = fieldSpecs;
        this.syntaxList = syntaxList;
    }
    toString() {
        const arrToString = [
            'CLASS {',
            formatter_1.indent(this.fieldSpecs.map((fieldSpec) => fieldSpec.toString()).join(',\n')),
            '}',
        ];
        if (this.syntaxList.length > 0) {
            arrToString.push('WITH SYNTAX {');
            arrToString.push(formatter_1.indent(this.syntaxList.map((syntax) => syntax.toString()).join('\n')));
            arrToString.push('}');
        }
        return arrToString.join('\n');
    }
}
exports.ObjectClassDefinition = ObjectClassDefinition;
// | VariableTypeFieldSpec // VariableTypeValue[Set]FieldSpec
// | ObjectFieldSpec // Object[Set]FieldSpec
//# sourceMappingURL=objectClass.js.map