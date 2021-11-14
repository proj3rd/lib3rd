export interface IInformationElement {
  iei: string;
  informationElement: string;
  typeReference: string;
  presence: string;
  format: string;
  length: string;
  depth: number;
}

export interface IDefinition {
  sectionNumber: string;
  name: string;
  descriptionList: string[];
  messageType: string;
  significance: string;
  direction: string;
  elementList: IInformationElement[];
  // TODO: octet structure for IE;
  // TODO: CSN.1 structure
}
