const mongoose = require('mongoose');
const BookSchema = mongoose.Schema(
    {
        title: {
            desc: "Book's description.",
            trim: true,
            type: String,
            required: true,
            max: 500,
        },
        category: {
            desc: "The name of the category",
            trim: true,
            type: String,
            required: true,
        },
        author: {
            desc: "Book writer's name.",
            trim: true,
            type: String,
            required: true,
            max: 500,
        },    
        shelfno: {
            desc: "Where on a shelf a book is kept.",
            trim: true,
            type: Number,
            required: true,
        },
        quantity: {
            desc: "Number of same book available",
            trim: true,
            type: Number,
            required: true,
        }
    },
    {
        strict: true,
        versionKey: false,
        timestamps: true,
    }
);


module.exports = mongoose.model("book", BookSchema);
