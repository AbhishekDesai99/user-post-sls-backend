import 'source-map-support/register';

export class AppLogger {
  constructor() { };

  info(message, additionalData = {}) {
    console.log('INFO', message, JSON.stringify(additionalData));
  };
  // Log a message with level WARN
  warn(message, additionalData = {}) {
    console.log('WARN', message, JSON.stringify(additionalData));
  }
  // Log a message with level ERROR
  error(message, additionalData = {}) {
    console.log('ERROR', message, JSON.stringify(additionalData));
  }
  // Log a message with level DEBUG
  debug(message, additionalData = {}) {
    console.log('DEBUG', message, JSON.stringify(additionalData));
  }
};
