import { TransformableInfo } from 'logform';
import winston, { createLogger, format, transports } from 'winston';
const { combine, printf, timestamp } = format;

const logFormat = printf(
  ({ level, message, timestamp, name }: TransformableInfo) => {
    const arrToString = [
      timestamp,
      `[${name}]`,
      `[${level.toUpperCase()}]`,
      message,
    ];
    return arrToString.join(' ');
  }
);

export class Logger {
  public static getLogger(name: string): winston.Logger {
    const logger = this.childLoggers.get(name);
    if (logger !== undefined) {
      return logger;
    }
    const childLogger = this.defaultLogger.child({ name });
    this.childLoggers.set(name, childLogger);
    return childLogger;
  }

  private static defaultLogger = createLogger({
    format: combine(timestamp(), logFormat),
    transports: [
      new transports.File({
        filename: 'log',
      }),
    ],
  });
  private static childLoggers = new Map<string, winston.Logger>();

  private constructor() {}
}
