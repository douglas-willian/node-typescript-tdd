export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coverageDirectory: 'coverage',
  displayName: 'root-tests',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
  rootDir: '/',
  testMatch: ['<rootDir>src/**/*.test.ts'],
  transform: {},
};
