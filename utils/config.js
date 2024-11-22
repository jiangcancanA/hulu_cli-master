let baseURL;

// 使用 switch 语句更灵活地管理不同的环境
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://122.51.235.203:9202/api'; // 本地开发环境
    break;
  case 'test':
    baseURL = 'http://47.107.74.83:1880/app'; // 测试环境
    break;
  case 'staging':
    baseURL = 'http://47.108.238.112:8880'; // 预发布环境
    break;
  case 'production':
  default:
    baseURL = 'http://192.168.50.99:8089/app'; // 生产环境
    break;
}

export default baseURL;
