let savedNotes = require("../db/db.json");

module.exports = function(app) {

// gets saved notes    
app.get("/api/notes", function(req, res) {
    res.json(savedNotes)
   
});
 
// creates new notes
 app.post("/api/notes", function(req, res) {
    let note = req.body;
    console.log(note)
    note.id = Math.floor(Math.random() * 1000000);
    savedNotes.push(note)
    res.json(true)
 });   

// deletes notes
 app.delete("/api/notes/:id", function(req, res) {
    // saves notes except for a particular id
    savedNotes = savedNotes.filter(function (note) {
            return note.id != req.params.id;
        });
    console.log(req.params.id);
    res.json(true);
});
}