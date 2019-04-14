"use strict";
exports.__esModule = true;
var loglevel = require("loglevel");
try {
    loglevel.setLevel(process.env.loglevel);
}
catch (e) {
    loglevel.setLevel('SILENT');
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
