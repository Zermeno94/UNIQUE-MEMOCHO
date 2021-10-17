const fs = require('f');

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });
    
    app.get("/api/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/notes.html"));
    });

}