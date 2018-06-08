const express = require('express');
const Book = require('../models/Book');
const router = express.Router();


router.post('/new', function (req, res, next) {
    const book = new Book({
        title: 'Serenad',
        published: true,
        comments: [
            { message: "Harika bir kitap" },
            { message: "Ben pek beğenmedim" }
        ],
        meta: {
            votes: 10,
            favs: 100
        }
    });

    book.save((err, data) => {
        if (err)
            console.log(err);
        res.json(data);
    })
});

router.get('/search', function (req, res) {
    Book.find({ published: true }, function (err, data) {
        res.json(data);
    });
});

router.get('/searchOne', (req, res) => {
    Book.findOne({ title: 'Serenad' }, (err, data) => {
        res.json(data);
    });
});

router.get('/searchById', (req, res) => {
    Book.findById('5b1a6ae100c864083edb7ff4', (err, data) => {
        res.json(data);
    });
});

router.put('/update', (req, res ) => {
   Book.update(
       {
           published: false
       },
       {
           published: true
       }, (err, data) => {
           res.json(data);
       }
   )
});

router.put('/updateById', (req, res) => {
   Book.findByIdAndUpdate('5b1aeef7bc4f4013f1159b88', { title: 'Hello world'}, (err, data) => {
        res.json(data);
   });
});

router.delete('/remove', (req, res) => {
  Book.findById('5b1aeef7bc4f4013f1159b88', (err, book) => {
        book.remove((err, data) => {
            res.json(data);
        })
  });
});

module.exports = router;