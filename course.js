// server/models/Course.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }, // URL to S3/Cloudinary
  duration: { type: Number, required: true },
});

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'user', // Links to the User model
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  videos: [VideoSchema], // Array of video sub-documents
  enrolledStudents: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('course', CourseSchema);
