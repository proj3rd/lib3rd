import * as ftp from 'ftp';
import { IVersion } from '../utils/numbering';
export interface ISpecFile extends ftp.ListingElement {
    version: IVersion;
    url: string;
}
/**
 * Get a collection of spec documents for a given spec number
 * @param specNumStr Specificaiton number, e.g. `38.331`
 * @param cb Callback function
 * @param args Arguments for callback function
 * @param cb.specFiles[] Collection of spec files
 */
export declare function list(specNumStr: string, cb: (e: Error, specFiles: ISpecFile[], ...args: any[]) => void, ...args: any[]): void;
