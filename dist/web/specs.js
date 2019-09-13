"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ftp = require("ftp");
const numbering_1 = require("../utils/numbering");
const host = 'ftp.3gpp.org';
const baseDir = 'Specs/archive';
/**
 * Get a collection of spec documents for a given spec number
 * @param specNumStr Specificaiton number, e.g. `38.331`
 * @param cb Callback function
 * @param args Arguments for callback function
 * @param cb.specFiles[] Collection of spec files
 */
function list(specNumStr, cb, ...args) {
    const ftpClient = new ftp();
    ftpClient.on('ready', () => {
        const series = numbering_1.seriesFromString(specNumStr);
        const specDir = `${baseDir}/${series}_series/${specNumStr}`;
        ftpClient.list(specDir, (e, l) => {
            ftpClient.end();
            if (e) {
                if (cb) {
                    cb(e, null, args);
                }
                return;
            }
            const specFiles = [];
            l.forEach((el) => {
                const versionString = el.name.split('-').slice(-1)[0].split('.')[0];
                specFiles.push(Object.assign(Object.assign({}, el), { version: numbering_1.versionFromString(versionString), url: `ftp://${host}/${specDir}/${el.name}` }));
            });
            if (cb) {
                cb(null, specFiles, args);
            }
        });
    });
    ftpClient.on('error', (e) => {
        if (cb) {
            cb(e, null, args);
        }
    });
    ftpClient.connect({ host });
}
exports.list = list;
