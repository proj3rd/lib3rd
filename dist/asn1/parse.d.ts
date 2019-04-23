import { IModules } from './visitors/modules';
/**
 * Parse ASN.1
 * @param text Text only containing ASN.1 encoded in UTF-8
 * @returns Collection of ASN.1 module definitions. Module name is key
 */
export declare function parse(text: string): IModules;
