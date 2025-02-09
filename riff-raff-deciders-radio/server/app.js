import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import apiRoutes from "./routes/api.js";
import cloudinaryRoutes from "./routes/cloudinaryRoutes.js";
import dotenv from "dotenv";

dotenv.config(); // Ensure this line is present to load environment variables

const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/riff-raff-deciders-radio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// API Routes
app.use('/api', apiRoutes);
app.use('/api/cloudinary', cloudinaryRoutes);

console.log("Cloud name:", process.env.CLOUDINARY_CLOUD_NAME);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});