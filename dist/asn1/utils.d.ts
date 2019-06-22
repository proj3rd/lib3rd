import { Base } from './classes/base';
export declare function getContextName(ctx: any): string;
export declare function getLogWithAsn1(ctx: any, prefix?: string, postfix?: string, length?: number): string;
export declare function findConstantValue(constant: string, moduleName: string, asn1Pool: any): string;
export declare function findDefinition(typeName: string, moduleName: string, asn1Pool: any): Base;
export declare function sanitizeAsn1(asn1: string): string;
