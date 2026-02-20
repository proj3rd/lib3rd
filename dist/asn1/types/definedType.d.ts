import { ExternalTypeReference } from '../classes/externalTypeReference';
import { ParameterizedType } from '../classes/parameterizedType';
import { TypeReference } from '../classes/typeReference';
export declare type DefinedType = ExternalTypeReference | TypeReference | ParameterizedType;
export declare function DefinedTypeFromObject(obj: unknown): DefinedType;
//# sourceMappingURL=definedType.d.ts.map