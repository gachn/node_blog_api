var express = require('express');
var router = express.Router();
var {Blog} = require('../models/blog');

/* GET home page. */
router.use('/',(req, res, next)=>{
    var {title,categories,content} = req.body;
    var id = getId();


    var blogItem =new Blog({
        id,
        title ,
        categories,
        content,
    });
    blogItem.save().then((post)=>{
        response = {
            id : post.id,
            title : post.title,
            categories : post.categories,
            content : post.content,
        };
           res.send(response);
    },(err)=>{
            console.log('Error Occurred');
            res.status(400).send(err);
    });

});

var getId=()=>{
    time = new Date().getTime();
    time  = time % 100000;
    console.log(time);
    return time;
};

module.exports = router;
