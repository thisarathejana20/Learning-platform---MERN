const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const connectDb = require("./database/monodb");

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

//server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
