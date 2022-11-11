const router = require("express").Router();
const {
  addResources,
  deleteResources,
  getAllResources,
  getResources,
  updateResources
} = require("../Controllers/Resources.controller");

router.post("/", addResources);

router.get("/:id", getResources);

router.get("/", getAllResources);

router.put("/:id", updateResources);

router.delete("/:id", deleteResources);

module.exports = router;
