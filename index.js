require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routerNavigation = require("./src");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/", routerNavigation);

app.get("*", (request, response) => {
  response.status(404).send("path not found !");
});

app.listen(process.env.PORT, process.env.IP, () => {
  console.log(
    `Express app is listening on host: ${process.env.IP} and port: ${process.env.PORT}`
  );
});
