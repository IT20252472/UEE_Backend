const router = require("express").Router();
const {
    addArticle,
    updateArticle,
    deleteArticle,
    getArticleById,
    getAllArticles,
    updateArticleStatus
} = require('../Controllers/Article.contoller')

router.post('/', addArticle);
router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.put('/:id', updateArticle);
router.patch('/status/:id', updateArticleStatus);
router.delete('/:id', deleteArticle);

module.exports = router;
