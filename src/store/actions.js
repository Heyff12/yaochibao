import service from "../service";
import TYPES from "./types";

const actions = {
  async getAuctionList({ commit }) {
    try {
      const data = await service.getAuctionList();
      commit(TYPES.SET_AUCTION_LIST, {
        auctionList: data.slice(0, 5),
        isHttpSuccess: true,
      });
    } catch (e) {
      console.error(e);
      commit(TYPES.SET_AUCTION_LIST, {
        auctionList: [],
        isHttpSuccess: false,
      });
    }
  },
};
export default actions;
