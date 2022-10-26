import service from "../service";
import TYPES from "./types";

const actions = {
  async getSettleDetail({ commit }, payload) {
    try {
      const data = await service.getSettleDetail({ sid: payload.sid });
      commit(TYPES.SET_SETTLE_DETAIL, {
        settleDetail: data,
        isHttpSuccess: true,
      });
    } catch (e) {
      console.error(e);
      commit(TYPES.SET_SETTLE_DETAIL, {
        settleDetail: [],
        isHttpSuccess: false,
      });
    }
  },
};
export default actions;
