const Product = require('../models/products.model');

module.exports = {
    findAll: (req, res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => 
                res.status(400).json({ message: "Something went wrong with findAll", error: err}))
    },

    findOne: (req, res) => {
        Product.findById(req.params.id)
            .then(oneProduct => res.json(oneProduct))
            .catch(err => 
                res.status(400).json({ message: "Something went wrong with findOne", error: err}))
    },

    create: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => 
                res.status(400).json({ message: "Something went wrong with create", error: err}))
    },

    update: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators: true })
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => 
                res.status(400).json({ message: "Something went wrong with update", error: err }))
    },

    delete: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(deleteMessage => res.json(deleteMessage))
            .catch(err => 
                res.status(400).json({ message: "Something went wrong with delete", error: err}))
    }
}