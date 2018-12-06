<template>
  <div class="order_course">
    <div class="title">订单历程</div>
    <ul class="time_list">
      <li class="time_item">
        <div class="data_hour">
          <p class="date">10-08</p>
          <p class="hour">21:30</p>
        </div>
        <img src="../../../static/images/icon_支付.png" alt="">
        <div class="pwrap">
          <p class="pone">客户支付上门预约金</p>
          <p class="ptwo">
            客户支付已支付上门预约金
            <span class="money on">￥100</span>
          </p>
        </div>
      </li>
      <li class="time_item">
        <div class="data_hour">
          <p class="date">10-07</p>
          <p class="hour">21:30</p>
        </div>
        <img src="../../../static/images/icon_支付已完成.png" alt="">
        <div class="pwrap">
          <p class="pone">客户支付上门预约金</p>
          <p class="ptwo">
            客户支付已支付上门预约金
            <span class="money">￥100</span>
          </p>
        </div>
      </li>
      <li class="time_item">
        <div class="data_hour">
          <p class="date">10-06</p>
          <p class="hour">21:30</p>
        </div>
        <img src="../../../static/images/icon_待处理.png" alt="">
        <div class="pwrap">
          <p class="pone">待处理</p>
          <p class="ptwo">您已接下订单，请及时处理</p>
        </div>
      </li>
      <li class="line line_one on"></li>
      <li class="line line_two"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "OrderCourse"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .order_course
    width 100%
    padding 0 16px 24px 16px
    box-sizing border-box
    background #fff
    .title
      margin-top 8px
      font-size: 16px;
      font-weight: 500;
      color: rgba(58, 61, 74, 1);
      line-height: 48px;
      width: 375px;
      height: 48px;
      padding 0 16px
      box-sizing border-box
      bottom-border-1px($main)
    .time_list
      position relative
      .time_item
        width 100%
        display flex
        padding 19px 0 16px
        font-family: PingFangSC-Regular;
        img
          margin 0 8px
          width 26px
          height 26px
        .data_hour
          text-align right
          color #B0B6C2
          .date
            font-size: 14px;
            line-height: 20px;
          .hour
            font-size: 12px;
            line-height: 16px;
        .pwrap
          color: #B0B6C2
          .pone
            font-size: 14px;
            line-height: 20px;
          .ptwo
            font-size: 12px;
            line-height: 16px;
            .money
              &.on
                color: $red
      .line
        height 45px
        transform scaleX(0.5)
        border 1px solid #B0B6C2
        &.on
          border 1px dashed $red
      .line_one
        position absolute
        top 42px
        left 59px
      .line_two
        position absolute
        top 115px
        left 59px
</style>
