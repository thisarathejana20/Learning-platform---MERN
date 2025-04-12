const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const connectDb = require("./database/mongodb");
const errorHandler = require("./utils/errorHandler");
const authRouter = require("./routes/authRoutes");
const mediaRouter = require("./routes/mediaRoutes");
const courseRouter = require("./routes/courseRoutes");
const studentRouter = require("./routes/studentRoutes");
const promClient = require("prom-client");

// prometheus metrics
const register = new promClient.Registry();
promClient.collectDefaultMetrics({ register });

const httpRequestCounter = new promClient.Counter({
  name: "http_request_count",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status"],
});

register.registerMetric(httpRequestCounter);

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

// metrics tracking middleware
app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status: res.statusCode,
    });
  });
  next();
});

app.use(express.json());
connectDb();

//routes
app.use("/auth", authRouter);
app.use("/media", mediaRouter);
app.use("/courses", courseRouter);
app.get("/students", studentRouter);

// metrics route
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.send(await register.metrics());
});

// error handlers
app.use(errorHandler);

//server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
