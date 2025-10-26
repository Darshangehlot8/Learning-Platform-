// server/controllers/courseController.js
const Course = require('../models/Course');

// @desc    Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('teacher', 'name'); // Get teacher's name
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Create a new course
// @access  Private (Teacher/Admin only)
exports.createCourse = async (req, res) => {
  const { title, description, price } = req.body;

  try {
    const newCourse = new Course({
      title,
      description,
      price,
      teacher: req.user.id, // Comes from authMiddleware (JWT)
    });

    const course = await newCourse.save();
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
// ... other functions (getCourseById, addVideo, etc.)
