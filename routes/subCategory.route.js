const express = require("express");
const router = express.Router();
const subCategoryController = require("../controllers/subCategory.controller");

router.get("/readAll", subCategoryController.getAllSubCategorys);
router.post("/create", subCategoryController.createSubCategory);
router.get("/readOne/:id", subCategoryController.getSubCategory);
router.patch("/update/:id", subCategoryController.updateSubCategory);
router.delete("/delete/:id", subCategoryController.deleteSubCategory);

module.exports = router;
