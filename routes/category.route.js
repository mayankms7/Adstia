const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");

router.get("/readAll", categoryController.getAllCategorys);
router.post("/create", categoryController.createCategory);
router.get("/readOne/:id", categoryController.getCategory);
router.patch("/update/:id", categoryController.updateCategory);
router.delete("/delete/:id", categoryController.deleteCategory);

module.exports = router;
