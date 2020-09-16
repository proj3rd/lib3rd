import { IDefinition, IInformationElement } from '../types';
import { Conditions } from './conditions';
import { RangeBounds } from './rangeBounds';

export class Definition {
  public sectionNumber: string;
  public name: string;
  public descriptionList: string[];
  public direction: string;
  public elementList: IInformationElement[];
  public rangeBounds: RangeBounds;
  public conditions: Conditions;

  constructor(definition: IDefinition) {
    const { sectionNumber, name, descriptionList, direction, elementList, rangeBoundList, conditionList } = definition;
    this.sectionNumber = sectionNumber;
    this.name = name;
    this.descriptionList = descriptionList;
    this.direction = direction;
    this.elementList = elementList;
    this.rangeBounds = new RangeBounds(rangeBoundList);
    this.conditions = new Conditions(conditionList);
  }
}
