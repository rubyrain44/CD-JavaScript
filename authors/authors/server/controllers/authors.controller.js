const Author = require('../models/authors.model');

module.exports = {
    findAll: (req, res) => {
        Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json({message: 'Something went wrong with findAll', error: err}))
    },
    findOne: (req, res) => {
        Author.findById(req.params.id)
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.status(400).json({message: 'Something went wrong with findOne', error: err}))
    },
    create: (req, res) => {
        Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json({message: 'Something went wrong with create', error: err}))
    },
    update: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json({ message: 'Something went wrong with update.', error: err}))
    },
    delete: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
        .then(deleteAuthor => res.json(deleteAuthor))
        .catch(err => res.status(400).json({ message: 'Something went wrong with delete', erorr: err}))
    }
}