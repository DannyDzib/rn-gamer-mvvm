module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                alias: {
                    '@src': './src',
                    '@assets': './assets',
                    '@shared': './src/shared',
                    '@data': './src/data',
                    '@domain': './src/domain',
                    '@application': './src/application',
                    '@presentation': './src/presentation',
                },
            },
        ],
    ],
};
