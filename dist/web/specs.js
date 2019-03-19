"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var ftp = require("ftp");
var numbering_1 = require("../utils/numbering");
var host = 'ftp.3gpp.org';
var baseDir = 'Specs/archive';
function list(specNumStr, cb) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var ftpClient = new ftp();
    ftpClient.on('ready', function () {
        var series = numbering_1.seriesFromString(specNumStr);
        var specDir = baseDir + "/" + series + "_series/" + specNumStr;
        ftpClient.list(specDir, function (e, l) {
            ftpClient.end();
            if (e && cb) {
                return cb(e, null, args);
            }
            var specFiles = [];
            l.forEach(function (el) {
                var versionString = el.name.split('-').slice(-1)[0].split('.')[0];
                specFiles.push(__assign({}, el, { version: numbering_1.versionFromString(versionString), url: "ftp://" + host + "/" + specDir + "/" + el.name }));
            });
            cb(null, specFiles, args);
        });
        return;
    });
    ftpClient.on('error', function (e) {
        cb(e, null, args);
    });
    ftpClient.connect({ host: host });
    return;
}
exports.list = list;
