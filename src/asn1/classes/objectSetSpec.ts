import * as colors from 'colors';
import { isEqual, uniqWith } from 'lodash';
import { IFormatConfig, IIe } from '../format/xlsx';
import { findDefinition } from '../utils';
import { IModules } from '../visitors/modules';
import { Unions } from '../visitors/unions';
import { AsnType } from './asnType';
import { Base, IConstantAndModule } from './base';
import { Comma } from './comma';
import { DefinedType } from './definedType';
import { ExtensionMarker } from './extensionMarker';
import { NamedType } from './namedType';
import { ObjectClass } from './objectClass';
import { ObjectClassField } from './objectClassField';
import { ObjectIdentifierValue } from './objectIdentifierValue';
import { ObjectSet } from './objectSet';
import { Parameter } from './parameter';
import { Sequence } from './sequence';
import { SingleValue } from './singleValue';
import { UnionMark } from './unionMark';

interface IObjectClass {
  reference: {
    moduleReference: string,
    objectClassReference: string,
  };
  type: AsnType | ObjectClass | ObjectSet;
}

export class ObjectSetSpec extends Base {
  public objectSetSpec: Unions;
  public instantiatedMembers: Array<Sequence | ExtensionMarker>;

  constructor(objectSetSpec: Unions) {
    super();

    this.objectSetSpec = objectSetSpec;
  }

  public depthMax(): number {
    let depthMax = 0;
    this.objectSetSpec.forEach((item) => {
      if (item instanceof ExtensionMarker) {
        depthMax = Math.max(depthMax, item.depthMax() + 1);
      }
    });
    return depthMax;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList: Parameter[] = [],
                classDefinition?: ObjectClass): ObjectSetSpec {
    /**
     * TODO: Replace each objectSetSpec with ObjectClass with specified value
     */
    if (this.instantiatedMembers) {
      this.instantiatedMembers.forEach((member) => {
        member.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
      });
    } else {
      this.objectSetSpec.forEach((item) => {
        if (item instanceof SingleValue) {
          item.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList, classDefinition);
        }
      });
    }
    return this;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): [number, number] {
    // TODO
    this.objectSetSpec.forEach((item) => {
      // TODO
    });
    return [row, col];
  }

  public instantiate(template: Sequence, asn1Pool: IModules): ObjectSetSpec {
    console.log(colors.blue(__filename), 'instantiate()');
    console.log(colors.yellow('Class template'));
    console.log(JSON.stringify(template, null, 2));
    const objectClasses: IObjectClass[] = uniqWith(
      template.items.map((item) => {
        const {type} = item;
        if (!(type instanceof ObjectClassField)) {
          return;
        }
        const {moduleReference, objectClassReference} = type;
        return {reference: {moduleReference, objectClassReference}};
      }).filter((item) => item !== undefined),
      isEqual,
    );
    objectClasses.forEach((objectClass) => {
      const {moduleReference, objectClassReference} = objectClass.reference;
      objectClass.type = findDefinition(objectClassReference, this.getModuleNameToPass(moduleReference),
                                   asn1Pool);
    });
    console.log(colors.yellow('ObjectClasses'));
    console.log(JSON.stringify(objectClasses, null, 2));
    template.items.forEach((item) => {
      const {type} = item;
      if (!(type instanceof ObjectClassField)) {
        return;
      }
      const objectClass = objectClasses.find((value) => {
        return value.reference.moduleReference === type.moduleReference &&
               value.reference.objectClassReference === type.objectClassReference;
      });
      if (!objectClass || !(objectClass.type instanceof ObjectClass)) {
        return;
      }
      const {fieldName} = type;
      const fieldSpec = objectClass.type.fieldSpecs.find((value) => value.reference === fieldName);
      if (!fieldSpec) {
        return;
      }
      type.alias = fieldSpec.alias;
      if (fieldSpec.type instanceof DefinedType) {
        type.typeReference = fieldSpec.type.typeReference;
      }
    });
    console.log(colors.yellow('Updated template'));
    console.log(JSON.stringify(template, null, 2));
    this.instantiatedMembers = [];
    this.objectSetSpec.forEach((item, index) => {
      console.log(colors.yellow('Object Set Spec item'));
      console.log(item);
      if (!(item instanceof SingleValue)) {
        return;
      }
      if (!(item.value instanceof ObjectIdentifierValue)) {
        return;
      }
      const {objIdComponentsList} = item.value;
      const items: NamedType[] = [];
      objIdComponentsList.forEach((objIdComponent, objIdComponentIndex) => {
        const templateItem = template.items.find((value) => {
          const {type} = value;
          if (!(type instanceof ObjectClassField)) {
            return false;
          }
          return type.alias === objIdComponent;
        });
        if (templateItem) {
          const type = templateItem.type as ObjectClassField;
          const name = type.fieldName;
          const nextObjIdComponent = objIdComponentsList[objIdComponentIndex + 1] as string;
          const typeReference = type.typeReference ? type.typeReference : nextObjIdComponent;
          const value = type.typeReference ? nextObjIdComponent : null;
          const itemType = new DefinedType();
          itemType.typeReference = typeReference;
          const sequenceItem = new NamedType(name, itemType);
          sequenceItem.default = value;
          items.push(sequenceItem);
        }
      });
      const sequenceInstantiated = new Sequence(items);
      this.instantiatedMembers.push(sequenceInstantiated);
    });
    return this;
  }

  public replaceParameters(): ObjectSetSpec {
    return this;
  }

  public setConstraint(): ObjectSetSpec {
    // TODO
    return this;
  }

  public toString(): string {
    const stringArray: string[] = [];
    const stringArrayBeforeComma: string[] = [];
    const stringArrayBeforeUnion: string[] = [];
    this.objectSetSpec.forEach((item) => {
      if (item instanceof Comma) {
        stringArrayBeforeUnion.push(item.toString());
        stringArrayBeforeComma.push(stringArrayBeforeUnion.join(''));
        stringArray.push(stringArrayBeforeComma.join('\n'));
        stringArrayBeforeUnion.length = 0;
        stringArrayBeforeComma.length = 0;
      } else if (item instanceof UnionMark) {
        stringArrayBeforeUnion.push(item.toString());
        stringArrayBeforeComma.push(stringArrayBeforeUnion.join('    '));
        stringArrayBeforeUnion.length = 0;
      } else {
        stringArrayBeforeUnion.push(item.toString());
      }
    });
    if (stringArrayBeforeUnion.length) {
      stringArrayBeforeComma.push(stringArrayBeforeUnion.join('    '));
      stringArray.push(stringArrayBeforeComma.join('\n'));
    }
    return stringArray.join('\n');
  }
}
