"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleDefinition = void 0;
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const formatter_1 = require("../formatter");
const assignment_1 = require("../types/assignment");
const exports_1 = require("../types/exports");
const extensionDefault_1 = require("../types/extensionDefault");
const tagDefault_1 = require("../types/tagDefault");
const definitiveIdentification_1 = require("./definitiveIdentification");
const imports_1 = require("./imports");
const valueAssignment_1 = require("./valueAssignment");
class ModuleDefinition {
    constructor(name, definitiveIdentification, tagDefault, extensionDefault, moduleBody) {
        this.moduleDefinitionTag = true;
        this.name = name;
        this.definitiveIdentification = definitiveIdentification;
        this.tagDefault = tagDefault;
        this.extensionDefault = extensionDefault;
        const { exports, imports, assignments } = moduleBody;
        this.exports = exports;
        this.imports = imports;
        this.assignments = assignments;
    }
    static fromObject(obj) {
        const { name: nameObject, definitiveIdentification: definitiveIdentificationObject, tagDefault: tagDefaultObject, extensionDefault: extensionDefaultObject, exports: exportsObject, imports: importsObject, assignments: assignmentsObject, moduleDefinitionTag, } = obj;
        if (!moduleDefinitionTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof nameObject !== 'string' || !nameObject) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!(assignmentsObject instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const definitiveIdentification = definitiveIdentification_1.DefinitiveIdentification.fromObject(definitiveIdentificationObject);
        const tagDefault = tagDefault_1.TagDefaultFromObject(tagDefaultObject);
        const extensionDefault = extensionDefault_1.ExtensionDefaultFromObject(extensionDefaultObject);
        const exports = exportsObject ? exports_1.ExportsFromObject(exportsObject) : null;
        const imports = importsObject ? imports_1.Imports.fromObject(importsObject) : null;
        const assignments = assignmentsObject.map((item) => assignment_1.AssignmentFromObject(item));
        return new ModuleDefinition(nameObject, definitiveIdentification, tagDefault, extensionDefault, { exports, imports, assignments });
    }
    findAssignment(name) {
        return this.assignments.find((assignment) => assignment.name === name);
    }
    toSpreadsheet(workbook) {
        const wb = spreadsheet_1.getWorkbook(workbook);
        this.assignments.forEach((assignment) => {
            if (assignment instanceof valueAssignment_1.ValueAssignment) {
                return;
            }
            assignment.toSpreadsheet(wb);
        });
        return wb;
    }
    toString() {
        const headerString = [
            this.name,
            this.definitiveIdentification.toString(),
            `DEFINITIONS ${this.tagDefault} ${this.extensionDefault} ::=`,
            'BEGIN',
        ].join('\n');
        const arrToString = [headerString];
        if (this.exports !== null) {
            return unimpl_1.unimpl();
        }
        if (this.imports !== null) {
            arrToString.push(formatter_1.indent(this.imports.toString()));
        }
        const assignmentsString = this.assignments
            .map((assignment) => assignment.toString())
            .join('\n\n');
        arrToString.push(formatter_1.indent(assignmentsString));
        arrToString.push('END');
        return arrToString.join('\n\n');
    }
}
exports.ModuleDefinition = ModuleDefinition;
//# sourceMappingURL=moduleDefinition.js.map