<template>
  <section>
    <h2 class="page-title">
      个人中心
    </h2>
    <router-link to="/settle-detail/12345">
      结算账户详情
    </router-link>
  </section>
</template>

<script>
export default {
  name: "UserCenter",
  methods: {
    gotoDetail() {
      this.$store.dispatch("getSettleDetail");
    },
  },
};
</script>

<style lang="less">
.page-title {
  text-align: center;
}
</style>
