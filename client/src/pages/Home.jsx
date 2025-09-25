import React, { useEffect, useState } from "react";
//import axios from "../services/api"; // we’ll create this api.js file
import CourseCard from "../components/CourseCard"; // reusable card component
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/Hero_Image.jpeg"; 


const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const sampleCourses = [
      { _id: 1, title: "React Basics", description: "Learn React online" },
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
      {/* Navigation bar Section */}
      <Navbar/>

      {/* Hero Section */}
      <section className="relative">
        <img
          src={heroImage}
          alt="SkillBridge Banner"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Update your skills without limits
          </h1>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Learn. Build. Share.
          </h1>
        </div>
        <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Explore Courses
        </button>
      </section>

      {/* Courses Section */}
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
      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default Home;
