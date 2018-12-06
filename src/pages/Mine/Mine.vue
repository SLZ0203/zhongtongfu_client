<!--我的页面-->
<template>
  <section class="my_wrap">
    <header class="header">我的</header>
    <div class="header_wrap">
      <img src="../../../static/images/商品.jpg" alt="">
      <span class="username">刘启明</span>
    </div>
    <ul class="mine_list">
      <li class="list_item bottom" @click="$router.push('/call')">
        <div class="outer_wrap">
          <img src="../../../static/images/icon_我的_联系客服.png" alt="">
          <span>联系客服</span>
        </div>
        <img src="../../../static/images/icon_更多.png" alt="">
      </li>
      <li class="list_item bottom" @click="$router.push('/change')">
        <div class="outer_wrap">
          <img src="../../../static/images/icon_我的_修改信息.png">
          <span>信息修改</span>
        </div>
        <img src="../../../static/images/icon_更多.png" alt="">
      </li>
      <li class="list_item" @click="$router.push('/my_order')">
        <div class="outer_wrap">
          <img src="../../../static/images/icon_我的_联系客服.png" alt="">
          <span>我的订单</span>
        </div>
        <div>
          <span class="order_type">无法处理</span>
          <img src="../../../static/images/icon_更多.png" alt="">
        </div>
      </li>
      <li class="list_item" @click="$router.push('/back')">
        <div class="outer_wrap">
          <img src="../../../static/images/icon_我的_我的退单.png" alt="">
          <span>我的退款</span>
        </div>
        <img src="../../../static/images/icon_更多.png" alt="">
      </li>
      <li class="list_item" @click="$router.push('/setting')">
        <div class="outer_wrap">
          <img src="../../../static/images/icon_我的_个人设置.png" alt="">
          <span>个人设置</span>
        </div>
        <img src="../../../static/images/icon_更多.png" alt="">
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: "Mine",
    data(){
      return{
        title:'我的'
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .my_wrap
    width 100%
    span,img
      vertical-align middle
    .header
      width 100%
      height 64px
      line-height 34px
      text-align: center
      background rgba(255, 255, 255, 1)
      padding 30px 16px 0
      box-sizing border-box
      position relative
      z-index 100
      font-size 18px
      font-family PingFangSC-Medium
      font-weight 500
      color rgba(58, 61, 74, 1)
    .header_wrap
      width 100%
      height 88px
      padding 8px 16px
      box-sizing border-box
      background-color rgba(255,255,255,1)
      background-image url("../../../static/images/icon_我的_bj.png")
      background-repeat no-repeat
      background-position right center
      img
        width 56px
        height 56px
        border-radius 50%
      .username
        font-size:18px
        font-family:PingFangSC-Medium
        font-weight:500
        color:rgba(58,61,74,1)
        line-height:26px
        margin-left 13px
    .mine_list
      width 100%
      margin-top 8px
      .list_item
        width 100%
        padding 0 16px 0 17px
        box-sizing border-box
        height 56px
        background rgba(255,255,255,1)
        display flex
        align-items center
        justify-content space-between
        .outer_wrap
          img
            margin-right 14px
          span
            font-size:16px
            font-family:PingFangSC-Regular
            font-weight:400
            color:rgba(58,61,74,1)
            line-height:22px
        .order_type
          font-size:14px
          font-family:PingFangSC-Regular
          font-weight:400
          color:rgba(238,81,71,1)
          line-height:20px
      .bottom
        margin-bottom 8px
</style>
