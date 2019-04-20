import {info as infoIcon, success as successIcon, warning as warningIcon, error as errorIcon} from 'log-symbols';
import chalk from 'chalk';
import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import {info, success, warn, error} from '../../src/messages';

suite('message', () => {
  let sandbox;
  const message = any.sentence();

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(console, 'error');
  });

  teardown(() => sandbox.restore());

  test('that the `i` icon is shown with info messages', () => {
    info(message);

    assert.calledWith(console.error, infoIcon, chalk.blue(message));                  // eslint-disable-line no-console
  });

  test('that the checkmark icon is shown with success messages', () => {
    success(message);

    assert.calledWith(console.error, successIcon, chalk.green(message));              // eslint-disable-line no-console
  });

  test('that the alert icon is shown with warn messages', () => {
    warn(message);

    assert.calledWith(console.error, warningIcon, chalk.keyword('orange')(message));  // eslint-disable-line no-console
  });

  test('that the `X` icon is shown with error messages', () => {
    error(message);

    assert.calledWith(console.error, errorIcon, chalk.red(message));                  // eslint-disable-line no-console
  });
});
