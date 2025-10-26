// client/src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('/api/courses');
        setCourses(res.data);
      } catch (err) {
        console.error('Error fetching courses', err);
      }
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading courses...</div>;
  }

  return (
    <div className="course-list">
      <h1>Available Courses</h1>
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course._id} className="course-card">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>
              <strong>Instructor:</strong> {course.teacher.name}
            </p>
            <p>
              <strong>Price:</strong> ${course.price}
            </p>
            <Link to={`/course/${course._id}`}>View Course</Link>
          </div>
        ))
      ) : (
        <p>No courses available at this time.</p>
      )}
    </div>
  );
};

export default Home;
