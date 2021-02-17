const {
  getDataNilai,
  postDataNilai,
  editDataNilai,
  getDataMhs,
  getDataNilaiById,
  getNilaiRata,
  deleteDataNilai,
} = require("../model/data_nilai");
const { getMahasiswaById } = require("../model/mahasiswa");
const helper = require("../helper/index");

module.exports = {
  getDataNilai: async (request, response) => {
    try {
      const result = await getDataNilai();
      return helper.response(response, 200, "Success get data", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },

  getDataNilaiById: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await getDataNilaiById(id);

      if (result.length > 0) {
        return helper.response(response, 200, "Succes get Data By Id", result);
      } else {
        return helper.response(response, 404, `Data By Id : ${id} Not Found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getDataMhs: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await getMahasiswaById(id);
      result[0].dataNilai = await getDataMhs(id);
      return helper.response(response, 200, "Get id Success", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getNilaiRata: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await getMahasiswaById(id);
      result[0].dataNilai = await getDataMhs(id);
      result[0].nilaiRataRata = await getNilaiRata(id);
      if (result.length > 0) {
        return helper.response(response, 200, "Succes get Data By Id", result);
      } else {
        return helper.response(response, 404, `Data By Id : ${id} Not Found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },

  postDataNilai: async (request, response) => {
    try {
      const { id_mhs, id_matkul, nilai, keterangan } = request.body;
      const setData = {
        id_mhs,
        id_matkul,
        nilai,
        keterangan,
      };
      if (setData.id_mhs === "") {
        return helper.response(response, 404, "Input Id Mahasiswa");
      } else if (setData.id_matkul === "") {
        return helper.response(response, 404, "Input Id Mata Kuliah");
      } else if (setData.nilai === "") {
        return helper.response(response, 404, "Input Nilai");
      } else if (setData.nilai === "") {
        return helper.response(response, 404, "Input Nilai");
      } else {
        const result = await postDataNilai(setData);
        return helper.response(response, 201, "Data Created", result.id_nilai);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  editDataNilai: async (request, response) => {
    try {
      const { id } = request.params;
      const { id_mhs, id_matkul, nilai, keterangan } = request.body;
      const setData = {
        id_mhs,
        id_matkul,
        nilai,
        keterangan,
      };
      if (setData.id_mhs === "") {
        return helper.response(response, 404, ` Input id mahasiswa!`);
      } else if (setData.id_matkul === "") {
        return helper.response(response, 404, ` Input id matkul!`);
      } else {
        const checkId = await getDataNilaiById(id);
        if (checkId.length > 0) {
          const result = await editDataNilai(setData, id);
          return helper.response(response, 200, "Update Data Done", result);
        } else {
          return helper.response(response, 404, "Not found", result);
        }
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  deleteDataNilai: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await deleteDataNilai(id);
      return helper.response(response, 200, "Delete Success", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
