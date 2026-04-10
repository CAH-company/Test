module.exports = {
  apps: [
    {
      name: 'buddys-events',
      script: 'node_modules/.bin/next',
      args: 'start',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      error_file: '/var/log/pm2/buddys-events-error.log',
      out_file: '/var/log/pm2/buddys-events-out.log',
      time: true,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}
