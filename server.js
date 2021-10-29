// dependencies
const express = require("express");
const path = require("path");
const {clog} = require('./middleware/clog.js');
// clog will connect to the middleware

const api = require('./routes/index');

// express app for listener 3001
const PORT = process.env.port || 3001;

const app = express();

//calling clog to middleware
app.use(clog); 


// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// GET routes to landing page and note taking page 
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// when you go to localhost address and have the '/' it will redirect  the path to get into the html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


//Listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);