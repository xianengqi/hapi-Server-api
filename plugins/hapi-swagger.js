const inert = require('inert');
const vision = require('vision');
const package = require('package');
const hapiSwagger = require('hapi-swagger');

const swaggerOptions = {
  info: {
        title: '接口文档',
        version: package.version,
        description: '基于 Hapi 框架 的小程序后端接口',
        contact: {
          name: '夏能啟',
          url: 'https://github.com/xianengqi',
          email: 'xianengqi@gmail.com'
        },
        license: {
          name: 'MIT',
          url: 'https://github.com/xianengqi/hapi-shops-nodejs/blob/master/LICENSE'
        },
      },
      lang: 'zh-cn',
      // 定义接口以 tags 属性定义为分组
      grouping: 'tags',
      tags: [
        { name: 'tests', description: '测试相关' },
      ],
};

module.exports = [
  inert,
  vision,
  {
    register: hapiSwagger,
    options: swaggerOptions,
  },
];