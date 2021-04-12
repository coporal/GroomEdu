var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); //morgan은 http 리퀘스트에 대해 로깅하는 모듈입니다. 객체를 생성합니다.

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');   //1~8필요한 모듈을 불러오는 단계

var app = express(); //app이라는 객체를 선언하고 express() 함수로 생성합니다. 이 객체를 이용하여 웹 서버의 특징을 기술합니다.

// view engine setup
app.set('views', path.join(__dirname, 'views'));//화면을 보이게 할 뷰 템플릿 파일들이 있는 경로를 라우팅하기 위해 그 값을 미리 정의합니다
app.set('view engine', 'pug');//이거수정jade->pug

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
 //12~29 app 객체에 대한 특징, 즉 우리가 생성할 웹 서버의 특징을 기술하는 부분입니다.
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
