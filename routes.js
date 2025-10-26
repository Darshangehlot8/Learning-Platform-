// server/routes/courses.js
const express = require('express');
const router = express.Router();
const {
  getAllCourses,
  createCourse,
} = require('../controllers/courseController');
const auth = require('../middleware/authMiddleware'); // Your JWT auth middleware

// @route   GET api/courses
router.get('/', getAllCourses);

// @route   POST api/courses
router.post('/', auth, createCourse); // 'auth' protects this route

module.exports = router;
