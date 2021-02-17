const { getMahasiswa, getMahasiswaById } = require("../model/mahasiswa");
const helper = require("../helper/index");

module.exports = {
  getMahasiswa: async (request, response) => {
    try {
      const result = await getMahasiswa();
      //   console.log(result);
      return helper.response(response, 200, "Success get data", result);
    } catch (error) {
      //   console.log(error);
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getMahasiswaById: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await getMahasiswaById(id);

      if (result.length > 0) {
        return helper.response(response, 200, "Succes get Data By Id", result);
      } else {
        return helper.response(
          response,
          404,
          `Mahasiswa By Id : ${id} Not Found`
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
