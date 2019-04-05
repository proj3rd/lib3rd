import { IDefinitions } from './interfaces';
/**
 * Parse RAN3 AP messages and IEs
 * @param html RAN3 AP document in HTML format encoded in UTF-8
 * @returns Collection of RAN3 AP messages and IEs
 */
export declare function parse(html: string): IDefinitions;
