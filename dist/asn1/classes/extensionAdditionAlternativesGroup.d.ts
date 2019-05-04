import { Base } from './base';
import { NamedType } from './namedType';
export declare class ExtensionAdditionAlternativesGroup extends Base {
    alternativeTypeList: NamedType[];
    constructor(alternativeTypeList: any, versionNumber: any);
    setConstraint(constraint: any): ExtensionAdditionAlternativesGroup;
    expand(): ExtensionAdditionAlternativesGroup;
    toString(): string;
}
