require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routerNavigation = require("./src");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/", routerNavigation);

// const mahasiswa = require("./src/routes/mahasiswa");
// app.use("/mahasiswa", mahasiswa);

// app.get("/user", (request, response) => {
//     const data = {
//       name: "iqbal",
//       class: "Fullstack",
//     };
//     response.send(data);
//   });

//   app.post("/user", (request, response) => {
//     response.send("post berhasil!");
//   });

//   app.patch("/user", (request, response) => {
//     response.send("patch berhasil!");
//   });

//   app.delete("/user", (request, response) => {
//     response.send("delete berhasil");
//   });

app.get("*", (request, response) => {
  response.status(404).send("path not found !");
});

app.listen(process.env.PORT, process.env.IP, () => {
  console.log(
    `Express app is listening on host: ${process.env.IP} and port: ${process.env.PORT}`
  );
});
