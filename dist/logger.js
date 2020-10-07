"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, printf, timestamp } = winston_1.format;
const logFormat = printf(({ level, message, timestamp: ts, name, }) => {
    const arrToString = [ts, `[${name}]`, `[${level.toUpperCase()}]`, message];
    return arrToString.join(' ');
});
class Logger {
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
    format: combine(timestamp({
        format: () => {
            const date = new Date();
            const timezoneOffsetMinutes = date.getTimezoneOffset();
            date.setMinutes(date.getMinutes() - timezoneOffsetMinutes);
            return date.toISOString();
        },
    }), logFormat),
    transports: [
        new winston_1.transports.File({
            filename: 'log',
        }),
        new winston_1.transports.Console({}),
    ],
});
Logger.childLoggers = new Map();
//# sourceMappingURL=logger.js.map