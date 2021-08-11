module.exports = {
  apps: [
    {
      name: 'app',
      script: 'npm run start:dev',
      env: {
        PORT: '3000',
      },
      env_production: {
        PORT: '80',
      },
    },
  ],
};
