import { Base } from './base';
export declare class DefinedType extends Base {
    moduleReference: string;
    typeReference: string;
    setConstraint(constraint: any): DefinedType;
    expand(): DefinedType;
    toString(depth?: number): string;
}
