import axios from "axios";
const apiPath = {
  production: "",
  development: "http://localhost:3000",
  test: "http://localhost:3001",
};
const baseUrl = apiPath[process.env.NODE_ENV];
// const settleDetailBaseUrl = `${baseUrl}/merchant-settled/settlement-account`;
const settleDetailBaseUrl = "merchant-settled";

export default {
  async getSettleDetail({ sid, testPath }) {
    try {
      // const currentPath = testPath
      //   ? `settle-detail${testPath}`
      //   : `/${sid}/confirmation`;
      const currentPath = testPath
        ? `${settleDetailBaseUrl}${testPath}`
        : `${settleDetailBaseUrl}`;
      // const { data } = await axios.get(`${settleDetailBaseUrl}${currentPath}`);
      const { data } = await axios.get(`${baseUrl}/${currentPath}`);
      return data;
    } catch (e) {
      throw new Error(e);
    }
  },
};
