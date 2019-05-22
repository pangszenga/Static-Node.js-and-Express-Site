//Dependencies
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const projectsRaw = require('../data.json');
const json = JSON.parse(JSON.stringify(projectsRaw));
const proj = json.projects;


//Main Routes
router.get('/', (req, res, next) => {
  res.render('index', { json : json });
});


router.get('/home', (req, res, next) => {
  res.render('about', { title : 'about'});
  next();
});

router.get('/about', (req, res, next) => {
  res.render('about', { title : 'about'});
  next();
});


//Routes for projects
router.get('/projects/:id', (req, res) => {
  //This grabs the params of the req
  const {id} = req.params;
  const accessedProj = proj[id];

  res.render('project', { project : accessedProj });
});




module.exports = router;
