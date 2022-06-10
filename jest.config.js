const { each } = require('lodash');

const { compilerOptions } = require('./tsconfig.json');

const { paths: tsPaths } = compilerOptions;
const jestModuleMappers = {};

each(tsPaths, (value, key) => {
  const modifiedKey = key.replace('@', '^@').replace('/*', '/(.*)$');
  let modifiedValue = `<rootDir>/${value[0]}`;

  modifiedValue = modifiedValue.replace('/*', '/$1');

  jestModuleMappers[modifiedKey] = modifiedValue;
});

module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/*.stories.{ts,tsx}',
    '!**/*.stub.ts',
    '!**/*.styles.ts',
    '!**/*.d.ts',
    '!**/index.ts',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/pages',
    '<rootDir>/src/modules/core/components/Icon/components',
    '<rootDir>/src/modules/core/components/Icon/utils',
    '<rootDir>/src/modules/core/components/Icon/SVGFiles',
    '<rootDir>/src/modules/core/components/Icon/createSvgIcon',
    '<rootDir>/src/modules/shared/graphql/',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  globals: {
    'ts-jest': {
      babelConfig: '.babelrc.test',
      tsconfig: 'tsconfig.test.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  moduleNameMapper: {
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/binaryFile.js',
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '^@core/(.*)$': '<rootDir>/src/modules/core/$1',
    '^@icons': '<rootDir>/src/modules/core/components/Icon/components',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@shared/(.*)$': '<rootDir>/src/modules/shared/$1',
    '^@storybook-local/(.*)$': '<rootDir>/.storybook/$1',
    ...jestModuleMappers,
  },
  setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  testPathIgnorePatterns: ['.cache', 'coverage', 'node_modules', 'public', 'storybook-static', 'tests'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testTimeout: 10000,
  testEnvironment: 'jsdom',
};
