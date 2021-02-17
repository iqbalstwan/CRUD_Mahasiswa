const connection = require("../config/mysql");

module.exports = {
  getMatkul: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM mata_kuliah", (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
  getMatkulById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM mata_kuliah WHERE id_mhs = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
};
