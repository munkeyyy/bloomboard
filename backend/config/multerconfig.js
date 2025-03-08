import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinaryconfig.js";

// Configure Multer with Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "pinterest_clone", // Cloudinary folder where files will be stored
    allowedFormats: ["jpg", "jpeg", "png", "gif", "mp4", "mov", "avif"], // Allowed file types
    resource_type: "auto", // Auto-detect file type (image, video, etc.)
  },
});

const upload = multer({ storage });

export default upload;
