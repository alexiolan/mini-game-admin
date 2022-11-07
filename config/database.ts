import path from 'path';

const parse = require('pg-connection-string').parse;
const config = parse("postgres://gzdmqltdmlyyqq:fd29d7b911a3dc6fb27ea57ecd6815b2c85fa2d7aac89814cd0f2d77e6762782@ec2-176-34-215-248.eu-west-1.compute.amazonaws.com:5432/d1esslnld03s0i");

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
