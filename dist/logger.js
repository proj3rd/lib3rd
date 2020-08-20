"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, printf, timestamp } = winston_1.format;
const logFormat = printf(({ level, message, timestamp, name }) => {
    const arrToString = [
        timestamp,
        `[${name}]`,
        `[${level.toUpperCase()}]`,
        message,
    ];
    return arrToString.join(' ');
});
class Logger {
    constructor() {
    }
    static getLogger(name) {
        const logger = this.childLoggers.get(name);
        if (logger !== undefined) {
            return logger;
        }
        const childLogger = this.defaultLogger.child({ name });
        this.childLoggers.set(name, childLogger);
        return childLogger;
    }
}
exports.Logger = Logger;
Logger.defaultLogger = winston_1.createLogger({
    format: combine(timestamp(), logFormat),
    transports: [
        new winston_1.transports.File({
            filename: 'log',
        }),
    ],
});
Logger.childLoggers = new Map();
//# sourceMappingURL=logger.js.map