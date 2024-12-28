/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
    const {
        resolver: { assetExts, sourceExts },
    } = await getDefaultConfig();

    return {
        transformer: {
            getTransformOptions: async () => ({
                transform: {
                    experimentalImportSupport: false,
                    inlineRequires: true,
                },
            }),
        },
        resolver: {
            assetExts: [...assetExts, 'png', 'jpg', 'jpeg'], // Asegúrate de incluir las extensiones de imágenes aquí
            sourceExts: sourceExts.filter(
                ext => !['png', 'jpg', 'jpeg'].includes(ext),
            ), // No incluyas imágenes como código fuente
        },
    };
})();
