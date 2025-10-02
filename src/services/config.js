import AppConfig from '../config/constants';

export const ConfigService = {
  get: key => AppConfig[key],
  getAll: () => AppConfig,
  isDebug: () => AppConfig.debugMode,
};

export default AppConfig;
