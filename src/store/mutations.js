import TYPES from "./types";

const mutations = {
  [TYPES.SET_SETTLE_DETAIL](state, { settleDetail, isHttpSuccess }) {
    state.settleDetail = settleDetail;
    state.getSettleDetailSuccess = isHttpSuccess;
    if (isHttpSuccess) {
      localStorage.setItem("settleDetail", JSON.stringify(settleDetail));
    }
  },
};
export default mutations;
