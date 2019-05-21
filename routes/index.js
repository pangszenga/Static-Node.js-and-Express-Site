//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

//Set up
app.use(bodyParser.json());

//Routes for projects
app.post('/', req, res => {
  console.log(request.body);      // your JSON
  // response.send(request.body);    // echo the result back
});


// router.get('/about', (req, res)=>{
//   res.render('about');
// });
//
//
// router.get('/projects/:id', (req, res)=>{
//   if(isNaN(req.params.id) === true || req.params.id >= jsonData.projects.length){
//     res.redirect('/');
//   }
//   res.render('project', {
//     projects : jsonData.projects[req.params.id]
//   });
// });
//
// module.exports = router;
