// const COVERAGE_THRESHOLD = 95

module.exports = {
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  coverageReporters: ['json-summary', 'text', 'lcov', 'text-summary'],
  // coverageThreshold: {
  //   global: {
  //     branches: COVERAGE_THRESHOLD,
  //     functions: COVERAGE_THRESHOLD,
  //     lines: COVERAGE_THRESHOLD,
  //     statements: COVERAGE_THRESHOLD,
  //   },
  // },
}
