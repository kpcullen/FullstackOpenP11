const { TestEnvironment } = require('jest-environment-jsdom')

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
}
