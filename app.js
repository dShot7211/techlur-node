const express = require("express");
const userRouter = require("./routes/userRoute");
const helmet = require("helmet");
const app = express(); // 1

app.use(express.json({ limit: "10kb" })); // 2

// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'", "data:", "blob:"],
//       baseUri: ["'self'"],
//       connectSrc: ["'self'", ...connectSrcUrls],
//       scriptSrc: ["'self'", ...scriptSrcUrls],
//       styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
//       workerSrc: ["'self'", "data:", "blob:"],
//       objectSrc: ["'none'"],
//       imgSrc: ["'self'", "blob:", "data:", "https:"],
//       fontSrc: ["'self'", ...fontSrcUrls],
//       childSrc: ["'self'", "blob:"],
//       frameSrc: ["'self'", ...frameSrcUrls],
//       upgradeInsecureRequests: [],
//     },
//   })
// );
app.use(helmet.crossOriginEmbedderPolicy({ policy: "credentialless" }));

// serve static files like images html files etc
// we use middlware 3
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/users", userRouter); // 3

// handle unhandled routes 4
app.all("*", (req, res, next) => {
  res.status(404).json({ satus: "failed", message: "URL Not Found" });
});

module.exports = app;
