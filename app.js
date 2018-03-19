var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var index        = require('./routes/index');

var fetchAllPost = require('./routes/fetchAllPost');
var storeNewPost = require('./routes/storeNewPost');
var fetchById    = require('./routes/fetchById');
var deleteById   = require('./routes/deleteById');
var app          = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req,res)=>res.send(process.env));

//Routes
app.get('/api/posts', fetchAllPost);
app.post('/api/posts', storeNewPost);
app.get('/api/posts/:id',(req,res)=>{
   fetchById(req.params.id,res,sendResponse);
});

app.delete('/api/posts/:id',(req,res)=>{
    console.log('delete');
    deleteById(req.params.id,res,sendResponse);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('404');
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var sendResponse =(post,res)=>{
    if(!post)
        res.status(404).send('Id does not exist');
    else if(post === 1)
        res.status(400).send('Invalid parameters');
    else
        res.send(post);
};

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
