const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const connectDb = require("./database/mongodb");
const errorHandler = require("./utils/errorHandler");
const authRouter = require("./routes/authRoutes");
const mediaRouter = require("./routes/mediaRoutes");
const courseRouter = require("./routes/courseRoutes");

//port options
const port = process.env.PORT || 3001;

//middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
connectDb();

//routes
app.use("/auth", authRouter);
app.use("/media", mediaRouter);
app.use("/courses", courseRouter);

// error handlers
app.use(errorHandler);

//server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
