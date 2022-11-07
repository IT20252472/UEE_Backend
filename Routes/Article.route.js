const router = require("express").Router();
const {
    addArticle,
    updateArticle,
    deleteArticle,
    getArticleById,
    getAllArticles
} = require('../Controllers/Article.contoller')

router.post('/', addArticle);
router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

module.exports = router;
