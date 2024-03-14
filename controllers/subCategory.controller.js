const SubCategory = require("../models/subCategory.model");
const { sendRes } = require("../utils/factoryFunctions");

exports.getAllSubCategorys = async (req, res, next) => {
  try {
    const data = await SubCategory.find();
    sendRes(res, 200, data, data.length, "Data fetched successfully");
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: "Internal Server Error",
    });
  }
};

exports.createSubCategory = async (req, res, next) => {
  try {
    const data = await SubCategory.create({
      name: req.body.name,
      description: req.body.description,
      categoryId: req.body.categoryId,
    });
    sendRes(res, 201, data, 1, "SubCategory created successfully");
  } catch (err) {
    sendRes(res, 400, null, 0, "SubCategory not created");
  }
};

exports.getSubCategory = async (req, res, next) => {
  try {
    const data = await SubCategory.findById(req.params.id);
    sendRes(res, 200, data, data.length, "Data fetched successfully");
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: "Internal Server Error",
    });
  }
};

exports.updateSubCategory = async (req, res, next) => {
  try {
    const data = await SubCategory.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
        categoryId: req.body.categoryId,
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

exports.deleteSubCategory = async (req, res, next) => {
  try {
    const data = await SubCategory.findByIdAndDelete(req.params.id);
    sendRes(res, 200, data, data.length, "Data deleted successfully");
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: "Internal Server Error",
    });
  }
};
