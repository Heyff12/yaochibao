import TYPES from "./types";

const mutations = {
  [TYPES.SET_AUCTION_LIST](state, auctionList) {
    state.auctionList = auctionList;
  },
};
export default mutations;
