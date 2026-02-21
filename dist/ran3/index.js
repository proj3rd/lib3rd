"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
const yargs_1 = __importDefault(require("yargs"));
const definitions_1 = require("./classes/definitions");
if (require.main === module) {
    // eslint-disable-next-line no-unused-vars
    const { argv } = yargs_1.default.command({
        command: "deserialize <file>",
        handler: (args) => {
            const { file } = args;
            if (typeof file !== "string") {
                throw Error();
            }
            const serialized = node_fs_1.readFileSync(file, "utf8");
            const obj = JSON.parse(serialized);
            definitions_1.Definitions.fromObject(obj);
        },
    });
}
//# sourceMappingURL=index.js.map