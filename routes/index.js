//Dependencies
const express = require('express');
const router = express.Router();

const projectsRaw = require('../data.json');
const json = JSON.parse(JSON.stringify(projectsRaw));


//Routes for projects
router.get('/', (req, res, next) => {
  res.render('../views/index', { json : json });
});


router.get('/home', (req, res, next) => {
  res.render('about', { title : 'about'});
  next();
});

router.get('/about', (req, res, next) => {
  res.render('about', { title : 'about'});
  next();
});



module.exports = router;
