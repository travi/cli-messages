import {info as infoIcon, success as successIcon, warning as warningIcon, error as errorIcon} from 'log-symbols';

function writeToStdError(...args) {
  console.error(...args);                       // eslint-disable-line no-console
}

export function info(message) {
  writeToStdError(infoIcon, message);
}

export function success(message) {
  writeToStdError(successIcon, message);
}

export function warn(message) {
  writeToStdError(warningIcon, message);
}

export function error(message) {
  writeToStdError(errorIcon, message);
}
