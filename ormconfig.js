module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST || 'db',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'letsmeet',
  database: process.env.DB_NAME || 'meetingplanner',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  dropSchema: process.env.DROP_DB === 'true',
};
