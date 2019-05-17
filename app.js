//Dependencies
const express = require('express');
const pug = require('pug');
const colors = require('colors');
const { projects }  = require('./data.json');
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
app.use((req, res ,next) => {
  res.status(404).render('error')



})
//Listener
app.listen(port, console.log(`I am running on ${port}.`));
// console.log(projects);
