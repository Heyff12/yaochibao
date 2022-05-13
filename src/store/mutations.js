import TYPES from "./types";

const mutations = {
  [TYPES.SET_AUCTION_LIST](state, { auctionList, isHttpSuccess }) {
    state.auctionList = auctionList;
    state.getAuctionListSuccess = isHttpSuccess;
  },
};
export default mutations;
