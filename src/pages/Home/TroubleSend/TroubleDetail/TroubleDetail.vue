<!--故障申报详情页面-->
<template>
  <section class="trouble_wrap">
    <TopHeader :title="title"/>
    <div class="scroll_wrap">
      <div>
        <ul class="send_wrap">
          <li class="item cause">
            <span class="name">申报原因</span>
            <span class="text">效果不佳</span>
          </li>
          <li class="item imgs">
            <img src="../../../../../static/images/商品.jpg" alt="">
            <img src="../../../../../static/images/商品图.jpg" alt="">
          </li>
        </ul>
        <div class="user_info">
          <div class="left_wrap">
            <img src="../../../../../static/images/商品.jpg" class="touxiang">
            <div>
              <p class="user_name">罗秀兰</p>
              <div>
                <img src="../../../../../static/images/icon_全星.png" alt="">
                <img src="../../../../../static/images/icon_全星.png" alt="">
                <img src="../../../../../static/images/icon_全星.png" alt="">
                <img src="../../../../../static/images/icon_全星.png" alt="">
                <img src="../../../../../static/images/icon_半星.png" alt="">
                <span class="score">4.5</span>
              </div>
            </div>
          </div>
          <img src="../../../../../static/images/icon__联系.png" alt="">
        </div>
        <ul class="server_list">
          <li class="title">
            <span>服务方案</span>
            <span class="see_more" @click="$router.push('/project_detail')">
              查看详情
              <img src="../../../../../static/images/icon_更多.png" alt="">
            </span>
          </li>
          <li class="things_item">
            <ul>
              <li class="outer_wrap">
                <div>
                  <img src="../../../../../static/images/商品.jpg" class="item_img">
                  <span class="name">尊享版网组</span>
                </div>
                <div>
                  <span class="sum">x1</span>
                  <span class="price">￥800</span>
                </div>
              </li>
              <li class="outer_wrap">
                <div>
                  <img src="../../../../../static/images/商品.jpg" class="item_img">
                  <span class="name">百兆路由器</span>
                </div>
                <div>
                  <span class="sum">x1</span>
                  <span class="price">￥800</span>
                </div>
              </li>
              <li class="outer_wrap">
                <div>
                  <img src="../../../../../static/images/商品.jpg" class="item_img">
                  <span class="name">ap面板</span>
                </div>
                <div>
                  <span class="sum">x1</span>
                  <span class="price">￥800</span>
                </div>
              </li>
            </ul>
          </li>
          <li class="money_list">
            <span class="name">应付服务费</span>
            <span class="money">￥1200</span>
          </li>
          <li class="money_list">
            <span>
              <img src="../../../../../static/images/icon_抵扣.png" alt="">
              <span>上门服务费抵扣</span>
            </span>
            <span class="money">-￥30</span>
          </li>
          <li class="money_list">
            <span class="all_money">合计</span>
            <span class="all">￥1200</span>
          </li>
        </ul>
        <TroubleOrderInfo>
          <span slot="trouble" class="trou">故障申报</span>
        </TroubleOrderInfo>
        <OrderCourse/>
      </div>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import TroubleOrderInfo from '../../../../components/TroubleOrderInfo/TroubleOrderInfo'
  import OrderCourse from '../../../../components/OrderCourse/OrderCourse'

  export default {
    name: "TroubleDetail",
    data() {
      return {
        title: '故障申报',
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
      TroubleOrderInfo,
      OrderCourse
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .trouble_wrap
    width 100%
    height 100%
    .scroll_wrap
      width 100%
      height 620px
      .send_wrap
        width 100%
        padding-left 16px
        box-sizing border-box
        background: rgba(255, 255, 255, 1);
        .item
          bottom-border-1px($main)
          padding 13px 16px 13px 0
          box-sizing border-box
          width 100%
        .cause
          display flex
          justify-content space-between
          font-size: 16px;
          font-family: PingFangSC-Regular;
          .name
            color: rgba(112, 117, 127, 1);
            line-height: 22px;
          .text
            color: rgba(58, 61, 74, 1);
            line-height: 22px;
        .imgs
          img
            width: 56px;
            height: 56px;
            margin-right 5px
            border-radius: 2px;
      .user_info
        width 100%
        display flex
        justify-content space-between
        align-items center
        margin-top 8px
        padding 13px 27px 13px 16px
        box-sizing border-box
        background: rgba(255, 255, 255, 1);
        .touxiang
          width: 40px;
          height: 40px;
          border-radius 50%
          margin-right 8px
        .left_wrap
          height 100%
          display flex
          align-items center
          .user_name, .score
            font-size: 14px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(58, 61, 74, 1);
            line-height: 20px;
            margin-bottom 3px
          .score
            font-weight: 400;

      .server_list
        width 100%
        padding 0 16px
        box-sizing border-box
        background #fff
        margin-bottom 8px
        .title
          width 100%
          height 56px
          font-size: 16px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(58, 61, 74, 1);
          bottom-border-1px($main)
          display flex
          align-items center
          justify-content space-between
          .see_more
            font-size:14px;
            color:rgba(112,117,127,1);
        .things_item
          bottom-border-1px($main)
          .outer_wrap
            width 100%
            height 60px
            display flex
            justify-content space-between
            align-items center
            font-size: 14px;
            .item_img
              width 36px
              height 36px
              border-radius: 2px
            .name
              color rgba(55, 57, 61, 1)
              line-height 20px
              margin-left 5px
            .sum
              font-weight: 400
              color: rgba(55, 57, 61, 1)
              line-height: 20px
              margin-right 43px
            .price
              font-weight 500
              color rgba(55, 57, 61, 1)
              line-height 20px
        .money_list
          width 100%
          height 56px
          display flex
          align-items center
          justify-content space-between
          bottom-border-1px($main)
          font-size: 14px;
          font-family: PingFangSC-Regular;
          .name
            font-weight: 400;
            color: rgba(55, 57, 61, 1);
            line-height: 20px;
          .money
            font-weight: 500;
            color: rgba(238, 87, 74, 1);
            line-height: 20px;
          .all_money
            font-size 16px
          .all
            font-size: 16px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            color: rgba(236, 88, 79, 1);
            line-height: 22px;
</style>
