import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
//import Loading from "../components/Loading";

const CourseDetails =() => {
    const { id } = useParams();
    const [course, setCourse] = useState (null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await api.get(`/courses/${id}`);
        setCourse(response.data);
      } catch (err) {
        console.error("Error fetching course:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <p>Loading....</p>;

  if (!course) return <p>Course not found.</p>;

  return (
    <div className="bg-gray-200 flex h-screen">
      <div className="w-1/2 p-10  overflow-y-auto bg-black/20">
        <h1 className="text-3xl text-orange-700 font-bold mb-4">{course.title}</h1>
        <p className="text-gray-700 mb-10">{course.description}</p>

        <div className="prose max-w-none mb-10">
          <h3 className="text-orange-500 mb-2 ">Course Content</h3>
          {course.content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      
      <div className="w-1/2 p-10 overflow-y-auto bg-orange-300">
      {
        course.mediaUrl && (
        <video
          src={course.mediaUrl}
          controls
          className="w-full text-center rounded-lg mb-4 h-80"
        />)
      } 
    </div>
      
    </div>
    
  );
}

export default CourseDetails;