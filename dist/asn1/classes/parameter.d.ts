import { ParamGovernor } from '../types/paramGovernor';
export declare class Parameter {
    dummyReference: string;
    paramGovernor: ParamGovernor | undefined;
    parameterTag: boolean;
    constructor(dummyReference: string, paramGovernor: ParamGovernor | undefined);
    static fromObject(obj: unknown): Parameter;
    toString(): string;
}
//# sourceMappingURL=parameter.d.ts.map