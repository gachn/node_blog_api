var express = require('express');
var router = express.Router();
var {Blog} = require('../models/blog');

function fetchById(id,res,callback) {
     return Blog.findOne({id}).then((post)=>{
         callback(post,res);
    },()=>()=> callback(-1,res));
}
module.exports = fetchById;
