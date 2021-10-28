// dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

const api = require('./routes/index.js');

// express app for listener 3001
const PORT = process.env.port || 3001;

const app = express();

// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// GET routes to landing page and note taking page 
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);


// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);


//Listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);