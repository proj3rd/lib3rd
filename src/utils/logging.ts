import * as loglevel from 'loglevel';

try {
  loglevel.setLevel(process.env.loglevel as loglevel.LogLevelDesc);
} catch (e) {
  loglevel.setLevel('WARN');
}

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
export const log = loglevel;
