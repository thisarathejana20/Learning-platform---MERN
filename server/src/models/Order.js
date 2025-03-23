const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  username: String,
  orderStatus: String,
  paymentMethod: String,
  paymentStatus: String,
  orderDate: Date,
  paymentId: String,
  payerId: String,
  instructorId: String,
  instructorName: String,
  courseTitle: String,
  courseId: String,
  coursePrice: String,
});

module.exports = mongoose.model("Order", orderSchema);
