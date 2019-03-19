import * as ftp from 'ftp';
import { IVersion } from '../utils/numbering';
interface ISpecFile extends ftp.ListingElement {
    version: IVersion;
    url: string;
}
export declare function list(specNumStr: string, cb: (e: Error, specFiles: ISpecFile[], ...args: any[]) => void, ...args: any[]): void;
export {};
