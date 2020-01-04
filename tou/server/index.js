const userApi = require('./api/userApi');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// 后端api路由
app.use('/api/user', userApi);

app.listen(3000)
console.log('success listen at port:3000......')