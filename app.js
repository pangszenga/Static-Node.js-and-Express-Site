//Dependencies
const express = require('express');
const pug = require('pug');
const colors = require('colors');
const bodyParser = require('body-parser');
const projects = require('./data.json');
const app = express();
const port = 3000;
const routes = require('./routes/index');




//Set up
app.set('view engine', 'pug');
app.set("views", "./views");
app.use('/static', express.static('public'));
app.use(bodyParser.json());
app.use(routes);



//Errors
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status || 500);
  res.render('error');
  next(err);
});



//Listener
app.listen(port, console.log(`I am running on ${port}.`));
