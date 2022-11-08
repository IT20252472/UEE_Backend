const router = require("express").Router();
const {
  createAdmin,
  updateAdmin,
  deleteAdmin,
  getAdminByID,
  getAllAdmins,
} = require("../Controllers/Admin.controller");

router.post("/", createAdmin);
router.get("/", getAllAdmins);
router.get("/:id", getAdminByID);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

module.exports = router;
