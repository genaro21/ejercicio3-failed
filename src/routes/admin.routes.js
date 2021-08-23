const { Router } = require("express");

const controller = require("../controllers");

const router = Router();

router.post("/admin/create", controller.admin.create);
router.get("/admin/all", controller.admin.all);
router.get("/admin/get/:id", controller.admin.get);
router.put("/admin/update/:id", controller.admin.update);
router.delete("/admin/remove/:id", controller.admin.remove);

module.exports = router;
