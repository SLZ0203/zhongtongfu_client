<!--我的非标准订单详情-->
<template>
  <section class="detail_wrap">
    <TopHeader :title="title"/>
    <div class="scroll_wrap">
      <div>
        <div class="order_state">
          <img src="../../../../../static/images/icon_成功.png" alt="">
          <p class="name">预约服务定订单提交成功！</p>
          <div class="hint_msg">
            您已支付<span class="price">￥30</span>
            上门服务预约金，在服务工程师上门前还可退还，在支付全部服务费时可抵扣
            <span class="price">￥30</span>服务费
          </div>
        </div>
        <!--<WaitOrderInfo>
          <span slot="state" class="state">待分配</span>
        </WaitOrderInfo>-->
        <OrderTime/>
        <div class="hint">提示：您的需求已经提交客服，正在为您匹配相应服务。请保持电话畅通，以便服务与您联系。</div>
        <OrderCourse/>
      </div>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import OrderTime from '../../../../components/OrderTime/OrderTime'
  import OrderCourse from '../../../../components/OrderCourse/OrderCourse'

  export default {
    name: "MyOrder",
    data() {
      return {
        title: '我的非标准订单',
      }
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.scroll_wrap', {
          click: true
        })
      })
    },
    components: {
      OrderTime,
      OrderCourse,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"

  .detail_wrap
    width 100%
    height 100%
    position relative
    .scroll_wrap
      width 100%
      height 610px
      overflow hidden
      .state
        color:rgba(236,88,79,1);
      .order_state
        width 100%
        padding 16px
        box-sizing border-box
        background #fff
        text-align: center
        .name
          margin 16px 0 8px
          font-size: 16px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(58, 61, 74, 1);
          line-height: 22px;
        .hint_msg
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(112, 117, 127, 1);
          line-height: 22px;
          .price
            font-weight: 500;
            color: rgba(236, 88, 79, 1);
      .hint
        width 100%
        padding 0 16px
        box-sizing border-box
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(161, 167, 179, 1);
        line-height: 18px;
    .popup
      width: 311px;
      height: 250px;
      padding: 24px 16px 0
      box-sizing border-box
      position absolute
      top 50%
      left 50%
      z-index 1000
      transform translate(-50%, -50%)
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 1px 0px 0px rgba(229, 234, 243, 1);
      text-align: center
      font-family: PingFangSC-Medium;
      .yes
        font-size: 16px;
        font-weight: 500;
        color: rgba(58, 61, 74, 1);
        line-height: 22px;
        margin-bottom 8px
      .wait
        font-size: 14px;
        color: rgba(112, 117, 127, 1);
        line-height: 21px;
      .ft_btn
        width 100%
        height: 48px;
        top-border-1px($main)
        font-size: 16px;
        text-align: center
        line-height 48px
        position absolute
        bottom 0
        left 0
        color: rgba(236, 88, 79, 1);
        box-shadow: 0px 1px 0px 0px rgba(229, 234, 243, 1);
</style>
