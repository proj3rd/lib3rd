import { Base } from './base';
import { WithComponents } from './withComponents';
export declare class DefinedType extends Base {
    moduleReference: string;
    typeReference: string;
    withComponents: WithComponents;
    setConstraint(constraint: any): DefinedType;
    expand(): DefinedType;
    depthMax(): number;
    toString(): string;
}
