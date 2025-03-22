const express = require("express");
const multer = require("multer");
const mediaRouter = express.Router();
const {
  deleteMediaFromCloudinary,
  uploadMediaToCloudinary,
} = require("../controllers/mediaController");

const upload = multer({ dest: "uploads/" });

mediaRouter.post("/upload", upload.single("file"), uploadMediaToCloudinary);

mediaRouter.delete("/delete/:id", deleteMediaFromCloudinary);

module.exports = mediaRouter;
