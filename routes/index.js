const express = require("express");
const router = express.Router();

router.use("/category", require("./category.route"));
router.use("/subCategory", require("./subCategory.route"));

module.exports = router;
