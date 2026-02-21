import { readFileSync } from "node:fs";
import yargs from "yargs";
import { Definitions } from "./classes/definitions";

if (require.main === module) {
	// eslint-disable-next-line no-unused-vars
	const { argv } = yargs.command({
		command: "deserialize <file>",
		handler: (args) => {
			const { file } = args;
			if (typeof file !== "string") {
				throw Error();
			}
			const serialized = readFileSync(file, "utf8");
			const obj = JSON.parse(serialized);
			Definitions.fromObject(obj);
		},
	});
}
