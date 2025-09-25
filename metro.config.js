const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  codegenConfig: {
    libraries: [
      {
        name: 'react-native-config',
        type: 'modules',
        jsSrcsDir: './node_modules/react-native-config/src',
      },
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
