/**
 * Created by Gaurav on 3/18/2018.
 */
let {mongoose} = require('../db/mongoose');

var Blog = mongoose.model('Blog',{

    id:{
        type : Number,
        trim : true,
        unique : true,
        required : true,

    },
    title:{
        type : String,
        required : true,
        minlength : 3,
        trim : true
    },
    categories:{
        type : String,
        required : true,
        minlength : 3,
        trim : true
    },
    content:{
        type : String,
        required : true
    }
});
module.exports ={Blog};