export declare class Reference {
    name: string;
    parameterized: boolean;
    referenceTag: boolean;
    constructor(name: string, parameterized?: boolean);
    static fromObject(obj: unknown): Reference;
    toString(): string;
}
export declare type AsnSymbol = Reference;
//# sourceMappingURL=asnSymbol.d.ts.map