/**
 * This module defines some interfaces and functions for 3GPP numbering
 */
/**
 * Specification version numbering
 */
export interface IVersion {
    major: number;
    technical: number;
    editorial: number;
}
/**
 * Find series of a given specification numbering
 * @param specNumStr Sepcification numbering, e.g. `38.331`
 * @returns Series of specification, e.g. `38`
 */
export declare function seriesFromString(specNumStr: string): string;
/**
 * Convert version string into `IVersion`
 * @param versionStr Version string
 *
 * See 3GPP Version Numbering Scheme
 * http://www.3gpp.org/specifications/specification-numbering/81-version-numbering-scheme
 */
export declare function versionFromString(versionStr: string): IVersion;
