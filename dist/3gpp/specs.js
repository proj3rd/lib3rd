"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ftp = __importStar(require("basic-ftp"));
const basic_ftp_1 = require("basic-ftp");
const commander_1 = require("commander");
const path_1 = require("path");
const utils_1 = require("../utils");
const numbering_1 = require("../utils/numbering");
const basePath = '/Specs/archive';
function getVersionList(specNumbering, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const releaseList = (_a = options === null || options === void 0 ? void 0 : options.release) === null || _a === void 0 ? void 0 : _a.split(',').map((release) => Number.parseInt(release));
        const client = new ftp.Client();
        return client.access({
            host: 'ftp.3gpp.org',
            user: 'anonymous',
            password: 'anonymous',
        }).then(() => {
            // Get version list
            const series = `/${numbering_1.seriesFromSpecNumbering(specNumbering)}_series`;
            const path = path_1.join(basePath, series, specNumbering);
            console.log(path);
            return client.list(path);
        }).then((fileInfoList) => {
            // Post process FileInfo
            const versionList = fileInfoList
                .filter((fileInfo) => fileInfo.type === basic_ftp_1.FileType.File)
                .map((fileInfo) => {
                const { name, rawModifiedAt } = fileInfo;
                const modifiedAt = new Date(rawModifiedAt.split(' ')[0]);
                return { name, modifiedAt };
            });
            return versionList;
        }).then((versionList) => {
            // Filter release
            if (!releaseList || !releaseList.length) {
                return versionList;
            }
            return versionList.filter((version) => {
                const { name: filename } = version;
                const { name } = path_1.parse(filename);
                const lastIndexOfHyphen = name.lastIndexOf('-');
                const versionCharacters = name.substring(lastIndexOfHyphen + 1);
                const major = utils_1.versionFromCharacters(versionCharacters)[0];
                return releaseList.includes(major);
            });
        }).catch((reason) => {
            return Promise.reject(reason);
        }).finally(() => {
            client.close();
        });
    });
}
if (require.main === module) {
    commander_1.program
        .command('versions <specNumbering>')
        .option('-r, --release <releaseList>')
        .action((specNumbering, options) => {
        const { release } = options;
        getVersionList(specNumbering, { release }).then((versionList) => {
            versionList.forEach((version) => console.log(version));
        }).catch((reason) => {
            console.error(reason);
        });
    });
    commander_1.program.parse(process.argv);
}
//# sourceMappingURL=specs.js.map