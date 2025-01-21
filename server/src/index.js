const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

//port options
const port = process.env.PORT || 3001;

//middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());

//routes

//server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
