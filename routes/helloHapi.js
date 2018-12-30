module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('hapi 哈哈哈哈');
    },
    config: {
      auth: false,
      tags: ['api', 'tests'],
      description: '测试hello-hapi',
    },
  },
]