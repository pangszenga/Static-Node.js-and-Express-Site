//Dependencies
const express = require('express');
const pug = require('pug');
const colors = require('colors');
const bodyParser = require('body-parser');
const projects = require('./data.json');
const app = express();
const port = 3000;
const routes = require('./routes/index');
const proj = require('./routes/projects');



//Set up
app.set('view engine', 'pug');
app.set("views", "./views");
app.use('/static', express.static('public'));
app.use(bodyParser.json());
app.use(routes);
app.use(proj);



//Errors
app.use((req, res , next) => {
  const err =  new Error('Oops, you seem to be lost');
  res.locals.error = err;

  res.status(err.status || 500);
  res.render('error');


  console.log(res.status);
  next(err);
});



//Listener
app.listen(port, console.log(`I am running on ${port}.`));
