import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const fetchPlaylists = async (req, res) => {
  try {
    console.log("Fetching tracks from Cloudinary...");
    // Dynamically list all files in the "music" folder using the "raw" resource type for mp3s
    const response = await cloudinary.api.resources({
      resource_type: "video", // <-- Switch to "video" for mp3s
      type: "upload",
      prefix: "music/",
      max_results: 100,
    });

    console.log("Cloudinary response:", response);

    if (!response.resources) {
      throw new Error("No resources found in Cloudinary response");
    }

    // Map over the returned resources to create playlist entries
    const tracks = response.resources.map((file, index) => ({
      id: index + 1,
      title: file.public_id.split("/").pop().replace(/_/g, " "),
      // Use the public_id to derive the artist name if stored in context or set a fallback
      artist: file.context?.custom?.artist || "Unknown Artist",
      url: file.secure_url,
    }));

    console.log("Formatted tracks:", tracks);
    res.status(200).json({ tracks });
  } catch (error) {
    console.error("Error fetching playlists:", error);
    res.status(500).json({ error: "Failed to fetch playlists" });
  }
};