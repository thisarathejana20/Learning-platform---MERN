const express = require("express");
const {
  getCoursesByStudentId,
} = require("../controllers/studentCourseController");

const router = express.Router();

router.get("/get/:studentId", getCoursesByStudentId);

module.exports = router;
