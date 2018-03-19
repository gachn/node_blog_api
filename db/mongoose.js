var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/React_Blog_Backend');


module.exports= {mongoose};

