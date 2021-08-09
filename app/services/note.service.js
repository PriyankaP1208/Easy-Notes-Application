const Note = require('../models/note.model.js');

exports.createNote = (data) => {
    //Create a note
    const note = new Note({
        title: data.title || "Untitled Note",
        content: data.content
    });

    //Save note in the database
    return note.save()
        .then(data => {
            console.log("data=", data);
            return data;
        }).catch(err => {
            console.log(err);
        });
};

//Retrieve all notes
exports.findAll = () => {
    return Note.find().then(data =>{
        return data
    }).catch(err =>{
        console.log(err);
    });
}

//Retrieve note from given Id
exports.findOne = (noteId) => {
    return Note.findById(noteId).then(data => {
        return data;
    }).catch(err => {
        return err;
    })
}


//Update note
exports.update = (id, data) => {
    return Note.findByIdAndUpdate(id,{
        title: data.title || "Untitled Note",
        content: data.content
    }, {new: true})
    .then(note => {
        return note;
    }).catch(err =>{
        return err;
    })
}


//Delete note
exports.delete = (id) => {
    return Note.findByIdAndRemove(id).then(note => {
        return {message : "Note deleted successfully!"};
    }).catch(err => {
        return err;
    })
}
