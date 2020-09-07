"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const formatter_1 = require("../formatter");
const spreadsheet_1 = require("../formatter/spreadsheet");
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
    /**
     * Expand `fieldSpecs` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        if (parameterMappings.length) {
            return unimpl_1.unimpl();
        }
        this.fieldSpecs = this.fieldSpecs.map((fieldSpec) => {
            return lodash_1.cloneDeep(fieldSpec).expand(modules, parameterMappings);
        });
        return this;
    }
    getDepth() {
        const depthFieldSpecs = this.fieldSpecs.reduce((prev, curr) => {
            return Math.max(prev, curr.getDepth() + 1);
        }, 0);
        const depthSyntaxList = this.syntaxList.reduce((prev, curr) => {
            return Math.max(prev, curr.getDepth() + 1);
        }, 0);
        return Math.max(depthFieldSpecs, depthSyntaxList);
    }
    toSpreadsheet(worksheet, row, depth) {
        row[spreadsheet_1.HEADER_TYPE] = 'CLASS';
        let r = worksheet.addRow(row);
        spreadsheet_1.drawBorder(worksheet, r, depth);
        this.fieldSpecs.forEach((fieldSpec) => {
            fieldSpec.toSpreadsheet(worksheet, {}, depth + 1);
        });
        if (this.syntaxList.length > 0) {
            r = worksheet.addRow({
                [spreadsheet_1.HEADER_TYPE]: 'WITH SYNTAX',
            });
            spreadsheet_1.drawBorder(worksheet, r, depth);
            this.syntaxList.forEach((syntax) => {
                syntax.toSpreadsheet(worksheet, {}, depth + 1);
            });
        }
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