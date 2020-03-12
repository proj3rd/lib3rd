import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { ObjectClass } from './objectClass';
import { ObjectIdentifierValue } from './objectIdentifierValue';
import { Parameter } from './parameter';

export class SingleValue extends Base {
  public value: BuiltinValue;

  constructor(value: BuiltinValue) {
    super();

    this.value = value;
  }

  public depthMax(): number {
    return 0;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[],
                classDefinition?: ObjectClass): SingleValue {
    if (this.value instanceof ObjectIdentifierValue && classDefinition) {
      // TODO: "Instantiate" Class
      /**
       * Class definition (JSON-like)
       * "class name": {
       *   "fieldSpecs": [
       *     {
       *       "reference": "&referenceName",
       *       "type": {
       *         "typeReference": "referenceName",
       *         "constraints": [],
       *       },
       *       "unique": boolean,
       *       "optional": boolean,
       *       "default": defaultValue,
       *     }
       *   ],
       *   "withSyntaxSpec": {
       *     "syntaxList": [
       *       "literal": "e.g. ID",
       *       "primitiveFieldName": "e.g. &id",
       *       "optional": false
       *     ]
       *   }
       * }
       */
      this.value.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList, classDefinition);
    }
    return this;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth?: number): [number, number] {
    // Do nothing
    return [row, col];
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): void {
    // Do nothing
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): SingleValue {
    // Do nothing
    return this;
  }

  public toString(): string {
    return this.value.toString();
  }
}
