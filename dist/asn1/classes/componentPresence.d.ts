export declare class ComponentPresence {
    name: string;
    presence: 'ABSENT' | 'PRESENT';
    componentPresenceTag: boolean;
    constructor(name: string, presence: 'ABSENT' | 'PRESENT');
    static fromObject(obj: unknown): ComponentPresence;
    toString(): string;
}
//# sourceMappingURL=componentPresence.d.ts.map