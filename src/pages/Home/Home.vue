<!--首页-->
<template>
  <section class="home_wrap">
    <header class="header">
      <nav class="navBar">
        <img src="../../../static/images/icon_首页_位置.png" alt="">
        <span class="address">海航实业大厦</span>
        <img src="../../../static/images/icon_首页_更多.png" alt="">
        <img src="../../../static/images/icon_首页_客服.png" alt="" class="service_icon">
      </nav>
      <input type="text" class="search" placeholder="请输入搜索" @click="$router.push('/search')">
      <img src="../../../static/images/icon_搜索.png" alt="" class="search_icon">
    </header>
    <div class="viewImg">
      <img src="../../../static/images/客服.jpg" alt="">
    </div>
    <ul class="btn_list">
      <li class="btn_item" @click="$router.push('/need_put')">
        <img src="../../../static/images/icon_提交需求.png" alt="">
        <span>需求提交</span>
      </li>
      <li class="btn_item">
        <img src="../../../static/images/icon_优惠券.png" alt="">
        <span>优惠券</span>
      </li>
      <li class="btn_item">
        <img src="../../../static/images/icon_线上商城.png" alt="">
        <span>线上商城</span>
      </li>
      <li class="btn_item" @click="$router.push('/project')">
        <img src="../../../static/images/服务方案.png" alt="">
        <span>服务方案</span>
      </li>
      <li class="btn_item" @click="$router.push('/trouble')">
        <img src="../../../static/images/故障方案.png" alt="">
        <span>故障方案</span>
      </li>
    </ul>
    <img src="../../../static/images/icon_banner.png" alt="" class="home_img">
    <ul class="way_list">
      <li class="way_item item_right item_bottom">
        <img src="../../../static/images/首页_综合布线.png" alt="">
      </li>
      <li class="way_item item_bottom">
        <img src="../../../static/images/首页_无线网组.png" alt="">
      </li>
      <li class="way_item item_right">
        <img src="../../../static/images/首页_网络优化.png" alt="">
      </li>
      <li class="way_item">
        <img src="../../../static/images/首页_宽带测速.png" alt="">
      </li>
    </ul>
    <router-view/>
  </section>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .home_wrap
    width 100%
    height 100%
    padding 30px 8px 0
    border-bottom 1px solid #D7DBE3
    box-sizing border-box
    background-image url("../../../static/images/首页_背景.png")
    background-repeat no-repeat
    background-size 100%
    .header
      width 100%
      .navBar
        font-size 16px
        padding 0px 8px 0 10px
        position relative
        img
          vertical-align middle
        .address
          font-family PingFangSC-Medium
          font-weight 500
          color rgba(255,255,255,1)
          vertical-align middle
        .service_icon
          position absolute
          top 1px
          right 16px
      .search
        width 100%
        height 36px
        margin-top 11px
        padding-left 40px
        box-sizing border-box
        background rgba(255,255,255,1)
        border-radius 4px
        color #A1A7B3
        font-size 14px
        &::-webkit-input-placeholder/*Webkit browsers*/
          color:#ccc
      .search_icon
        position absolute
        top 70px
        left 25px
    .home_img
      width 100%
    .viewImg
      width 100%
      height 152px
      margin 8px 0 21px
      box-shadow 0 6px 22px -4px rgba(27,31,51,0.4)
      border-radius 4px
      img
        width 100%
        height 100%
        border-radius 4px
    .btn_list
      width 100%
      display flex
      margin-bottom 20px
      .btn_item
        width 20%
        height 66px
        display flex
        justify-items center
        align-items center
        flex-direction column
        span
          margin-top 8px
          font-size 13px
          font-family PingFangSC-Medium
          font-weight 500
          color rgba(58,60,63,1)
          line-height 18px
    .way_list
      width 100%
      margin-top 10px
      clearFix()
      .way_item
        width 176px
        float left
        img
          width 100%
          height 100%
      .item_bottom
        margin-bottom 8px
      .item_right
        margin-right 7px
</style>
