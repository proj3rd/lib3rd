import winston from 'winston';
export declare class Logger {
    static getLogger(name: string): winston.Logger;
    private static defaultLogger;
    private static childLoggers;
    private constructor();
}
//# sourceMappingURL=logger.d.ts.map