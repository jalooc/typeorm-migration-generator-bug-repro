// This config is just for the migration CLI. The runtime config is declared in code

module.exports = {
  type: process.env.TYPEORM_CONNECTION || 'mysql',
  host: process.env.TYPEORM_HOST || '127.0.0.1',
  port: process.env.TYPEORM_PORT || 3306,
  username: process.env.TYPEORM_USERNAME || 'user',
  password: process.env.TYPEORM_PASSWORD || 'password',
  database: process.env.TYPEORM_DATABASE || 'manage',
  entities: ['lib/entities/*.js'],
  migrations: ['lib/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/entities',
  },
}