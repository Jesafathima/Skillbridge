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
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        <Link to={`/courses/${course._id}`}>
          <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;