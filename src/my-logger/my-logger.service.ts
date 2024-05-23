import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  log(message: string) {
    super.log(`MyLoggerService: ${message}`);
  }
  error(message: string | object, trace: string) {
    super.error(`MyLoggerService: ${message}`, trace);
  }
  warn(message: string) {
    super.warn(`MyLoggerService: ${message}`);
  }
  debug(message: string) {
    super.debug(`MyLoggerService: ${message}`);
  }
  verbose(message: string) {
    super.verbose(`MyLoggerService: ${message}`);
  }
}
