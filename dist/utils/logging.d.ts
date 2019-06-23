import * as loglevel from 'loglevel';
/**
 * It enables logging with loglevel package
 * Other modules can log after importing this module
 * ```
 * import { log } from 'logging';
 * log.debug('Debug message');
 * ```
 * You can configure environment variable `loglevel`
 * - Windows
 * ```
 * > set loglevel=debug && node ...
 * ```
 * - Linux/Mac
 * ```
 * $ loglevel=debug node ...
 * ```
 *
 */
export declare const log: loglevel.RootLogger;
