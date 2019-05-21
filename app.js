//Dependencies
const express = require('express');
const pug = require('pug');
const colors = require('colors');
const bodyParser = require('body-parser');
const project = require('./data.json');
const app = express();
const port = 3000;

//Set up
app.set('view engine', 'pug');
app.set("views", "./views");
app.use('/static', express.static('public'));
app.use(bodyParser.json());


//Routes
app.get('/', (req, res, next) => {
  res.render('index', { title : 'index'});
  next();
});


app.get('/home', (req, res, next) => {
  res.render('about', { title : 'about'});
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
app.use((req, res , next) => {
  const err = new Error('Oops, you seem to be lost');
  err.status = 404;
  next(err);
});


app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  console.log('Uh-Oh! There seems to have been an error!')
  res.render('error');
});

console.log(project.0.project_name);


//Listener
app.listen(port, console.log(`I am running on ${port}.`));
