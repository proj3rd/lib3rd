"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
// tslint:disable-next-line: only-arrow-functions
describe('Logging [logger_all]', function () {
    // tslint:disable-next-line: only-arrow-functions
    it('Default logger [logger_default]', function () {
        const logger = logger_1.Logger.getLogger('logger.test');
        logger.error('error');
        logger.warn('warn');
        logger.info('info');
        logger.http('http');
        logger.verbose('verbose');
        logger.debug('debug');
        logger.silly('silly');
    });
});
//# sourceMappingURL=test_logger.js.map