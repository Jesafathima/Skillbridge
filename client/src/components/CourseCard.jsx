import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div >
      {course.mediaUrl && (
        <img src={course.mediaUrl} alt={course.title}/>
      )}
      <div >
        <h2>{course.title}</h2>
        <p >{course.description}</p>
        <button>
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
