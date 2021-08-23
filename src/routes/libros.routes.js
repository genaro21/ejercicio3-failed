const { Router } = require("express");

const controller = require("../controllers");
const router = Router();

router.post("/libro/create", controller.libros.create);
router.get("/libro/all", controller.libros.all);
router.get("/libro/get/:id", controller.libros.get);
router.put("/libro/update/:id", controller.libros.update);
router.delete("/libro/remove/:id", controller.libros.remove);

module.exports = router;
