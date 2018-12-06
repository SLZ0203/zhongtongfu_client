<!--已完成订单详情页面-->
<template>
  <section class="finish_wrap">
    <TopHeader :title="title"/>
    <div class="scroll_wrap" :class="{height:isShow}">
      <div>
        <div class="order_state" v-show="!isShow">
          <img src="../../../../static/images/icon_成功.png" alt="">
          <p class="name">订单已完成！</p>
          <div class="hint_msg">
            您已支付<span class="price">￥30</span>
            上门服务预约金，在服务工程师上门前还可退还，在支付全部服务费时可抵扣
            <span class="price">￥30</span>服务费
          </div>
          <div class="btn_wrap">
            <span @click="isShow=true">评 价</span>
            <span @click="$router.push('/send_trouble')">故障申报</span>
          </div>
        </div>
        <div class="rating_order" v-show="isShow">
          <img src="../../../../static/images/icon_评价.png" alt="">
          <p class="name">评价订单！</p>
          <div class="hint_msg">对该订单进行评论~</div>
          <div class="btn_wrap">
            <span @click="$router.push('/send_trouble')">转申报</span>
          </div>
        </div>
        <UserInfo/>
        <FinishOrderInfo>
          <span slot="state" class="state">已完成</span>
        </FinishOrderInfo>
        <ServerProject/>
        <div class="hint">提示：您的需求已经提交客服，正在为您匹配相应服务。请保持电话畅通，以便服务与您联系。</div>
        <OrderCourse/>
      </div>
    </div>
    <div class="order_btn" v-show="isShow">
      <div class="no">不评价</div>
      <div class="yes" @click="$router.push('/rating_order')">评价</div>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import FinishOrderInfo from '../../../components/FinishOrderInfo/FinishOrderInfo'
  import ServerProject from '../../../components/ServerProject/ServerProject'
  import OrderCourse from '../../../components/OrderCourse/OrderCourse'
  import UserInfo from '../../../components/UserInfo/UserInfo'
  import Shade from '../../../components/Shade/Shade'

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
      Shade,
      ServerProject,
      UserInfo
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .finish_wrap
    width 100%
    height 100%
    position relative
    .scroll_wrap
      width 100%
      height 633px
      overflow hidden
      &.height
        height 583px
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
      .rating_order
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
      .state
        color:rgba(46,171,89,1);
      .hint
        width 100%
        padding 0 16px
        box-sizing border-box
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(161, 167, 179, 1);
        line-height: 18px;
    .blank
      width 100%
      height 50px
      background #fff
    .order_btn
      width 100%
      height 50px
      position fixed
      bottom 0
      display flex
      .yes,.no
        width 50%
        height 50px
        line-height 50px
        text-align: center
        font-size:16px;
        font-weight:500;
        color:rgba(255,255,255,1);
      .no
        background:rgba(51,57,75,1);
      .yes
        background:rgba(238,81,71,1);
</style>
