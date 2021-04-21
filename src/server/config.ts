const TWO_HOURS = 1000 * 60 * 60 * 2;

const config = {
  port: 3000,
  secret: 'itsasecret',
  SESS_LIFETIME: TWO_HOURS,
  SESS_NAME: 'sid',
};

export default config;
