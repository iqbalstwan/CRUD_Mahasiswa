const router = require("express").Router();
const { getMatkul, getMatkulById } = require("../controller/mata_kuliah");

router.get("/", getMatkul);
router.get("/:id", getMatkulById);

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
