const Course = require("../models/Course");
const getAllStudentViewCourses = async (req, res) => {
  try {
    const {
      category = [],
      level = [],
      primaryLanguage = [],
      sortBy = "price-lowtohigh",
    } = req.query;
    const courseList = await Course.find({});
    if (courseList.length > 0) {
      res.status(200).json({ success: true, data: courseList });
    } else {
      res.status(200).json({ success: true, data: [] });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getStudentViewCourseDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const courseDetails = await Course.findById(id);
    if (courseDetails) {
      res.status(200).json({ success: true, data: courseDetails });
    } else {
      res.status(404).json({ success: false, message: "Course not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllStudentViewCourses,
  getStudentViewCourseDetails,
};
