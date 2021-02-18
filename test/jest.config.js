/* eslint-disable import/no-dynamic-require */
import rootConfig from '../jest.config.js';

export default {
  ...rootConfig,
  ...{
    rootDir: '',
    displayName: 'end2end-tests',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    testMatch: ['<rootDir>/**/*.test.ts'],
  },
};
