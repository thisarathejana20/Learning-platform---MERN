const express = require("express");
const {
  getAllStudentViewCourses,
  getStudentViewCourseDetails,
  checkCoursePurchaseInfo,
} = require("../controllers/studentController");
const studentRouter = express.Router();

studentRouter.get("/", getAllStudentViewCourses);
studentRouter.get("/:id", getStudentViewCourseDetails);
router.get("/purchase-info/:id/:studentId", checkCoursePurchaseInfo);

module.exports = studentRouter;
