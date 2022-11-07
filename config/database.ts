import path from 'path';

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-176-34-215-248.eu-west-1.compute.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd1esslnld03s0i'),
      user: env('DATABASE_USERNAME', 'gzdmqltdmlyyqq'),
      password: env('DATABASE_PASSWORD', 'fd29d7b911a3dc6fb27ea57ecd6815b2c85fa2d7aac89814cd0f2d77e6762782'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
