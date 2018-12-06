<!--完善信息页面-->
<template>
  <section>
    <TopHeader :title="title"/>
    <div class="add_address" @click="$router.push('/address')">
      <img src="../../../../../static/images/icon_添加地址.png" alt="">
      <span>请添加服务地址</span>
      <img src="../../../../../static/images/icon_更多.png" class="more">
    </div>
    <div class="order_time">
      <img src="../../../../../static/images/icon_时间2.png" alt="">
      <span>预约上门时段</span>
    </div>
    <div class="start_end_time">
      <div class="start" :class="{height: endMonth&&endMonth&&endHours}" @click="isStartShow=true">
        <p>预约开始时间</p>
        <p class="time_num" v-show="endMonth&&endMonth&&endHours">{{startMonth}}-{{startDay}} {{startHours}}</p>
      </div>
      <div class="end" :class="{height: endMonth&&endMonth&&endHours}" @click="isEndShow=true">
        <p>预约结束时间</p>
        <p class="time_num" v-show="endMonth&&endMonth&&endHours">{{endMonth}}-{{endDay}} {{endHours}}</p>
      </div>
    </div>
    <ul class="server_list">
      <li class="item bottom">
        <span class="item_name">服务类型</span>
        <span class="item_content">维修家庭中路由器及网线问题</span>
      </li>
      <li class="item bottom">
        <span class="item_name">服务项目</span>
        <span class="item_content">服务项目01/服务项目02/服务项目03</span>
      </li>
      <li class="item">
        <span class="item_name">上门服务预约金</span>
        <span class="price">￥30</span>
      </li>
    </ul>
    <p class="hint">提示：您支付的￥30上门服务预约金在工程师上门前退单可退还，在支付全部服务费用时可抵扣￥30服务费用。</p>
    <Shade v-show="isStartShow||isEndShow"/>
    <div class="selection" v-show="isStartShow">
      <div class="header">
        <img src="../../../../../static/images/icon_删除.png" @click="isStartShow=false">
        <span class="cheeck_btn">预约开始时间</span>
        <span class="make_sure" @click="selectStartTime">确定</span>
      </div>
      <mt-picker :slots="slots" @change="onStartValuesChange"></mt-picker>
    </div>
    <div class="selection" v-show="isEndShow">
      <div class="header">
        <img src="../../../../../static/images/icon_删除.png" @click="isEndShow=false">
        <span class="cheeck_btn">预约结束时间</span>
        <span class="make_sure" @click="selectEndTime">确定</span>
      </div>
      <mt-picker :slots="slots" @change="onEndValuesChange"></mt-picker>
    </div>
    <PayBtn/>
  </section>
</template>

<script>
  import Shade from '../../../../components/Shade/Shade'
  import PayBtn from '../../../../components/PayBtn/PayBtn'
  import UserInfoList from '../../../../components/UserInfoList/UserInfoList'

  export default {
    name: "PerfectMessage",
    data() {
      return {
        title: '信息完善',
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
      }
    },
    components: {
      Shade,
      PayBtn,
      UserInfoList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  span, img
    vertical-align middle

  .price
    font-size 14px
    font-family PingFangSC-Semibold
    font-weight 600
    color rgba(236, 88, 79, 1)
    line-height 22px

  .add_address
    width 100%
    height 68px
    line-height 68px
    padding 0 16px
    margin-bottom 4px
    box-sizing border-box
    background-color rgba(255, 255, 255, 1)
    background-image url("../../../../../static/images/地址条.png")
    background-repeat no-repeat
    background-position bottom
    position relative
    span
      margin-left 5px
      font-size 16px
      font-family PingFangSC-Regular
      font-weight 400
      color rgba(112, 117, 127, 1)
    .more
      position absolute
      right 16px
      top 50%
      transform translateY(-50%)

  .order_time
    width 100%
    height 48px
    line-height 48px
    background-color rgba(255, 255, 255, 1)
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
    background-color rgba(255, 255, 255, 1)
    background-image url("../../../../../static/images/icon_大箭头.png")
    background-repeat no-repeat
    background-position 50%
    box-shadow 0 0 0 0 rgba(229, 234, 243, 1)
    .start, .end
      width 50%
      line-height 56px
      &.height
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
        &.active
          display none

  .server_list
    background rgba(255, 255, 255, 1)
    padding 0 16px
    .bottom
      bottom-border-1px(#E5EAF3)
    .item
      height 48px
      font-size 16px
      display flex
      align-items center
      justify-content space-between
      .item_name
        font-family: PingFangSC-Regular
        font-weight: 400
        color rgba(112, 117, 127, 1)
        line-height 22px
      .item_content
        font-family PingFangSC-Regular
        font-weight 400
        color rgba(58, 61, 74, 1)
        line-height 22px

  .hint
    margin-top 7px
    padding 0 16px
    font-size 12px
    font-family PingFangSC-Regular
    font-weight 400
    color rgba(161, 167, 179, 1)
    line-height 18px

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
