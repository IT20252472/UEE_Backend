const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    authors: [{
        type: String,
        required: true,
    }],
    createdDate: {
        type: Date,
        default: Date.now,
    },
});

const Article = mongoose.model(
    "Article",
    ArticleSchema
);
module.exports = Article;
