<!--订单页面-->
<template>
  <section class="order_wrap">
    <div class="header">{{title}}</div>
    <ul class="nav_list">
      <li :class="{on: num===0}" @click="num=0">全部</li>
      <li :class="{on: num===1}" @click="num=1">待分配</li>
      <li :class="{on: num===2}" @click="num=2">进行中</li>
      <li :class="{on: num===3}" @click="num=3">已完成</li>
    </ul>
    <div class="scroll_wrap">
      <ul class="order_list">
        <li class="order_item" v-for="(item ,index) in faultArr[num].orderList" :key="index"
            @click="goWhich(item.state)">
          <div class="order_wrap">
            <div>
              <span class="order_text">订单号</span>
              <span class="order_num">{{item.orderNum}}</span>
            </div>
            <div class="order_btn" :class="changeClass(item.state)">{{item.state}}</div>
          </div>
          <p class="fault_title">{{item.title}}</p>
          <div class="server_type">
            <span>服务类型</span>
            <span>{{item.type}}</span>
          </div>
          <div class="finish_time">
            <span>完成时间</span>
            <span>{{item.time}}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {postURL, token} from '../../api'
  import {Toast} from 'mint-ui'

  export default {
    name: "Order",
    data() {
      return {
        title: '我的订单',
        num: 0,
        faultArr: [
          {
            orderList: [
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '待分配'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '进行中'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '已完成'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '进行中'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '已完成'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '待分配'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '已完成'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '进行中'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '已完成'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '待分配'
              },
            ]
          },
          {
            orderList: [
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '待分配'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '待分配'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '待分配'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '待分配'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '待分配'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '待分配'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '待分配'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '待分配'
              },
            ]
          },
          {
            orderList: [
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '进行中'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '进行中'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '进行中'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '进行中'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '进行中'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '进行中'
              },
            ]
          },
          {
            orderList: [
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '已完成'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '已完成'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '已完成'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '已完成'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '已完成'
              },
              {
                orderNum: '2018102111053', title: '维修家庭中路由器及网线问题',
                type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00', state: '已完成'
              },
            ]
          },
        ],
        orderList: []
      }
    },
    created() {
      //发送请求获取订单列表
      const url = postURL + '/api/order/pageMemOrder';
      this.$axios.post(url,
        {
          "data": {
            "data": {
              "orderCateState": "0"
            },
            "pageNum": 1,
            "pageSize": 10
          },
          "requestId": new Date().getTime()
        },
        {
          headers: {
            token,
          }
        }
      ).then(res => {
        const result = res.data;
        if (result.code === 200) {
          console.log(result.data);
        } else {
          Toast('暂无订单')
        }
      })
    },
    methods: {
      changeClass(s) {
        switch (s) {
          case '待分配':
            return 'pink';
          case '进行中':
            return 'yellow';
          case '已完成':
            return 'green';
        }
      },
      goWhich(s) {
        switch (s) {
          case '待分配':
            return this.$router.push('/wait_detail');
          case '进行中':
            return this.$router.push('/being_detail');
          case '已完成':
            return this.$router.push('/finish_detail');
        }
      },
    },
    mounted() {
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
    padding 30px 16px 10px
    box-sizing border-box
    font-size 18px
    text-align: center
    font-family PingFangSC-Medium
    font-weight 500
    color rgba(58, 61, 74, 1)
    line-height 24px

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
    padding 0 18px 0 33px
    box-sizing border-box
    li
      height 100%
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
            width: 64px
            height: 26px
            line-height 24px
            text-align: center
            -webkit-border-radius: 14px
            -moz-border-radius: 14px
            border-radius: 14px
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
