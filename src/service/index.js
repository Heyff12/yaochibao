import axios from "axios";
const apiPath = {
  production: "",
  development: "http://localhost:3000",
  test: "http://localhost:3001",
};
const baseUrl = apiPath[process.env.NODE_ENV];

export default {
  async getSettleDetail(testPath) {
    try {
      const currentPath = testPath
        ? `settle-detail${testPath}`
        : "settle-detail";
      const { data } = await axios.get(`${baseUrl}/${currentPath}`);
      return data;
    } catch (e) {
      throw new Error(e);
    }
  },
};
