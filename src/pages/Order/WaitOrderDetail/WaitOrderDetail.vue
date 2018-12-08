<!--待分配订单详情页面-->
<template>
  <section class="detail_wrap">
    <TopHeader :title="title"/>
    <div class="scroll_wrap">
      <div>
        <!--预约服务订单提交成功-->
        <div class="order_state">
          <img src="../../../../static/images/icon_成功.png" alt="">
          <p class="name">预约服务定订单提交成功！</p>
          <div class="hint_msg">
            您已支付<span class="price">￥30</span>
            上门服务预约金，在服务工程师上门前还可退还，在支付全部服务费时可抵扣
            <span class="price">￥30</span>服务费
          </div>
          <div class="btn_wrap">
            <span @click="urgeOrder">催 单</span>
            <span>取消订单</span>
          </div>
        </div>
        <!--&lt;!&ndash;上门服务时间确认&ndash;&gt;
        <div class="order_state">
          <img src="../../../../static/images/icon_时间1.png" alt="">
          <p class="name">上门服务时间确认！</p>
          <div class="hint_msg">
            服务工程师将于
            <span class="price">{{orderInfo.confirmTime}}</span>
            进行上门服务，您是否同意？
          </div>
          <div class="btn_wrap">
            <span class="three" @click="$router.push('/charge_back')">退 单</span>
            <span class="three" @click="isStartShow=true">更改时间</span>
            <span class="three redbor" @click="hadPlan">同 意</span>
          </div>
        </div>
        &lt;!&ndash;已安排工程师&ndash;&gt;
        <div class="order_state">
          <img src="../../../../static/images/icon_成功.png" alt="">
          <p class="name">已安排工程师！</p>
          <div class="hint_msg">
            工程师将于
            <span class="price">{{orderInfo.confirmTime}}</span>
            上门服务
          </div>
          <div class="btn_wrap">
            <span class="three">申请退单</span>
          </div>
        </div>-->
        <div class="user_info" v-if="orderInfo.engineerAvatar">
          <div class="left_wrap">
            <img :src="orderInfo.engineerAvatar" class="touxiang">
            <div>
              <p class="user_name">{{orderInfo.engineerName}}</p>
              <Starlet :score=orderInfo.totalScore></Starlet>
            </div>
          </div>
          <img src="../../../../static/images/icon__联系.png" alt="">
        </div>
        <ul class="order_msg">
          <li class="title">订单信息</li>
          <li class="item_msg">
            <span class="name">订单号</span>
            <span class="num">{{orderInfo.orderId}}</span>
          </li>
          <li class="item_msg">
            <span class="name">订单状态</span>
            <span class="state">{{orderInfo.orderStateName}}</span>
          </li>
          <li class="item_msg">
            <span class="name">服务类型</span>
            <span class="type">其他</span>
          </li>
          <li class="item_msg">
            <span class="name">问题描述</span>
            <span class="problem">家中网线时有时无，屏幕闪烁不断</span>
          </li>
        </ul>
        <div class="time_wrap">
          <div class="order_time">
            <img src="../../../../static/images/icon_时间2.png" alt="">
            <span>预约上门时段</span>
          </div>
          <div class="start_end_time">
            <div class="start">
              <p>预约开始时间</p>
              <p class="time_num">
                {{endHours ? startMonth+'-'+startDay+'-'+startHours:orderInfo.startTime}}
              </p>
            </div>
            <div class="end">
              <p>预约结束时间</p>
              <p class="time_num">
                {{endHours ? endMonth+'-'+endDay+'-'+endHours:orderInfo.endTime}}
              </p>
            </div>
          </div>
        </div>
        <div class="hint">提示：您的需求已经提交客服，正在为您匹配相应服务。请保持电话畅通，以便服务与您联系。</div>
        <OrderCourse :orderCourse="orderCourse"/>
      </div>
    </div>
    <Shade v-show="popupShow||isStartShow||isEndShow"/>
    <div class="popup" v-show="popupShow">
      <img src="../../../../static/images/icon_弹窗_完成.png" alt="">
      <p class="yes">催单成功 !</p>
      <p class="wait">服务工程师已经接到了您的催单信息，将尽快为您服务~</p>
      <div class="ft_btn" @click="callTime">确定</div>
    </div>
    <div class="selection" v-show="isStartShow">
      <div class="header">
        <img src="../../../../static/images/icon_删除.png" @click="isStartShow=false">
        <span class="cheeck_btn">预约开始时间</span>
        <span class="make_sure" @click="selectStartTime">确定</span>
      </div>
      <mt-picker :slots="slots" @change="onStartValuesChange"></mt-picker>
    </div>
    <div class="selection" v-show="isEndShow">
      <div class="header">
        <img src="../../../../static/images/icon_删除.png" @click="isEndShow=false">
        <span class="cheeck_btn">预约结束时间</span>
        <span class="make_sure" @click="selectEndTime">确定</span>
      </div>
      <mt-picker :slots="slots" @change="onEndValuesChange"></mt-picker>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import OrderCourse from '../../../components/OrderCourse/OrderCourse'
  import Shade from '../../../components/Shade/Shade'
  import Starlet from '../../../components/Starlet/Starlet'
  import {postURL, token} from '../../../api'
  import {Toast} from 'mint-ui';

  export default {
    name: "WaitOrderDetail",
    data() {
      return {
        title: '订单详情',
        orderId: this.$route.query.id,//订单号
        orderInfo: [],//订单详情列表
        orderCourse: null,//订单历程
        popupShow: false,//弹窗切换显示、隐藏
        isStartShow: false,//选择预约开始时间显示/隐藏
        isEndShow: false,//选择预约结束时间显示/隐藏
        startTime: false,//开始时间显示/隐藏
        endTime: false,//结束时间显示/隐藏
        startMonth: '',//预约开始月份
        startDay: '',//预约开始日期
        startHours: '',//预约开始小时
        endMonth: '',//预约结束月份
        endDay: '',//预约结束日期
        endHours: '',//预约结束小时
        slots: [
          {
            flex: 1,
            values: ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            className: 'slot1',
            textAlign: 'center'
          },
          {
            flex: 1,
            values: ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
            className: 'slot1',
            textAlign: 'center'
          },
          {
            flex: 1,
            values: ['', '00 : 00', '01 : 00', '02 : 00', '03 : 00', '04 : 00', '05 : 00', '06 : 00', '07 : 00', '08 : 00', '09 : 00', '10 : 00', '11 : 00', '12 : 00', '13 : 00', '14 : 00', '15 : 00', '16 : 00', '17 : 00', '18 : 00', '19 : 00', '20 : 00', '21 : 00', '22 : 00', '23 : 00',],
            className: 'slot3',
            textAlign: 'center'
          }
        ]
      }
    },
    created() {
      //获取订单详情的请求
      const {orderId} = this;
      const url2 = postURL + '/api/order/getOrderDetail';
      this.$axios.post(url2, {
          "data": orderId,
          "requestId": new Date().getTime(),
        },
        {
          headers: {
            token
          }
        }
      ).then(res => {
        const result = res.data;
        if (result.code === 200) {
          this.orderInfo = result.data;
        }
      });

      //获取订单历程的请求
      const url1 = postURL + '/api/order/listOrderCourse';
      this.$axios.post(url1, {
          "data": orderId,
          "requestId": new Date().getTime(),
        },
        {
          headers: {
            token
          }
        }
      ).then(res => {
        const result = res.data;
        if (result.code === 200) {
          this.orderCourse = result.data
        }
      });

    },
    methods: {
      onStartValuesChange(picker, values) {
        this.startMonth = values[0];
        this.startDay = values[1];
        this.startHours = values[2];
      },
      onEndValuesChange(picker, values) {
        this.endMonth = values[0];
        this.endDay = values[1];
        this.endHours = values[2];
      },
      selectStartTime() {
        this.isStartShow = false;
        this.startTime = true;
        this.isEndShow = true
      },
      selectEndTime() {
        this.isEndShow = false;
        this.endTime = true
      },
      /*上门时间确认显示*/
      callTime() {
        this.popupShow = false;
        setTimeout(() => {
          this.showOne = false;
          this.showTwo = true
        }, 5000)
      },
      /*已安排工程师显示*/
      hadPlan() {
        this.showTwo = false;
        this.showThree = true
      },
      /*催单请求*/
      urgeOrder() {
        const {orderInfo} = this;
        const orderId = orderInfo.orderId;
        const url = postURL + '/api/order/urgeOrder';
        this.$axios.post(url, {
            "data": orderId,
            "requestId": new Date().getTime(),
          },
          {
            headers: {
              token
            }
          }
        ).then(res => {
          const result = res.data;
          if (result.code === 200) {
            this.popupShow = true
          } else {
            Toast({
              message: result.message,
              duration: 2000
            })
          }
        })
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
      OrderCourse,
      Shade,
      Starlet
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
        color: rgba(236, 88, 79, 1);
      .user_info
        width 100%
        display flex
        justify-content space-between
        align-items center
        margin 8px 0
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
          .user_name
            font-size: 14px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(58, 61, 74, 1);
            line-height: 20px;
            margin-bottom 3px

      .order_state
        width 100%
        padding 16px
        box-sizing border-box
        background #fff
        text-align: center
        margin-bottom 8px
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
          .three
            width 100px
          .redbor
            border: 1px solid #EE5147
            color: rgba(238, 81, 71, 1);
            background: rgba(255, 255, 255, 1);
      .order_msg
        width 100%
        margin-bottom 8px
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
        .item_msg
          width 100%
          height 48px
          display flex
          padding-left 16px
          box-sizing border-box
          align-items center
          justify-content space-between
          padding-right 16px
          font-size: 14px;
          bottom-border-1px($main)
          .name
            color: rgba(112, 117, 127, 1);
          .type, .problem
            color: rgba(58, 61, 74, 1);
      .hint
        width 100%
        padding 0 16px
        box-sizing border-box
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(161, 167, 179, 1);
        line-height: 18px;
      .time_wrap
        width 100%
        background-color rgba(255, 255, 255, 1)
        .order_time
          width 100%
          height 48px
          line-height 48px
          padding 0 17px
          box-sizing border-box
          bottom-border-1px(#E5EAF3)
          span
            margin-left 4px
            font-size 16px
            font-family PingFangSC-Medium
            font-weight 500
            color rgba(58, 61, 74, 1)
            line-height 22px
        .start_end_time
          width 375px
          height 56px
          display flex
          margin-bottom 8px
          background-image url("../../../../static/images/icon_大箭头.png")
          background-repeat no-repeat
          background-position 50%
          box-shadow 0 0 0 0 rgba(229, 234, 243, 1)
          .start, .end
            width 50%
            line-height 28px
            p
              text-align center
              font-size 16px
              font-family PingFangSC-Regular
              font-weight 400
              color rgba(161, 167, 179, 1)
            .time_num
              font-weight 600
              color rgba(236, 88, 79, 1)
              line-height 22px
    .popup
      width: 311px;
      height: 250px;
      padding: 24px 16px 0
      box-sizing border-box
      position absolute
      top 50%
      left 50%
      z-index 1000
      transform translate(-50%, -50%)
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 1px 0 0 rgba(229, 234, 243, 1);
      text-align: center
      font-family: PingFangSC-Medium;
      .yes
        font-size: 16px;
        font-weight: 500;
        color: rgba(58, 61, 74, 1);
        line-height: 22px;
        margin-bottom 8px
      .wait
        font-size: 14px;
        color: rgba(112, 117, 127, 1);
        line-height: 21px;
      .ft_btn
        width 100%
        height: 48px;
        top-border-1px($main)
        font-size: 16px;
        text-align: center
        line-height 48px
        position absolute
        bottom 0
        left 0
        color: rgba(236, 88, 79, 1);
        box-shadow: 0 1px 0 0 rgba(229, 234, 243, 1);
    .selection
      width 100%
      height 280px
      position fixed
      bottom 0
      z-index 100
      background rgba(255, 255, 255, 1)
      .header
        height 52px
        padding 0 16px
        font-size 16px
        display flex
        justify-content space-between
        align-items center
        bottom-border-1px(#E5EAF3)
        img, span
          vertical-align middle
        .cheeck_btn
          font-family PingFangSC-Medium
          font-weight 500
          color rgba(58, 61, 74, 1)
          line-height 22px
        .make_sure
          font-family PingFangSC-Regular
          font-weight 400
          color rgba(236, 88, 79, 1)
          line-height 22px
</style>
