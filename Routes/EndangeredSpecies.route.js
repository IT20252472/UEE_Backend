const router = require("express").Router();
const EndangeredSpecies = require("../controllers/EndangeredSpecies.contoller");

router.post("/", EndangeredSpecies.addSpecies);

router.get("/:id", EndangeredSpecies.getSpecies);

router.get("/", EndangeredSpecies.getAllSpecies);

router.put("/:id", EndangeredSpecies.updateSpecies);

router.delete("/:id", EndangeredSpecies.deleteSpecies);

module.exports = router;
