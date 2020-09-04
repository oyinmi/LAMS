/* jshint esversion: 6 */

const express = require("express");
const { check, validationResult } = require("express-validator");
const book = express.Router();

const Book = require("../model/Book");


/**
 * @method - posT
 * @param - /create
 * @description - Add Book to Shelf
 */

// Book creation
book.post(
    "/admin/create",
    [
        check("title", "Book's description.")
            .not()
            .isEmpty(),
        check("category", "The category description")
            .not()
            .isEmpty(),       
        check("author", "Book writer's name.")
            .not()
            .isEmpty(),
        check("shelfno", "Where on a shelf a book is kept.")
            .not()
            .isEmpty(),    
        check("quantity", "Number of same book available")   
            .not() 
            .isEmpty(), 
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            title,
            category,
            author,
            shelfno,
            quantity
        } = req.body;
        
        try {
            let book = await Book.findOne({
                title
            });
            if (book) {
                return res.status(400).json({
                     msg: "Book Already Exists."
                 });    
            }

            book = new Book({
                title,
                category,
                author,
                shelfno,
                quantity,
            });

            await book.save();

            book = await Book.findOne({
                title
            });
            return res.status(200).json({ 
                "status": "successful",
                data: book
            });

        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);


/**
 * @method - GET
 * @param - /view
 * @description - Add Book to Shelf
 */

 // View Book
 book.get(
     "/view",
     [
        check("title", "Book's description.")
        .not()
        .isEmpty()
     ],

     async(req, res) => {
         const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const { title } = req.body;

        try {
            let book = await Book.findOne({
                title
            });

            if (!book)
                return res.status(400).json({
                    msg: "Item does not exist."
                });

            const isMatch = await title;
            if (!isMatch)
                return res.status(400).json({
                    msg: "Item is not available."
                });

            book = await Book.findOne({
                title
            });
            return res.status(200).json({
                "status": "successful",
                data: book
            });

        } catch (err) {
            console.log(err);
            res.status(500).json({
                msg: "Server Error"
            });
        }
    }
 );

 
module.exports = book;
