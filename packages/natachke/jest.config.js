module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      useESM: true,
      diagnostics: false,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
}
