import { Base } from './base';
export declare class ExtensionAdditionAlternativesGroup extends Base {
    alternativeTypeList: any[];
    constructor(alternativeTypeList: any, versionNumber: any);
    setConstraint(constraint: any): ExtensionAdditionAlternativesGroup;
    expand(): ExtensionAdditionAlternativesGroup;
    toString(depth?: number): string;
}
