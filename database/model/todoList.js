var mongoose= require('mongoose')
//使用mongoose的Schema构造函数建造一个骨架
var todoList = new mongoose.Schema({
    title:String,
    isDone:Boolean
})
/*
 用model函数以todoList骨架生成一个copy,模型是由模式定义编译的构造函数。
 模型的实例称为文档。模型负责从底层MongoDB数据库创建和读取文档。
 第一个参数是模型的集合的唯一名称。Mongoose会自动查找模型名的复数版本
 */
module.exports = mongoose.model('todoLists',todoList,'todoLists')