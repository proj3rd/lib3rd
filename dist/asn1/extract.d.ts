/**
 * Extract ASN.1 from text
 * @param text Text containing ASN.1 encoded in UTF-8
 * @param protocol Protocol name, case-insensitive. Only `RRC` protocol is supported currently
 * @returns Text containing only ASN.1 encoded in UTF-8
 */
export declare function extract(text: string, protocol: string): string;
