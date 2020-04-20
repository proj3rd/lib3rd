import { cloneDeep } from 'lodash';
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
  public value: BuiltinValue | ObjectClass;

  constructor(value: BuiltinValue) {
    super();

    this.value = value;
  }

  public depthMax(): number {
    return 0;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[],
                classDefinition?: ObjectClass): SingleValue {
    if (classDefinition) {
      this.instantiateObjectClass(classDefinition);
      (this.value as ObjectClass).expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
    }
    return this;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth?: number): [number, number] {
    // Do nothing
    return [row, col];
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): SingleValue {
    return this;
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): SingleValue {
    // Do nothing
    return this;
  }

  public toString(): string {
    return this.value.toString();
  }

  private instantiateObjectClass(classDefinition: ObjectClass): void {
    if (this.value instanceof ObjectIdentifierValue) {
      // this.value.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList/*, classDefinition*/);
      const objectClassInstance = cloneDeep(classDefinition);
      objectClassInstance.withSyntaxSpec = undefined;
      objectClassInstance.moduleName = this.moduleName;
      this.value.objIdComponentsList.forEach((component, index) => {
        if (index % 2 !== 0) {
          return;
        }
        const syntax = classDefinition.withSyntaxSpec.syntaxList.find((item) => {
          return item.literal === component;
        });
        if (syntax === undefined) {
          return;
        }
        const { primitiveFieldName: reference } = syntax;
        const fieldSpec = objectClassInstance.fieldSpecs.find((item) => item.reference === reference);
        if (fieldSpec === undefined) {
          return;
        }
        const actualValue = (this.value as ObjectIdentifierValue).objIdComponentsList[index + 1] as string;
        fieldSpec.actualValue = actualValue;
      });
      this.value = objectClassInstance;
      // TODO: "Instantiate" Class
      /**
       * "ObjectIdentifierValue" {
       *   "objIdComponentsList": [
       *     "ID",          "id-MME-UE-S1AP-ID",
       *     "CRITICALITY", "reject",
       *     "TYPE",        "MME-UE-S1AP-ID",
       *     "PRESENCE",    "mandatory"
       *   ]
       * }
       */
      /**
       * Class definition (JSON-like)
       * "ObjectClass": {
       *   "fieldSpecs": [
       *     {
       *       "reference": "&referenceName",
       *       "actualValue": "string",
       *     }
       *   ],
       *   "withSyntaxSpec": {
       *     "syntaxList": [
       *       "literal": "ID",
       *       "primitiveFieldName": "&id",
       *     ]
       *   }
       * }
       */
    }
  }
}
