"use strict";
exports.__esModule = true;
var log = require("loglevel");
exports.log = log;
try {
    log.setLevel(process.env.loglevel);
}
catch (e) {
    log.setLevel('SILENT');
}
