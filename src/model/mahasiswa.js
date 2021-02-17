const connection = require("../config/mysql");

module.exports = {
  getMahasiswa: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM mahasiswa", (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
  getMahasiswaById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM mahasiswa WHERE id_mhs = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
};
