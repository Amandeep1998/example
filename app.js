// let http = require("http");
// let calc = require("./calc");

// http
//   .createServer(function (req, res) {
//     res.write("Hey NodeJS long time no see");
//     res.end();
//   })
//   .listen(8080);

const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/userRouter");
const url = "mongodb://localhost/testdb";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", function () {
  console.log("DB connected");
});

// app.get("/", (req, res) => {
//   res.send("Hello Man");
// });
app.use(express.json());

app.use("/users", userRouter);

app.listen(9000, () => {
  console.log("Server is up on port 9000");
});
