const router = require("express").Router();
const Resources = require("../controllers/Resources.contoller");

router.post("/", Resources.addResources);

router.get("/:id", Resources.getResources);

//router.get("/", Resources.getAllResources);

//router.put("/:id", Resources.updateResources);

//router.delete("/:id", Resources.deleteResources);

module.exports = router;
