const mongoose = require("mongoose");
const dotenv = require("dotenv");

// code for uncaught exception 1 will come first
process.on("uncaughtException", (err) => {
  console.log(
    "UNCAUGHT EXCEPTION! like some variable is not defined 💥 shutting down"
  );
  console.log(err.name, err.message);
  process.exit(1);
});
//  import app js 2
const app = require("./app");

// select the dot env file 3
dotenv.config({ path: "./config.env" });

//  make the db connection string with the pass attached 4
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);

// console.log("db", DB);
// connect the mongoose to db string 5
// the options are not to be learnt they are just for deprcation warnings
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfull ✅");
  });

//   define port and start the server 6
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App Running on Port ${port} 🆗`);
});

// handle the unhandled rejectio for error messages in console to find where the error is
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
