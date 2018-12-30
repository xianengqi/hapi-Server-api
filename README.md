# hapi-Server-api
### 📖 配置基础的Hapi脚手架，方便自己日后开发
![](https://github.com/xianengqi/hapi-Server-api/blob/master/test/test.png?raw=true)
### 📖 数据迁移

开启 mysql 服务，并执行命令:
- `npm run init`  数据库的创建
- `npm run createdb:dev` 创建数据库
- `npm run createtable` 创建数据库表
- `npm run createtableall` 数据库表结构的自动化创建  执行 `npm run createtable create-xxx-table` 
- `npm run createtableundo:to` 恢复到特定的迁移
- `npm run initdatadb` 创建示例数据/种子数据填充  `npm run initdatadb init-xxx `
- `npm run initdatadball` 将向数据库填充 seeders 目录中所有 up 方法所定义的数据。
- `npm run initdatadball` 制定特定的 seed 配置来做填充：
- `npm run dev` 开启服务

### ✈️ 启动服务

访问 `http://127.0.0.1:3009/documentation` 查看 `API` 文档


