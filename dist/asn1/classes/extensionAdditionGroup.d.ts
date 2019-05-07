import { Base } from './base';
import { NamedType } from './namedType';
export declare class ExtensionAdditionGroup extends Base {
    componentTypeList: NamedType[];
    constructor(alternativeTypeList: any, versionNumber: any);
    setConstraint(constraint: any): ExtensionAdditionGroup;
    expand(): ExtensionAdditionGroup;
    depthMax(): number;
    toString(): string;
}
