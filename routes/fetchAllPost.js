var express = require('express');
var router = express.Router();
var {Blog} = require('../models/blog');

/* GET home page. */
router.use('/',(req, res, next)=>{
    console.log(req);
    Blog.find().then((posts)=>{
        res.send(posts);
    },(err)=>{
        console.log('Error Occurred');
        res.status(400).send(err);
    });
});
module.exports = router;
