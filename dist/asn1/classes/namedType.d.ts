import { Base } from './base';
export declare class NamedType extends Base {
    name: string;
    type: any;
    constructor(name: string, type: any);
    setConstraint(constraint: any): NamedType;
    expand(): NamedType;
    toString(depth?: number): string;
}
