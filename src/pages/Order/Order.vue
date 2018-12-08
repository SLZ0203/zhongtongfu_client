<!--订单页面-->
<template>
  <section class="order_wrap">
    <div class="header">{{title}}</div>
    <ul class="nav_list">
      <li :class="{on: num===0}" @click="getOrder(0)">全部</li>
      <li :class="{on: num===1}" @click="getOrder(1)">待分配</li>
      <li :class="{on: num===2}" @click="getOrder(2)">进行中</li>
      <li :class="{on: num===5}" @click="getOrder(5)">已完成</li>
    </ul>
    <div class="scroll_wrap">
      <div>
        <ul class="order_list" v-if="orderList">
          <li class="order_item" v-for="(item ,index) in orderList" :key="index"
              @click="goWhich(item.orderStateName,item)">
            <div class="order_wrap">
              <div>
                <span class="order_text">订单号</span>
                <span class="order_num">{{item.orderId}}</span>
              </div>
              <div class="order_btn" :class="changeClass(item.orderStateName)">{{item.orderStateName}}</div>
            </div>
            <p class="fault_title">{{item.orderRequire[0].cateName}}</p>
            <div class="server_type">
              <span>服务类型</span>
              <span>{{item.orderRequire[0].requireName}}</span>
            </div>
            <div class="finish_time">
              <span>提交时间</span>
              <span>{{item.endTime}}</span>
            </div>
          </li>
        </ul>
        <div class="no_data" v-else>暂无订单数据</div>
      </div>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {postURL, token} from '../../api'

  export default {
    name: "Order",
    data() {
      return {
        title: '我的订单',
        num: 0,
        orderList: null
      }
    },

    methods: {
      //改变状态框的背景色
      changeClass(s) {
        if (s === '待分配') {
          return 'pink';
        } else if (s === '施工中' || s === '变更方案待确认') {
          return 'yellow';
        } else if (s === '已完成' || s === '待结算' || s === '已取消') {
          return 'green';
        }
      },
      //跳转页面
      goWhich(s, item) {
        if (s === '待分配') {
          return this.$router.push({path: '/wait_detail', query: {id: item.orderId}});
        } else if (s === '待施工') {
          return this.$router.push({path: '/await_orderdetail', query: {id: item.orderId}});
        } else if (s === '服务方案待确认' || s === '变更方案待确认') {
          return this.$router.push({path: '/daiqueren_orderdetail', query: {id: item.orderId}});
        } else if (s === '施工中') {
          return this.$router.push({path: '/being_detail', query: {id: item.orderId}});
        } else if (s === '已完成' || s === '已取消') {
          return this.$router.push({path: '/finish_detail', query: {id: item.orderId}});
        } else if (s === '待结算' || s=== '待支付预约费') {
          return this.$router.push({path: '/waitpay_orderdetail', query: {id: item.orderId}});
        }
      },
      //获取订单列表的方法
      allOrder() {
        const url = postURL + '/api/order/pageMemOrder';
        const {num} = this;
        this.$axios.post(url,
          {
            "data": {
              "data": {
                "orderCateState": num,
              },
            },
            "requestId": new Date().getTime()
          },
          {
            headers: {token}
          }
        ).then(res => {
          const result = res.data;
          if (result.code === 200) {
            this.orderList = result.data.list;
          }
        });
      },
      //全部订单
      getOrder(n) {
        this.num = n;
        this.allOrder()
      },
    },
    mounted() {
      //获取订单列表
      this.allOrder();
      //页面滑屏
      this.$nextTick(() => {
        new BScroll('.scroll_wrap', {
          click: true
        })
      })
    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .order_wrap
    width 100%
    height 100%

  .header
    width 100%
    background rgba(255, 255, 255, 1)
    padding 20px 16px
    box-sizing border-box
    font-size 18px
    text-align: center
    font-family PingFangSC-Medium
    font-weight 500
    color rgba(58, 61, 74, 1)

  .nav_list
    width 100%
    height 40px
    font-size: 14px;
    font-family: PingFangSC-Regular;
    color: rgba(112, 117, 127, 1);
    line-height: 20px;
    display flex
    background rgba(255, 255, 255, 1)
    justify-content space-between
    bottom-border-1px(#E5EAF3)
    li
      height 100%
      width 25%
      text-align: center
      line-height 40px
      position relative
      &.on
        font-weight: 500;
        color: rgba(58, 61, 74, 1);
        &::after
          content ''
          position absolute
          left 50%
          bottom 1px
          width 32px
          height 3px
          transform translateX(-50%)
          background: rgba(236, 88, 79, 1);
          border-radius: 2px;

  .scroll_wrap
    width 100%
    height 502px
    margin-top 8px
    padding 0 8px
    box-sizing border-box
    overflow hidden
    .no_data
      width 100%
      height 100%
      text-align: center
      font-size 12px
      line-height 502px
      color #6e727a
    .order_list
      .order_item
        height 168px
        background rgba(255, 255, 255, 1)
        box-shadow 0 2px 6px -1px rgba(36, 37, 41, 0.1)
        border-radius 2px
        margin-bottom 8px
        padding 0 16px 16px 16px
        box-sizing border-box
        .order_wrap
          height 48px
          box-shadow 0 0 0 0 rgba(229, 234, 243, 1)
          display flex
          justify-content space-between
          align-items center
          bottom-border-1px(#E5EAF3)
          font-size: 14px
          font-family: PingFangSC-Medium
          .order_text
            font-weight: 500
            color: rgba(112, 117, 127, 1)
            line-height: 20px
          .order_num
            font-weight 500
            color rgba(58, 61, 74, 1)
            line-height 20px
          .order_btn
            height: 26px
            line-height 24px
            text-align: center
            -webkit-border-radius: 14px
            -moz-border-radius: 14px
            border-radius: 14px
            padding 0 15px
            background rgba(252, 220, 218, 1)
            font-size: 12px
            font-weight: 500
            color: rgba(238, 81, 71, 1)
            &.pink
              color: rgba(238, 81, 71, 1);
              background: rgba(252, 220, 218, 1)
            &.yellow
              color: rgba(248, 162, 16, 1);
              background: rgba(254, 236, 207, 1);
            &.green
              color: rgba(46, 171, 89, 1);
              background: rgba(213, 238, 222, 1);
        .fault_title
          margin 16px 0
          font-size: 16px
          font-weight: 500
          color: rgba(58, 61, 74, 1)
          line-height: 22px
        .server_type, .finish_time
          display flex
          justify-content space-between
          padding-left 20px
          font-size 14px
          font-weight 400
          color rgba(112, 117, 127, 1)
        .server_type
          margin-bottom 10px
          background url("../../../static/images/icon_服务.png") no-repeat
        .finish_time
          background url("../../../static/images/icon_时间.png") no-repeat
</style>
