// server/server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/courses.js';
import authRoutes from './routes/authentication.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/courses', router);
app.use('/api/authentication', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected!"))
.catch(err => console.error(err));

// Sample route
app.get('/', (req, res) => {
  res.send('Hello Jesa from the backend!');
}); 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
