const router = require("express").Router();
const {
  getDataNilai,
  getDataMhs,
  getNilaiRata,
  postDataNilai,
  editDataNilai,
  deleteDataNilai,
} = require("../controller/data_nilai");

router.get("/", getDataNilai);
router.get("/:id", getDataMhs);
router.get("/:id/rata-rata", getNilaiRata);
router.post("/", postDataNilai);
router.put("/:id", editDataNilai);
router.delete("/:id", deleteDataNilai);
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
