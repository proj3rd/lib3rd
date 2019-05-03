import { Base } from './base';
export declare class ExtensionAdditionGroup extends Base {
    componentTypeList: any[];
    constructor(alternativeTypeList: any, versionNumber: any);
    setConstraint(constraint: any): ExtensionAdditionGroup;
    expand(): ExtensionAdditionGroup;
    toString(depth?: number): string;
}
