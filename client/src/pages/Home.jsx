import React, { useEffect, useState } from "react";
//import axios from "../services/api"; // we’ll create this api.js file
import CourseCard from "../components/CourseCard"; // reusable card component


const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const sampleCourses = [
      { _id: 1, title: "React Basics", description: "Learn React" },
      { _id: 2, title: "Node.js Intro", description: "Learn Node backend" },
      { _id: 3, title: "MongoDB Guide", description: "Learn MongoDB database" }
    ];
    setCourses(sampleCourses); 
    /* const getCourses = async () => {
      try {
        const response = await axios.get("/courses");
        setCourses(response.data);
      } catch (err) {
        console.error('Error fetching courses:', err);
      }
    };

    getCourses(); */
  }, []);

  return (
    <div >
      <h1 >Available Courses</h1>
      {courses.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      ) : (
        <p>No courses available yet.</p>
      )}
    </div>
  );
};

export default Home;
