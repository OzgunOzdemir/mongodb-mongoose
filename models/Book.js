const mongoose = require('mongoose')
const Schema = mongoose.Schema;

/*
* type
* default
* required
* unique
*/

const BookSchema = Schema({
    title:{
        type: String,
        required: true,
    },
    published: Boolean,
    comments: [{ message: String }],
    meta: {
        votes: Number,
        favs: Number
    },
    publishedAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('book', BookSchema);