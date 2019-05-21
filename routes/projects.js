//Dependencies
const express = require('express');
const router = express.Router();

const projectsRaw = require('../data.json');
const json = JSON.parse(JSON.stringify(projectsRaw));

router.get('/:id', (req, res) => {
  // const { proj } = req.query;
  // const { id } = req.params;
  // const work = json[id];

  // res.render('../views/project', { title : json.projects[req.params.id] });

  console.log(json.projects[req.params.id]);
});

module.exports = router;
