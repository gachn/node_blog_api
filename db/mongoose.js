var mongoose = require('mongoose');

const dbUrl = process.env.dbUrl || 'mongodb://localhost:27017/React_Blog_Backend';
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);


module.exports= {mongoose};

