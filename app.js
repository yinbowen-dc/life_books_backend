const express = require('express');
const app = express();
const routes = require('./routes') // 导入主路由模块，包含所有业务路由定义
const router = express.Router()

app.use(express.json());

// Mount aiChat routes directly
app.use('/', router);

const PORT = 3008;
app.listen(PORT, () => {
  console.log(`Server running on port 3008`);
});
