const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

router.post('/new', function(req, res, next) {
    const book = new Book({
        title: 'Bu ilk kitap',
        published: false,
        comments: [
            { message: "Harika bir kitap"},
            { message: "Ben pek beğenmedim"}
        ],
        meta: {
            votes: 10,
            favs: 100
        }
    });
    
    book.save((err, data) => {
        if(err)
         console.log(err);
        res.json(data);
    })
});

module.exports = router;