const { getMatkul, getMatkulById } = require("../model/mata_kuliah");
const helper = require("../helper/index");

module.exports = {
  getMatkul: async (request, response) => {
    try {
      const result = await getMatkul();
      return helper.response(response, 200, "Success get data", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getMatkulById: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await getMatkulById(id);

      if (result.length > 0) {
        return helper.response(response, 200, "Succes get Data By Id", result);
      } else {
        return helper.response(response, 404, `Matkul By Id : ${id} Not Found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
