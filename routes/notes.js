const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {readFromFile,readAndAppend,writeToFile} = require("../helpers/fsUtils");

// GET Route to retrieve all of the users notes 
notes.get("/", (req,res) => {
  readFromFile("./db/db.json").then((data) => res.json(jSON.parse(data))); 
})

// GET Route 
notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});


// POST route to send data to server to create/update the note taker 
notes.post('/', (req, res) => {
  console.log(req.body);

  // title & text is what is given in db.json
  const { title, text } = req.body;

  if (req.body) {
      const newNote = {title,text,id: uuidv4( ), // the user will will require tile, text & id to be included in note 
      };

      readAndAppend(newNote, './db/db.json');
      res.json("YAY!!✌️ You're note was added "); 
      // This will display to the user was successful in submitting their note
  } else {
      res.error("Oh no! Your note didn't go through 🙁")
      //This will display to the user if the note was not succesfully entered 
  };
});

// DELETE Route to allow user to user to delete notes entered 
notes.delete('/:id', (req,res) => {
  const noteId = this.req.params.id;
  readFromFile('./db/db.json')
  .then((data)=> JSON.parse(data))
  .then((json)=> {
    const result = json.filter((note)=> note.id !==noteId);
    // This will allow the data to the saved in the server/system 
    writeToFile('./db/db.json',result);
    // This will show if the user requests to delete their note
    res.json("Your ${noteId} was deleted!");
  });
});

module.exports = notes;