import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { AsnType } from './classes/asnType';
import { ObjectClass } from './classes/objectClass';
import { BuiltinValue } from './visitors/builtinValue';
import { IModules } from './visitors/modules';
export declare function getLogWithAsn1(ctx: ParseTree, prefix?: string, postfix?: string, length?: number): string;
export declare function findConstantValue(constant: string, moduleName: string, asn1Pool: IModules): BuiltinValue;
export declare function findDefinition(typeName: string, moduleName: string, asn1Pool: IModules): AsnType | ObjectClass;
export declare function sanitizeAsn1(asn1: string): string;
