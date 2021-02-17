const router = require("express").Router();
const { getMahasiswa, getMahasiswaById } = require("../controller/mahasiswa");

router.get("/", getMahasiswa);
router.get("/:id", getMahasiswaById);

// router.post("/", (request, response) => {
//   response.send("post berhasil!");
// });

// router.patch("/:id", (request, response) => {
//   response.send("patch berhasil!");
// });

// router.delete("/:id", (request, response) => {
//   response.send("delete berhasil");
// });

module.exports = router;
