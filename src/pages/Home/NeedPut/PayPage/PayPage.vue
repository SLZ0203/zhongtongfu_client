<template>
  <section>
    <TopHeader :title="title"/>
    <div class="hint_wrap" v-show="isShow">
      <img src="../../../../../static/images/icon_通知.png" alt="">
      <span>请在 2018-11-04 前 完成支付！</span>
      <img src="../../../../../static/images/icon_通知关闭1.png" class="close" @click="isShow=false">
    </div>
    <div class="money_box">
      <div>
        <p class="title">预约金</p>
        <p class="detail">维修家庭中路由器及网线问题</p>
      </div>
      <div class="money_num">￥30</div>
    </div>
    <ul class="payment_list">
      <li class="payment_item" @click="num=0">
        <img src="../../../../../static/images/微信支付.png">
        <span class="pay_name">微信支付</span>
        <span class="checked" :class="{on: num===0}"></span>
      </li>
      <li class="payment_item" @click="num=1">
        <img src="../../../../../static/images/翼支付.png">
        <span class="pay_name">翼支付</span>
        <span class="checked" :class="{on: num===1}"></span>
      </li>
    </ul>
    <p class="agree">
      <img src="../../../../../static/images/icon_未选中（小）.png" v-if="isChecked" @click="updataImg">
      <img src="../../../../../static/images/icon_选中（小）.png" v-else @click="updataImg">
      我同意并遵守<span @click="$router.push('/agreement')">《客户服务协议》</span>
    </p>
    <div class="hint_box">提示：装维人员上门前 2小时内 不允许用户执行退单操作，在支付全部服务费时可抵扣 ￥30 服务费</div>
    <footer class="pay_btn">支付</footer>
  </section>
</template>

<script>
  export default {
    name: "PayPage",
    data() {
      return {
        title: '支付预约金',
        num: 0,
        isChecked: true,
        isShow: true,
      }
    },
    /*mounted(){
      this.$store.dispatch('getServiceProtocol')
    },*/
    methods: {
      updataImg() {
        this.isChecked = !this.isChecked
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"

  .hint_wrap
    width 100%
    height 40px
    line-height 40px
    background rgba(254, 236, 207, 1)
    font-size 14px
    font-family PingFangSC-Regular
    font-weight 400
    color rgba(248, 162, 16, 1)
    padding 0 16px
    box-sizing border-box
    position relative
    img, span
      vertical-align middle
    .close
      position absolute
      top 13px
      right 16px

  .money_box
    width 100%
    height 82px
    background: rgba(255, 255, 255, 1)
    padding 16px 16px
    box-sizing border-box
    display flex
    justify-content space-between
    align-items center
    .title
      font-size 16px
      font-family PingFangSC-Medium
      font-weight 500
      color rgba(58, 61, 74, 1)
      margin-bottom 8px
    .detail
      font-size: 14px
      font-family: PingFangSC-Regular
      font-weight: 400
      color: rgba(112, 117, 127, 1)
      line-height: 20px
    .money_num
      font-size 20px
      font-family PingFangSC-Medium
      font-weight 500
      color rgba(236, 88, 79, 1)
      line-height 24px

  .payment_list
    width 100%
    padding-left 16px
    box-sizing border-box
    background rgba(255, 255, 255, 1)
    margin-top 8px
    .payment_item
      height 56px
      line-height 56px
      position relative
      bottom-border-1px(#E5EAF3)
      img, span
        vertical-align middle
      img
        margin-right 5px
      .pay_name
        font-size: 16px
        font-family: PingFangSC-Regular
        font-weight: 400
        color: rgba(58, 61, 74, 1)
        line-height: 22px
      .checked
        display inline-block
        width 16px
        height 16px
        position absolute
        right 16px
        top 17px
        background url("../../../../../static/images/icon_未选中（小）.png") no-repeat
        &.on
          background url("../../../../../static/images/icon_选中（小）.png") no-repeat

  .agree
    margin-top 16px
    padding-left 16px
    font-size: 14px
    font-family: PingFangSC-Regular
    font-weight: 400;
    color: rgba(161, 167, 179, 1);
    line-height: 20px;
    img, span
      vertical-align middle
    span
      color #EE5147

  .hint_box
    padding 0 16px
    font-size: 14px
    font-family: PingFangSC-Regular
    font-weight: 400;
    color: rgba(161, 167, 179, 1);
    line-height: 18px;
    margin-top 8px

  .pay_btn
    width 100%
    height 50px
    text-align center
    line-height 50px
    position fixed
    bottom 0
    background rgba(236, 88, 79, 1)
    font-size 16px
    font-family PingFangSC-Medium
    font-weight 500
    color rgba(255, 255, 255, 1)
</style>
