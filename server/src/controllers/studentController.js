const Course = require("../models/Course");
const StudentCourses = require("../models/StudentCourses");

const getAllStudentViewCourses = async (req, res) => {
  try {
    const {
      category = [],
      level = [],
      primaryLanguage = [],
      sortBy = "price-lowtohigh",
    } = req.query;
    let filter = {};
    if (category.length > 0) {
      filter.category = { $in: category.split(",") };
    }
    if (level.length > 0) {
      filter.level = { $in: level.split(",") };
    }
    if (primaryLanguage.length > 0) {
      filter.primaryLanguage = { $in: primaryLanguage.split(",") };
    }
    let sort = {};
    switch (sortBy) {
      case "price-lowtohigh":
        sort.pricing = 1;
        break;
      case "price-hightolow":
        sort.pricing = -1;
        break;
      case "title-ascending":
        sort.title = 1;
        break;
      case "title-descending":
        sort.title = -1;
        break;
      default:
        sort.pricing = 1;
        break;
    }
    const courseList = await Course.find({ filter }).sort(sort);
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

const checkCoursePurchaseInfo = async (req, res) => {
  try {
    const { id, studentId } = req.params;
    const studentCourses = await StudentCourses.findOne({
      userId: studentId,
    });

    const ifStudentAlreadyBoughtCurrentCourse =
      studentCourses.courses.findIndex((item) => item.courseId === id) > -1;
    res.status(200).json({
      success: true,
      data: ifStudentAlreadyBoughtCurrentCourse,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

module.exports = {
  getAllStudentViewCourses,
  getStudentViewCourseDetails,
  checkCoursePurchaseInfo,
};
