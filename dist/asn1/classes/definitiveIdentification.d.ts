import { IDefinitiveObjIdComponent } from "../types/definitiveObjIdComponent";
export declare class DefinitiveIdentification {
    definitiveOID: IDefinitiveObjIdComponent[];
    definitiveIdentificationTag: boolean;
    constructor(definitiveOID: IDefinitiveObjIdComponent[]);
    static fromObject(obj: unknown): DefinitiveIdentification;
    toString(): string;
}
//# sourceMappingURL=definitiveIdentification.d.ts.map