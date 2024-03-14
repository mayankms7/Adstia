const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    required: [true, "Parent category id is required"],
  },
});

const SubCategory = mongoose.model("SubCategory", subCategorySchema);
module.exports = SubCategory;
