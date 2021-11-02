// const express = require("express");

// //imports modular routes for 
// const notesRouter = require('./notes');

// const app = express( );

// //use  routes on routes/notes.js 
// app.use('/notes', notesRouter);

// module.exports = app;

const route = require("express").Router();

// const api = require('./routes/index.js');

// application.use(api);

// app.use(api);

// Imports modular routes 
const notesRouter = require('./notes');
const { application } = require("express");

//use routes on routes/notes.js
route.use('/api', notesRouter);

module.exports =route;