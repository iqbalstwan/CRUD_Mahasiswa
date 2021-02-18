const route = require("express").Router();

const mahasiswa = require("./routes/mahasiswa");
const mata_kuliah = require("./routes/mata_kuliah");
const data_nilai = require("./routes/data_nilai");

route.use("/mahasiswa", mahasiswa);
route.use("/matkul", mata_kuliah);
route.use("/nilai", data_nilai);

module.exports = route;
