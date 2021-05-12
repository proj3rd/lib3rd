import { cloneDeep, isEqual } from 'lodash';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { ElementSetSpec } from '../types/elementSetSpec';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';
import { Unions } from './unions';

export type ElementSetSpecList = Array<ElementSetSpec | ExtensionMarker>;

export class SubtypeConstraint {
  public elementSetSpecList: ElementSetSpecList;

  public subtypeConstraintTag = true;

  constructor(elementSetSpecList: ElementSetSpecList) {
    this.elementSetSpecList = elementSetSpecList;
  }

  public static fromObject(obj: unknown): SubtypeConstraint {
    const { elementSetSpecList: elementSetSpecListObject, subtypeConstraintTag } = obj as SubtypeConstraint;
    if (!subtypeConstraintTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(elementSetSpecListObject instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const elementSetSpecList = elementSetSpecListObject.map((item) => {
      const { unionsTag } = item as Unions;
      if (unionsTag) {
        return Unions.fromObject(item);
      }
      const { extensionMarkerTag } = item as ExtensionMarker;
      if (extensionMarkerTag) {
        return ExtensionMarker.getInstance();
      }
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    });
    return new SubtypeConstraint(elementSetSpecList);
  }

  /**
   * Expand `elementSetSpecList` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): SubtypeConstraint {
    const expandedElementSetSpecList = this.elementSetSpecList.map(
      (elementSetSpec) => {
        if (elementSetSpec instanceof ExtensionMarker) {
          return elementSetSpec;
        }
        const expandedElementSetSpec = cloneDeep(elementSetSpec).expand(
          modules,
          parameterMappings,
        );
        if (isEqual(expandedElementSetSpec, elementSetSpec)) {
          return elementSetSpec;
        }
        return expandedElementSetSpec;
      },
    );
    if (!isEqual(expandedElementSetSpecList, this.elementSetSpecList)) {
      this.elementSetSpecList = expandedElementSetSpecList;
    }
    return this;
  }

  public toString(): string {
    return this.elementSetSpecList
      .map((elementSetSpec) => elementSetSpec.toString())
      .join(', ');
  }
}
