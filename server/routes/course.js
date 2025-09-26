// server/routes/courses.js
import express from "express";
import Course from "../models/Course.js";
import { protect, creatorOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE a new course (only for creators)
router.post("/", protect, creatorOnly, async (req, res) => {
  const { title, description, content, mediaUrl } = req.body;

  try {
    const newCourse = new Course({
      title,
      description,
      content,
      mediaUrl,
      creator: req.user._id, // attach logged-in creator's id
    });

    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all courses (any user)
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a course by ID
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE a course (only creator of that course)
router.put("/:id", protect, creatorOnly, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Only allow the creator to update
    if (course.creator.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to update this course" });
    }

    const { title, description, content, mediaUrl } = req.body;
    course.title = title;
    course.description = description;
    course.content = content;
    course.mediaUrl = mediaUrl;

    await course.save();
    res.json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a course (only creator)
router.delete("/:id", protect, creatorOnly, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    if (course.creator.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this course" });
    }

    await course.remove();
    res.json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
