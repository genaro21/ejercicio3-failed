const { Router } = require("express");

const controller = require("../controllers");

const router = Router();

router.post("/user/create", controller.user.create);
router.get("/user/all", controller.user.all);
router.get("/user/get/:id", controller.user.get);
router.put("/user/update/:id", controller.user.update);
router.delete("/user/remove/:id", controller.user.remove);

module.exports = router;
