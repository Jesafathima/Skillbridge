import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        title: { type: String, required: true}, 
        description: { type: String, required: true},
        content: { type: String, required: true }, 
        mediaUrl: { type: String },
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }   
    },
    { timestamps: true }
);
export default mongoose.model("Course", courseSchema);