
const { env } = process;

module.exports = {
  port: env.HOST,
  host: env.PORT,
}