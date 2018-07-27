var mongoose = require('mongoose') //引入mongoose，用于与数据库建立连接
//链接指定地址数据库
mongoose.connect('mongodb://localhost:27017/todoLists',{ useNewUrlParser: true })
//监听状态
var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'));//绑定监听error事件
//绑定一次open事件
db.once('open',function () {
    console.log('success')
})