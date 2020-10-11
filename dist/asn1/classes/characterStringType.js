"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const spreadsheet_2 = require("../formatter/spreadsheet");
const componentRelationConstraint_1 = require("./componentRelationConstraint");
const contentsConstraint_1 = require("./contentsConstraint");
const extensionMarker_1 = require("./extensionMarker");
const innerTypeConstraints_1 = require("./innerTypeConstraints");
const objectSet_1 = require("./objectSet");
const sizeConstraint_1 = require("./sizeConstraint");
/**
 * X.680 clause 40
 * ```
 * characterStringTypeLiteral ( sizeConstraint )?
 * ```
 */
class CharacterStringType {
    constructor(characterStringTypeLiteral) {
        this.characterStringTypeLiteral = characterStringTypeLiteral;
    }
    expand(modules, parameterMappings) {
        if (parameterMappings.length) {
            return unimpl_1.unimpl(this, parameterMappings);
        }
        return this;
    }
    // eslint-disable-next-line class-methods-use-this
    getDepth() {
        return 0;
    }
    setConstraints(constraints) {
        if (constraints.length === 0) {
            return;
        }
        if (constraints.length > 1) {
            unimpl_1.unimpl();
            return;
        }
        const constraint = constraints[0];
        const { constraintSpec } = constraint;
        if (constraintSpec instanceof contentsConstraint_1.ContentsConstraint) {
            unimpl_1.unimpl();
            return;
        }
        if (constraintSpec instanceof innerTypeConstraints_1.InnerTypeConstraints) {
            unimpl_1.unimpl();
            return;
        }
        if (constraintSpec instanceof objectSet_1.ObjectSet) {
            unimpl_1.unimpl();
            return;
        }
        if (constraintSpec instanceof componentRelationConstraint_1.ComponentRelationConstraint) {
            unimpl_1.unimpl();
            return;
        }
        if (constraintSpec.elementSetSpecList.length !== 1) {
            unimpl_1.unimpl();
            return;
        }
        const elementSetSpec = constraintSpec.elementSetSpecList[0];
        if (elementSetSpec instanceof extensionMarker_1.ExtensionMarker) {
            throw Error('Not implemented');
        }
        if (elementSetSpec.intersectionsList.length > 1) {
            unimpl_1.unimpl();
            return;
        }
        const intersections = elementSetSpec.intersectionsList[0];
        if (intersections.length !== 1) {
            unimpl_1.unimpl();
            return;
        }
        const intersectionElements = intersections[0];
        if (intersectionElements instanceof sizeConstraint_1.SizeConstraint) {
            this.constraint = constraint;
        }
        else {
            unimpl_1.unimpl();
        }
    }
    toSpreadsheet(worksheet, row, depth) {
        if (this.reference && !row[spreadsheet_2.HEADER_REFERENCE]) {
            // eslint-disable-next-line no-param-reassign
            row[spreadsheet_2.HEADER_REFERENCE] = this.reference;
        }
        // eslint-disable-next-line no-param-reassign
        row[spreadsheet_2.HEADER_TYPE] = this.toString();
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    toString() {
        if (this.constraint === undefined) {
            return this.characterStringTypeLiteral;
        }
        return `${this.characterStringTypeLiteral} ${this.constraint.toString()}`;
    }
}
exports.CharacterStringType = CharacterStringType;
//# sourceMappingURL=characterStringType.js.map