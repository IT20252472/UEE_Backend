const Article = require('../Models/Article')
exports.addArticle = async (req,res) => {
    try {
        const article = new Article(req.body);
        const savedArticle = await article.save();
        if(savedArticle){
            res.status(201).send({ message: "success!", data: savedArticle });
        } else {
            res.status(400).send({ message: "failed!", data: savedArticle });
        }
    } catch (e) {
        console.log("Error in Add Article",e)
        res.status(500).send({ message: "server error", data: e });
    }
}

exports.getAllArticles = async (req,res) => {
    try {
        const articles = await Article.find();
        if(articles){
            res.status(200).send({ message: "success!", data: articles });
        } else {
            res.status(400).send({ message: "failed!", data: articles });
        }
    } catch (e) {
        console.log("Error in Get All Articles",e)
        res.status(500).send({ message: "server error", data: e });
    }
}

exports.getArticleById = async (req,res) => {
    try {
        const article = await Article.findById(req.params.id);
        if(article){
            res.status(200).send({ message: "success!", data: article });
        } else {
            res.status(400).send({ message: "failed!", data: article });
        }
    } catch (e) {
        console.log("Error in Get Article By Id",e)
        res.status(500).send({ message: "server error", data: e });
    }
}

exports.deleteArticle = async (req,res) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        if(article){
            res.status(200).send({ message: "success!", data: article });
        } else {
            res.status(400).send({ message: "failed!", data: article });
        }
    } catch (e) {
        console.log("Error in Delete Article",e)
        res.status(500).send({ message: "server error", data: e });
    }
}

exports.updateArticle = async (req,res) => {
    const data = req.body;
    try {
        const article = await Article.updateOne({
            _id:req.params.id},
            {...data});
        if(article){
            res.status(200).send({ message: "success!", data: article });
        } else {
            res.status(400).send({ message: "failed!", data: article });
        }
    } catch (e) {
        console.log("Error in Update Article",e)
        res.status(500).send({ message: "server error", data: e });
    }
}

exports.updateArticleStatus = async (req, res) => {
    try {
        const result = await Article.updateOne(
            { _id: req.params.id },
            {
                status: req.body.status,
            }
        );
        console.log("updated ", result);
        res.status(200).send({ message: "success", data: result });
    } catch (e) {
        console.log("error", e);
        res.status(500).send({ message: "error", data: e });
    }
}
