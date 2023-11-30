const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    author: {
        type: String,
        rerquired: true,
    },
    genre: {
        type: String,
        required: true,

    },
    publication_year: {
        type: String,
        required: true,
    },
    ISBN: {
        type:String,
        required:true,
    },

});




module.exports = mongoose.model("books", bookSchema);