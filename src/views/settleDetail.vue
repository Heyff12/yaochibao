<template>
  <section>
    <h2 class="page-title">
      结算详情页
    </h2>
    <section v-if="getSettleDetailSuccess">
      <section class="amount">
        当前余额：<span>{{ formatAmount(settleDetail.amount) }}</span>
      </section>

      <section
        v-if="bills.length"
        id="list"
        class="settle-detail"
      >
        <section
          v-for="bill in bills"
          :key="bill.bid"
          class="bill-item"
        >
          <section class="pic">
            <img
              :src="bill.thumbnail"
              alt=""
            >
          </section>
          <section class="desc">
            <p class="title">
              <a href="#">{{ bill.name }}</a>
            </p>
            <p class="detail">
              {{ bill.detail }}
            </p>
            <p class="other">
              <span>费用：<i>{{ formatAmount(bill.price) }}</i></span>
            </p>
          </section>
        </section>
        <section class="bill-count">
          总记流水{{ settleDetail.billsCount }}条
        </section>
      </section>
      <section
        v-else
        id="noData"
        class="tips"
      >
        对不起，暂无数据！
      </section>
    </section>

    <section
      v-else
      id="serverError"
      class="tips"
    >
      服务异常，请稍后再试
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SettleDetail",
  computed: {
    ...mapState({
      settleDetail: (state) => state.settleDetail,
      getSettleDetailSuccess: (state) => state.getSettleDetailSuccess,
    }),
    bills() {
      return this.settleDetail.bills || [];
    },
  },
  created() {
    this.getSettleDetail();
  },
  methods: {
    getSettleDetail() {
      this.$store.dispatch("getSettleDetail");
    },
    formatAmount(amount) {
      if (amount === 0) {
        return "-";
      }
      const options = {
        style: "currency",
        currency: "CNY",
      };
      return amount.toLocaleString("zh-CH", options);
    },
  },
};
</script>

<style lang="less">
@import "../styles/variables.less";
.page-title {
  text-align: center;
}
.amount {
  text-align: center;
  span {
    font-size: 18px;
    color: @themeColor;
    font-weight: bold;
  }
}
.settle-detail {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  .bill-item {
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px dashed grey;
    display: flex;
    flex-direction: row;
    .pic {
      width: 30%;
      height: 180px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
        height: auto;
      }
    }
    .desc {
      flex: 1;
      margin-left: 20px;

      .title {
        font-size: 18px;
      }
      .detail {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .other {
        span {
          margin-right: 20px;
        }
        i {
          font-style: normal;
        }
      }
    }
  }
}
.tips {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
