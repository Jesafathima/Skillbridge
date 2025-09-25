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
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-4">{course.description}</p>

      {/* If mediaUrl is a video */}
      {course.mediaUrl && (
        <video
          src={course.mediaUrl}
          controls
          className="w-full rounded-lg mb-4"
        />
      )}

      <div className="prose max-w-none">
        {course.content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;