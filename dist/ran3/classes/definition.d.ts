import { IDefinition, IInformationElement } from '../types';
import { Conditions } from './conditions';
import { RangeBounds } from './rangeBounds';
export declare class Definition {
    sectionNumber: string;
    name: string;
    descriptionList: string[];
    direction: string;
    elementList: IInformationElement[];
    rangeBounds: RangeBounds;
    conditions: Conditions;
    constructor(definition: IDefinition);
}
//# sourceMappingURL=definition.d.ts.map