export interface ICondition {
  condition: string;
  explanation: string;
}

export interface IInformationElement {
  name: string;
  presence: string;
  range: string;
  reference: string;
  type: string;
  description: string;
  criticality: string;
  assignedCriticality: string;
  depth: number;
}

export interface IRangeBound {
  rangeBound: string;
  explanation: string;
}

export interface IDefinition {
  sectionNumber: string;
  name: string;
  descriptionList: string[];
  direction: string;
  elementList: IInformationElement[];
  rangeBoundList: IRangeBound[];
  conditionList: ICondition[];
}
