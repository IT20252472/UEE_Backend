const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    status:{
        type: String,
        default: 'Draft',
    }
});

const Article = mongoose.model(
    "Article",
    ArticleSchema
);
module.exports = Article;
