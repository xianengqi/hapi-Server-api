const Hapi = require('hapi');
require('env2')('./.env');
const config = require('./config');
const routes = require('./routes')

const server = new Hapi.Server();
// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
  routes: {
    cors: true
  }
});

const init = async () => {
  // 路由开始注册
  Object.values(routes).map(route => {
    route.forEach(api => {
      server.route(api);
    });
  })
  // 启动服务
  await server.start();
  console.log(`服务启动：${server.info.uri}`);
};

init();