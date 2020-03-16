const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!vee-validate/dist/rules)'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  modulePathIgnorePatterns: [
    '<rootDir>/src/router',
    '<rootDir>/src/styles',
    '<rootDir>/src/utils'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ],
  collectCoverage: true,
  coverageReporters: [
    'html',
    'lcov',
    'text-summary'
  ],
  testURL: 'http://localhost/'
}
