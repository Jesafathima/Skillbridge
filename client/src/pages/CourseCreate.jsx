import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const CourseCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //const token = localStorage.getItem("token");
      const response = await api.post(
        "/courses",{ title, description, mediaUrl, content },
        //{headers: { Authorization: `Bearer ${token}`},}
      );
      setSuccess("Course created successfully!");
      setError("");
      setTimeout(() => navigate(`/courses/${response.data._id}`), 1500); // redirect
    } catch (err) {
      console.error(err);
      setError("Error creating course. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Course</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text" placeholder="Course Title" value={title} onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" required
          />
          <textarea placeholder="Course Description" value={description} onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" rows="3" required
          ></textarea>
          <input
            type="text" placeholder="Media URL (Video/Image)" value={mediaUrl} onChange={(e) => setMediaUrl(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            placeholder="Course Content (Markdown/Text)" value={content} onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" rows="6" required
          ></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseCreate;
