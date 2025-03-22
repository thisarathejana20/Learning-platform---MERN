const express = require("express");
const {
  addNewCourse,
  getAllCourses,
  getCourse,
  updateCourse,
} = require("../controllers/courseController");

const courseRouter = express.Router();

courseRouter.post("/", addNewCourse);
courseRouter.get("/", getAllCourses);
courseRouter.get("/:id", getCourse);
courseRouter.put("/:id", updateCourse);

module.exports = courseRouter;
