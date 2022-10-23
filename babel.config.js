const babelConfig = {
    presets: [[
        '@babel/preset-env', {
            modules: false,
            loose: false,
            useBuiltIns: 'usage',
            corejs: {
                version: 3,
                proposal: true,
            },
        },
    ]],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        [
            "@babel/plugin-proposal-decorators",
            {
                legacy: true
            }
        ]
    ]
};

module.exports = babelConfig;