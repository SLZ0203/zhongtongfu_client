<!--进行中订单详情页面-->
<template>
  <section class="detail_wrap">
    <TopHeader :title="title"/>
    <div class="scroll_wrap">
      <div>
        <div class="order_state">
          <img src="../../../../static/images/icon_维修.png" alt="">
          <p class="name">服务方案已确认！</p>
          <div class="hint_msg">工程师正在施工过程中…</div>
          <div class="btn_wrap">
            <span @click="$router.push('/submit_trouble')">转争议</span>
          </div>
        </div>
        <UserInfo/>
        <FinishOrderInfo>
          <span slot="state" class="state">施工中</span>
        </FinishOrderInfo>
        <ServerProject/>
        <OrderCourse/>
      </div>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import FinishOrderInfo from '../../../components/FinishOrderInfo/FinishOrderInfo'
  import OrderCourse from '../../../components/OrderCourse/OrderCourse'
  import UserInfo from '../../../components/UserInfo/UserInfo'
  import ServerProject from '../../../components/ServerProject/ServerProject'
  export default {
    name: "MyOrder",
    data() {
      return {
        title: '订单详情',
        isShow: false
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
      FinishOrderInfo,
      OrderCourse,
      UserInfo,
      ServerProject
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .detail_wrap
    width 100%
    height 100%
    position relative
    .scroll_wrap
      width 100%
      height 610px
      overflow hidden
      .state
        color:rgba(248,162,16,1);
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
        .btn_wrap
          margin-top 16px
          span
            font-size: 14px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(112, 117, 127, 1);
            text-align: center
            line-height 32px
            display inline-block
            width: 130px;
            height: 32px;
            background: rgba(249, 251, 254, 1);
            border-radius: 2px;
            border: 1px solid #D7DBE3;
      .hint
        width 100%
        padding 0 16px
        box-sizing border-box
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(161, 167, 179, 1);
        line-height: 18px;
</style>
