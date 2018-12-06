<!--我的退款页面-->
<template>
  <section>
    <TopHeader :title="title">
      <img src="../../../../static/images/icon_返回.png" class="return" @click="$router.back()" slot="return">
    </TopHeader>
    <div class="scroll_wrap">
      <ul class="back_list">
        <li class="back_item" @click="$router.push('/back_details')">
          <div class="header">
            <div>
              <span class="order_text">订单号</span>
              <span class="order_num">2018102111053</span>
            </div>
            <div class="back_btn">已退单</div>
          </div>
          <p class="shop_name">维修家庭中路由器及网线问题</p>
          <div class="back_outer">
            <div>
              <img src="../../../../static/images/icon_服务.png" alt="">
              <span>服务类型</span>
            </div>
            <div>维修家庭中路由器及网线问题</div>
          </div>
          <div class="back_outer">
            <div>
              <img src="../../../../static/images/icon_时间.png" alt="">
              <span>订单完成时间</span>
            </div>
            <div>2018-10-12 12:00</div>
          </div>
          <div class="footer">
            <div>
              <img src="../../../../static/images/icon_退款.png" alt="">
              <span>退款</span>
            </div>
            <div class="price">￥1200</div>
          </div>
        </li>
        <li class="back_item" @click="$router.push('/back_details')">
          <div class="header">
            <div>
              <span class="order_text">订单号</span>
              <span class="order_num">2018102111053</span>
            </div>
            <div class="back_btn">已退单</div>
          </div>
          <p class="shop_name">维修家庭中路由器及网线问题</p>
          <div class="back_outer">
            <div>
              <img src="../../../../static/images/icon_服务.png" alt="">
              <span>服务类型</span>
            </div>
            <div>维修家庭中路由器及网线问题</div>
          </div>
          <div class="back_outer">
            <div>
              <img src="../../../../static/images/icon_时间.png" alt="">
              <span>订单完成时间</span>
            </div>
            <div>2018-10-12 12:00</div>
          </div>
          <div class="footer">
            <div>
              <img src="../../../../static/images/icon_退款.png" alt="">
              <span>退款</span>
            </div>
            <div class="price">￥1200</div>
          </div>
        </li>
        <li class="back_item" @click="$router.push('/back_details')">
          <div class="header">
            <div>
              <span class="order_text">订单号</span>
              <span class="order_num">2018102111053</span>
            </div>
            <div class="back_btn">已退单</div>
          </div>
          <p class="shop_name">维修家庭中路由器及网线问题</p>
          <div class="back_outer">
            <div>
              <img src="../../../../static/images/icon_服务.png" alt="">
              <span>服务类型</span>
            </div>
            <div>维修家庭中路由器及网线问题</div>
          </div>
          <div class="back_outer">
            <div>
              <img src="../../../../static/images/icon_时间.png" alt="">
              <span>订单完成时间</span>
            </div>
            <div>2018-10-12 12:00</div>
          </div>
          <div class="footer">
            <div>
              <img src="../../../../static/images/icon_退款.png" alt="">
              <span>退款</span>
            </div>
            <div class="price">￥1200</div>
          </div>
        </li>
        <li class="back_item" @click="$router.push('/back_details')">
          <div class="header">
            <div>
              <span class="order_text">订单号</span>
              <span class="order_num">2018102111053</span>
            </div>
            <div class="back_btn">已退单</div>
          </div>
          <p class="shop_name">维修家庭中路由器及网线问题</p>
          <div class="back_outer">
            <div>
              <img src="../../../../static/images/icon_服务.png" alt="">
              <span>服务类型</span>
            </div>
            <div>维修家庭中路由器及网线问题</div>
          </div>
          <div class="back_outer">
            <div>
              <img src="../../../../static/images/icon_时间.png" alt="">
              <span>订单完成时间</span>
            </div>
            <div>2018-10-12 12:00</div>
          </div>
          <div class="footer">
            <div>
              <img src="../../../../static/images/icon_退款.png" alt="">
              <span>退款</span>
            </div>
            <div class="price">￥1200</div>
          </div>
        </li>
        <li class="back_item" @click="$router.push('/back_details')">
          <div class="header">
            <div>
              <span class="order_text">订单号</span>
              <span class="order_num">2018102111053</span>
            </div>
            <div class="back_btn">已退单</div>
          </div>
          <p class="shop_name">维修家庭中路由器及网线问题</p>
          <div class="back_outer">
            <div>
              <img src="../../../../static/images/icon_服务.png" alt="">
              <span>服务类型</span>
            </div>
            <div>维修家庭中路由器及网线问题</div>
          </div>
          <div class="back_outer">
            <div>
              <img src="../../../../static/images/icon_时间.png" alt="">
              <span>订单完成时间</span>
            </div>
            <div>2018-10-12 12:00</div>
          </div>
          <div class="footer">
            <div>
              <img src="../../../../static/images/icon_退款.png" alt="">
              <span>退款</span>
            </div>
            <div class="price">￥1200</div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "MyBack",
    data() {
      return {
        title: '我的退单'
      }
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.scroll_wrap', {
          click: true,
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .scroll_wrap
    height 595px
    .back_list
      margin-top 8px
      width 100%
      padding 0 8px
      box-sizing border-box
      span,img
        vertical-align middle
      .back_item
        width 100%
        padding 0 16px
        box-sizing border-box
        background:rgba(255,255,255,1)
        box-shadow:0 2px 6px -1px rgba(36,37,41,0.1)
        border-radius:2px
        margin-bottom 8px
        .header
          width 100%
          height:48px
          display flex
          justify-content space-between
          align-items center
          font-size:14px
          font-family:PingFangSC-Medium
          bottom-border-1px(#E5EAF3)
          .order_text
            font-weight 500
            color rgba(112,117,127,1)
            line-height 20px
          .order_num
            font-weight:500
            color:rgba(58,61,74,1)
            line-height:20px
          .back_btn
            width:64px
            height:26px
            line-height 26px
            text-align: center
            background:rgba(238,240,246,1)
            border-radius:14px
            font-size:12px
            font-weight 500
            color rgba(112,117,127,1)
        .shop_name
          padding 16px 0
          font-size:16px
          font-family:PingFangSC-Medium
          font-weight:500
          color:rgba(58,61,74,1)
          line-height:22px
        .back_outer
          width 100%
          font-size:14px
          font-family:PingFangSC-Regular
          color:rgba(112,117,127,1)
          display flex
          justify-content space-between
          align-items center
          div
            margin-bottom 10px
        .footer
          width 100%
          height 48px
          display flex
          justify-content space-between
          align-items center
          font-size:14px
          font-family:PingFangSC-Regular
          color:rgba(112,117,127,1)
          top-border-1px(#E5EAF3)
          .price
            font-weight:600
            color:rgba(236,88,79,1)
            line-height:22px
</style>
