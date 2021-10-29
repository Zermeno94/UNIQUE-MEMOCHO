const notes = require("express").Router();


// GET Route 
notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// DELETE Route 




// POST route to send data to server to create/update the note taker 
notes.post('/', (req, res) => {
  console.log(req.body);

  // title & text is what is given in db.json
  const { title, text } = req.body;

  if (req.body) {
      const newNote = {title,text,id: uuidv4(), // the user will will require tile, text & id to be included in note 
      };

      readAndAppend(newNote, './db/db.json');
      res.json("YAY!!✌️ You're note was added "); 
      // This will display to the user was successful in submitting their note
  } else {
      res.error("Oh no! Your note didn't go through 🙁")
      //This will display to the user if the note was not succesfully entered 
  };
});

module.exports = notes;