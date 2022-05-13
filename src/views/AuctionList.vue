<template>
  <img alt="Vue logo" src="../assets/logo.png">
  {{auctionList}}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AuctionList',
  computed: mapState({
    auctionList: state => state.auctionList
  }),
  methods: {
  },
  created () {
    this.$store.dispatch('getAuctionList')
  }
}
</script>

<style lang="less">
</style>
