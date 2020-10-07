import { cloneDeep, isEqual } from 'lodash';
import { IParameterMapping } from '../expander';
import { _ElementSetSpec } from '../types';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';

export type ElementSetSpecList = Array<_ElementSetSpec | ExtensionMarker>;

export class SubtypeConstraint {
  public elementSetSpecList: ElementSetSpecList;

  private subtypeConstraintTag: undefined;

  constructor(elementSetSpecList: ElementSetSpecList) {
    this.elementSetSpecList = elementSetSpecList;
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
