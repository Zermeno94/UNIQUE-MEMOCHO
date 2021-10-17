// dependencies
const express = require("express");
const fs = require("fs");

const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);