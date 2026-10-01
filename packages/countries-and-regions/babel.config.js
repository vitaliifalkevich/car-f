module.exports = function (api) {
  const presets = [
      [
        '@babel/env',
      ],
      '@babel/react',
      '@babel/typescript',
    ],
    plugins = [
      'polished',
      ['@babel/plugin-transform-typescript', { allowNamespaces: true }],
    ],
    ignore = ['node_modules']
  

  return { presets, plugins, ignore }
}
