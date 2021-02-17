const connection = require("../config/mysql");

module.exports = {
  getDataNilai: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM data_nilai", (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
  getDataMhs: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT nama_matkul,nilai FROM data_nilai LEFT JOIN mahasiswa ON data_nilai.id_mhs= mahasiswa.id_mhs JOIN mata_kuliah ON data_nilai.id_matkul= mata_kuliah.id_matkul WHERE mahasiswa.id_mhs = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getDataNilaiById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM data_nilai WHERE id_nilai = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },

  postDataNilai: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO data_nilai SET ?",
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              id_nilai: result.insertId,
              ...setData,
              //... mengambil semua data di setdata
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  editDataNilai: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE data_nilai SET ? WHERE id_nilai = ?",
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              id_nilai: id,
              ...setData,
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  deleteDataNilai: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM data_nilai WHERE id_nilai = ?",
        id,
        (error, result) => {
          if (!error) {
            const newResult = {
              id: id,
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  getNilaiRata: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT AVG(nilai) as nilaiRataRata FROM data_nilai WHERE id_mhs = ?",
        id,
        (error, result) => {
          !error ? resolve(result[0].nilaiRataRata) : reject(new Error(error));
        }
      );
    });
  },
  checkMahasiswaById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM mahasiswa WHERE id_mhs = ?`,
        id,
        (error, data) => {
          !error ? resolve(data) : reject(new Error(error));
        }
      );
    });
  },
  checkMatkulById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM data_nilai WHERE id_matkul = ?`,
        id,
        (error, data) => {
          !error ? resolve(data) : reject(new Error(error));
        }
      );
    });
  },
};
