<!--故障申报页面-->
<template>
  <section>
    <TopHeader :title="title"/>
    <div class="scroll_wrap">
      <ul class="fault_list">
        <li class="fault_item" v-for="(item ,index) in faultArr" :key="index" @click="$router.push('/trouble_detail')">
          <div class="order_wrap">
            <div>
              <span class="order_text">订单号</span>
              <span class="order_num">{{item.orderNum}}</span>
            </div>
            <div class="order_btn">故障申报</div>
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

  export default {
    name: "TroubleSend",
    data() {
      return {
        title: '故障申报',
        faultArr: [
          {orderNum: '2018102111053', title: '维修家庭中路由器及网线问题', type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00'},
          {orderNum: '2018102111053', title: '维修家庭中路由器及网线问题', type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00'},
          {orderNum: '2018102111053', title: '维修家庭中路由器及网线问题', type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00'},
          {orderNum: '2018102111053', title: '维修家庭中路由器及网线问题', type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00'},
          {orderNum: '2018102111053', title: '维修家庭中路由器及网线问题', type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00'},
          {orderNum: '2018102111053', title: '维修家庭中路由器及网线问题', type: '维修家庭中路由器及网线问题', time: '2018-10-12 12:00'},
        ]
      }
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.scroll_wrap', {
          click: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .scroll_wrap
    width 100%
    height 588px
    margin-top 8px
    padding 0 8px
    box-sizing border-box
    .fault_list
      .fault_item
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
          bottom-border-1px($main)
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
            background: rgba(252, 220, 218, 1)
            -webkit-border-radius: 14px
            -moz-border-radius: 14px
            border-radius: 14px
            font-size: 12px
            font-weight: 500
            color: rgba(238, 81, 71, 1)
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
          background url("../../../../static/images/icon_服务.png") no-repeat
        .finish_time
          background url("../../../../static/images/icon_时间.png") no-repeat
</style>
