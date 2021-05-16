/**
 * X.681 clause 7.1
 */
export declare class ObjectClassReference {
    objectClassReference: string;
    objectClassReferenceTag: boolean;
    constructor(objectClassReference: string);
    static fromObject(obj: unknown): ObjectClassReference;
    toString(): string;
}
//# sourceMappingURL=objectClassReference.d.ts.map