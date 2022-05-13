import axios from "axios";
const baseUrl =
  process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "";

export default {
  async getAuctionList() {
    try {
      const { data } = await axios.get(`${baseUrl}/auction-bidder`);
      return data;
    } catch (e) {
      throw new Error(e);
    }
  },
};
