import api from '../api'
import TYPES from './types'

const actions = {
    async getAuctionList ({ commit }) {
        try {
          const data = await api.getAuctionList()
          commit(TYPES.SET_AUCTION_LIST, data)
        } catch (e) {
          console.error(e)
          commit(TYPES.SET_AUCTION_LIST, [])
        }
      }
}
export default actions