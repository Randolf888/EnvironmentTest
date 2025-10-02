// Environment configuration - simple and reliable approach
export const AppConfig = {
  // Development values (default)
  apiBaseUrl: 'https://jsonplaceholder.typicode.com',
  appName: 'CPAN 213 App',
  debugMode: true,
  version: '1.0.0',

  // React Native environment detection
  isDevelopment: __DEV__,
  isProduction: !__DEV__,

  // App constants
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#f5f5f5',
    text: '#2c3e50',
  },
};

export default AppConfig;
