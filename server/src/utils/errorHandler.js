const errorHandler = (err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong" });
};

module.exports = errorHandler;
