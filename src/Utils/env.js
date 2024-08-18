export const envUrl = (arg = 'dev') => {
    const env = {
      dev: 'http://192.168.29.20:8080/',
      local: 'http://localhost:8080/',
    };
    return env[arg];
  };
  