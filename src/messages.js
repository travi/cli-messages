import {info as infoIcon, success as successIcon, warning as warningIcon, error as errorIcon} from 'log-symbols';
import chalk from 'chalk';

function writeToStdError(...args) {
  console.error(...args);                       // eslint-disable-line no-console
}

export function info(message) {
  writeToStdError(infoIcon, chalk.blue(message));
}

export function success(message) {
  writeToStdError(successIcon, chalk.green(message));
}

export function warn(message) {
  writeToStdError(warningIcon, chalk.keyword('orange')(message));
}

export function error(message) {
  writeToStdError(errorIcon, chalk.red(message));
}
