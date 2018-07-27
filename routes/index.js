var express = require('express');
var router = express.Router();
var todoList =require('../database/model/todoList')

/* GET home page. */
router.get('/todo', function(req, res) {
  todoList.find({}).then(data=>{
      res.json({
          code:200,
          data
      })
  })
});
router.post('/todo', function(req, res) {
  let todo = req.body;
  todoList.create({title:todo.title,isDone:todo.isDone}).then(()=>{
      res.json({
          code:200,
          msg:"添加成功记得做哟^_^"
      })
  })
});
router.patch('/todo/:id',function (req,res) {
    todoList.update({_id:req.params.id},{$set:{isDone:req.body.isDone}}).then(data=>{
        res.json({
            code:200,
            msg:"修改数据成功"
        })
    })

});
router.delete('/todo/:id',function (req,res) {
     todoList.remove({_id:req.params.id}).then(() =>{
         res.json({
             code:200,
             msg:"success"
         })
     })
})
module.exports = router;
