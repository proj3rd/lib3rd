import { ICondition } from '../types';

export class Conditions {
  public conditionList: ICondition[];

  constructor(conditionList: ICondition[]) {
    this.conditionList = conditionList;
  }
}
