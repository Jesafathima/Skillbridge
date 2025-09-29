import React from "react";
import { Link } from "react-router-dom";  

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
     {/*  {course.mediaUrl && (
        <img
          src={course.mediaUrl}
          alt={course.title}
          className="h-40 w-full object-cover"
        />
      )} */}
      <div className="p-4 text-center bg-yellow-50 border-4 border-gray-800 rounded-lg w-80">
        <h2 className="text-xl text-center font-semibold text-gray-800 mb-2">{course.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        <Link to={`/courses/${course._id}`}>
          <button className="mt-3 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-yellow-50 hover:text-gray-800 border-2 border-[#314356] transition-colors duration-100">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;