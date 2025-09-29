import { useEffect, useState } from "react";
import api from "../services/api"; // we’ll create this api.js file
import CourseCard from "../components/CourseCard"; // reusable card component
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/Hero_Image.jpeg"; 


const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    
    const getCourses = async () => {
      try {
        const response = await api.get("/courses");
        setCourses(response.data);
      } catch (err) {
        console.error('Error fetching courses:', err);
      }
    };

    getCourses();
  }, []);

  return (
    <div >
      {/* Navigation bar Section */}
      <Navbar/>

      {/* Hero Section */}
      {/* <section className="relative">
        <img
          src={heroImage} alt="SkillBridge Banner" className="w-full h-96 object-cover"/>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Update your skills without limits <br/>
            Learn. Build. Share.
          </h1>
        </div>
        <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Explore Courses
        </button>
      </section> */}

      <section className="relative flex items-center justify-between bg-black bg-opacity-40 h-screen">
        {/* Left Side - Text */}
        <div className="w-1/2 flex flex-col items-start justify-center pl-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Update your skills without limits <br />
            Learn. Build. Share.
          </h1>

          <button className="  bg-gray-800 text-white px-6 py-3  rounded-full hover:bg-gray-300 transition hover:text-gray-800">
            <a href="#courses">Explore Courses</a> 
          </button>
        </div>
        {/* Right Side - Image */}
        <div className="w-1/2 h-full">
          <img src={heroImage} alt="SkillBridge Banner" className="w-full h-full object-cover"/>
        </div>
      </section>

        

      {/* Courses Section style={{ display: "flex", flexWrap: "wrap", gap: "60px" }} */}
      <div id="courses" className="items-center justify-center bg-orange-200 " > 
        <h1 className="text-4xl text-[#314356] text-center font-bold pt-20 ">Available Courses</h1>
        {courses.length > 0 ? (
          <div className="flex flex-wrap gap-10 justify-center pt-10 mt-10 pb-10 ml-40 mr-40 -mb-10 ">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        ) : (
          <p>No courses available yet.</p>
        )}
      </div>
      
      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default Home;
