/**
 * Created by Gaurav on 3/18/2018.
 */
let {mongoose} = require('../db/mongoose');


const generateID = mongoose.model('generateId',{
    id:{
        type : Number,
        trim : true,
        required : true,
        default : 15456
    }
});

module.exports = generateID;
