/**
 * Created by Gaurav on 3/18/2018.
 */
var express = require('express');
var router = express.Router();
var {Blog} = require('../models/blog');

function deleteById(id,res,callback) {
     Blog.deleteOne({id}).then((post)=>{
         console.log(post);
        callback(post,res);
    },()=> callback(-1,res));
}
module.exports = deleteById;
