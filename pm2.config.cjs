module.exports = {
  apps: [
    {
      name: 'my-app',
      script: 'npm',
      args: 'start',
      interpreter: 'none',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
