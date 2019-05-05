import { Base } from './base';
export declare class NamedType extends Base {
    name: string;
    type: any;
    optional: boolean;
    default: any;
    constructor(name: string, type: any);
    setConstraint(constraint: any): NamedType;
    expand(): NamedType;
    toString(): string;
}
