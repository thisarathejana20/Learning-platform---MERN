const express = require("express");
const {
  getAllStudentViewCourses,
} = require("../controllers/studentController");
const studentRouter = express.Router();

studentRouter.get("/", getAllStudentViewCourses);
studentRouter.get("/:id", getAllStudentViewCourses);

module.exports = studentRouter;
