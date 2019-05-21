# Static-Node.js-and-Express-Site

Dependencies
Added some dependencies to make project easier
1. Express
2. Pug
3. Body-parser
4. colors


Error Handling
Friendly error message added accessing
1. Error.message
2. Error.status
3. Error.stack

Customised items
1. Font
2. Logo image
3. background
4. Font color


each project in projects
  .cell
    a(href= `/projects/${project.id}`)
      img.thumbnail(src= `/projects/${project.image_urls[0]}`)
      h5= project.project_name

each project in projects
       .cell
           img.thumbnail(src=project.image_urls[0])
           h5= project.project_name

extends layout.pug

block content
 article.grid-container.portfolio-intro
   div

     h1 My Portfolio

     p.lead.text-light
       | Welcome to my project collection, have a flick through!
 article.grid-container.portfolio-index

   .grid-x.grid-margin-x.small-up-2.medium-up-2.large-up-3

   each data in projects
          .cell
              h5= data.project_name
