import { createStore, createLogger } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const debug = process.env.NODE_ENV !== "production";

const state = () => ({
  auctionList: [],
  getAuctionListSuccess: true,
});

const store = createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {},
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export { store };
