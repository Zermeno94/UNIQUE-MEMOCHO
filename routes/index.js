const express = require("express");

//imports modular routes for 
const notesRouter = require('./notes');

const app = express();

//use  routes on routes/notes.js 
app.use('./notes', notesRouter);

module.exports = app;