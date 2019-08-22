"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loglevel = require("loglevel");
try {
    loglevel.setLevel(process.env.loglevel);
}
catch (e) {
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
exports.log = loglevel;
