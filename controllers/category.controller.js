const Category = require("../models/category.model");
const { sendRes } = require("../utils/factoryFunctions");

exports.getAllCategorys = async (req, res, next) => {
  try {
    const data = await Category.find();
    sendRes(res, 200, data, data.length, "Data fetched successfully");
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: "Internal Server Error",
    });
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const data = await Category.create({
      name: req.body.name,
      description: req.body.description,
    });
    sendRes(res, 201, data, 1, "Category created successfully");
  } catch (err) {
    sendRes(res, 400, null, 0, "Category not created");
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const data = await Category.findById(req.params.id);
    sendRes(res, 200, data, data.length, "Data fetched successfully");
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: "Internal Server Error",
    });
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const data = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
      },
      { new: true }
    );
    sendRes(res, 200, data, data.length, "Data updated successfully");
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: "Internal Server Error",
    });
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const data = await Category.findByIdAndDelete(req.params.id);
    sendRes(res, 200, data, data.length, "Data deleted successfully");
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: "Internal Server Error",
    });
  }
};
