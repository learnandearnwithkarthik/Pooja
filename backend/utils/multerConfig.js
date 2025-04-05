const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinaryConfig");

// Setup Cloudinary Storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "food-items", // Folder name in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"], // Allowed formats
  },
});

const upload = multer({ storage });

module.exports = upload;
