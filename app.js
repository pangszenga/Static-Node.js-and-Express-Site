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
app.get('/', (req, res) => {
  res.render('index', { title : 'index'});
});

app.get('/about', (req, res) => {
  res.render('about', { title : 'about'});
});

app.get('/project', (req, res) => {
  res.render('project', { title : 'project'});

});

//Errors
//The below has the error stack
app.use((req, res , next) => {
  const err = new Error('Page not found');
  err.status = 404;
  next(err);
});

// app.use(( err, req, res ,next) => {
//   res.locals.error = err;
//   res.status(err.status);
//   res.render('error');
// });

// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!');
//   res.status(404).send('This page does not exist!');
// })

//Listener
app.listen(port, console.log(`I am running on ${port}.`));
// console.log(projects);
