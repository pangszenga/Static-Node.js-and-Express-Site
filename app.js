//Dependencies
const express = require('express');
const pug = require('pug');
const colors = require('colors');
const bodyParser = require('body-parser');
const { project }  = require('./data.json');
const app = express();
const port = 3000;

//Set up
app.set('view engine', 'pug');
app.set("views", "./views");
app.use('/static', express.static('public'));


//Routes
app.get('/', (req, res, next) => {
  res.render('index', { title : 'index'});
  next();
});

app.get('/about', (req, res, next) => {
  res.render('about', { title : 'about'});
  next();
});

app.get('/project', (req, res, next) => {
  res.render('project', { title : 'project'});
  next();
});

//Errors
// The below has the error stack
app.use((req, res , next) => {
  const err = new Error('Page not found');
  // err.status = 404;
  console.log(err);
  next(err);
});


// app.use((err, req, res ,next) => {
//   res.locals.error = err;
//   res.render('error');
//
// });

// app.use(( err, req, res ,next) => {
//   res.locals.error = err;
//   res.status(err.status);
//   res.render('error');
// });


//Listener
app.listen(port, console.log(`I am running on ${port}.`));
