const { deleteMedia, uploadMedia } = require("../utils/cloudinary");

const deleteMediaFromCloudinary = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ success: false, message: "Invalid ID" });
    }
    await deleteMedia(id);
    res
      .status(200)
      .json({ success: true, message: "Media deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

const uploadMediaToCloudinary = async (req, res) => {
  try {
    const { path } = req.file;
    const result = await uploadMedia(path);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

module.exports = {
  deleteMediaFromCloudinary,
  uploadMediaToCloudinary,
};
