const User = require("../models/userModel");

exports.signup = async (req, res, next) => {
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      dob: req.body.dob,
      joinDate: req.body.joinDate,
      relievingDate: req.body.relievingDate,
      salary: req.body.salary,
    });

    res.status(200).json({
      status: "Success",
      message: "User Created Successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Something went wrong !",

      error,
    });
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort("-createdAt");

    res
      .status(200)
      .json({ status: "success", results: users.length, data: users });
  } catch (error) {
    res.status(400).json({ status: "failed", error });
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(400).json({ message: "No user found with that ID" });
    }
    res.status(204).json({
      status: "success",
      message: "Something went wrong !",
      data: null,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: "failed", message: "Something went wrong !", error });
  }
};
exports.updateUser = async (req, res, next) => {
  // console.log("id", req.params.id);
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      res.status(400).json({ message: "No user found with that ID" });
    }
    res.status(200).json({
      status: "success",
      message: "User updated successfully",
      data: { data: user },
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: "failed", message: "Something went wrong !", error });
  }
};
