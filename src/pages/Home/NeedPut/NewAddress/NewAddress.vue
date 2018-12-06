<!--新建服务地址页面-->
<template>
  <section>
    <TopHeader :title="title"/>
    <ul class="userInfo_list">
      <li class="userInfo_item" @click="isShow=true">
        <img src="../../../../../static/images/icon_位置.png" class="img_one">
        <div class="item_wrap bottom">
          <span class="item_name">服务地址</span>
          <div class="serve_address ellipsis">
            <span>{{city}}</span>
          </div>
          <img src="../../../../../static/images/icon_更多.png">
        </div>
      </li>
      <li class="userInfo_item item_left">
        <div class="item_wrap bottom">
          <span class="item_name">详细地址</span>
          <input type="text" placeholder="请填写详细地址" v-model="address">
        </div>
      </li>
      <li class="userInfo_item">
        <img src="../../../../../static/images/icon_联系人.png" alt="" class="img_one">
        <div class="item_wrap bottom">
          <span class="item_name">联系人</span>
          <input type="text" placeholder="请输入联系人姓名" v-model="name">
        </div>
      </li>
      <li class="userInfo_item">
        <img src="../../../../../static/images/icon_手机.png" alt="" class="img_one">
        <div class="item_wrap">
          <span class="item_name">联系电话</span>
          <input type="tel" placeholder="请填写联系电话" v-model="phone">
        </div>
      </li>
      <img src="../../../../../static/images/地址条.png" alt="">
    </ul>
    <Shade v-if="isShow" :title="title"/>
    <div class="selection" v-show="isShow">
      <div class="header">
        <img src="../../../../../static/images/icon_删除.png" @click="isShow=false">
        <span class="cheeck_btn">选择地址</span>
        <span class="make_sure" @click="isShow=false">确定</span>
      </div>
      <Picker v-on:getValue="have"/>
    </div>
    <footer class="save_btn">保存</footer>
  </section>
</template>
<script>
  import Shade from '../../../../components/Shade/Shade'
  import s from '../../../../../static/json/address4'
  import Picker from '../../../../components/Picker/Picker'

  export default {
    name: "NewAddress",
    data() {
      return {
        title: '新建服务地址',
        isShow: false, //遮罩层切换
        address: '',
        phone: '',
        name: '',
        city: '',
        siteArr: [
          {name: "三里屯太古里", text: "北京 朝阳区 建国路(路口)", siteImg: '/static/images/icon_位置.png'},
          {name: "三里屯太古里", text: "北京 朝阳区 建国路(路口)", siteImg: '/static/images/icon_位置.png'},
          {name: "三里屯太古里", text: "北京 朝阳区 建国路(路口)", siteImg: '/static/images/icon_位置.png'},
          {name: "三里屯太古里", text: "北京 朝阳区 建国路(路口)", siteImg: '/static/images/icon_位置.png'},
          {name: "三里屯太古里", text: "北京 朝阳区 建国路(路口)", siteImg: '/static/images/icon_位置.png'},
          {name: "三里屯太古里", text: "北京 朝阳区 建国路(路口)", siteImg: '/static/images/icon_位置.png'},
        ],
      }
    },
    methods:{
      have(data) {
        this.city = data
      },
    },
    components: {
      Shade,
      Picker
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"

  .userInfo_list
    background-color rgba(255, 255, 255, 1)
    .userInfo_item
      height 48px
      display flex
      align-items center
      padding-left 17px
      font-size 16px
      .item_wrap
        height 100%
        width 335px
        padding-right 16px
        box-sizing border-box
        display flex
        align-items center
        box-shadow 0 0 0 0 rgba(229, 234, 243, 1)
      .bottom
        bottom-border-1px(#E5EAF3)
      .item_name
        font-family PingFangSC-Regular
        font-weight 400
        color rgba(112, 117, 127, 1)
        line-height 22px
      input
        outline none
      input, .serve_address
        margin-left 16px
      .serve_address
        display inline-block
        width 222px
      .user_name
        margin-left 32px
      .img_one
        margin-right 10px
    .item_left
      padding-left 40px

  .selection
    width 100%
    height 530px
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
    .adress_show
      width 100%
      padding 0 16px
      box-sizing border-box
      height 48px
      line-height 48px
      font-size 14px
      font-family PingFangSC-Regular
      font-weight 400
      color rgba(58, 61, 74, 1)
      box-shadow 0px 0px 0px 0px rgba(229, 234, 243, 1)
      bottom-border-1px(#E5EAF3)
      span
        margin-right 28px

  .save_btn
    width 100%
    height 50px
    text-align center
    line-height 50px
    position fixed
    bottom 0
    background rgba(236, 88, 79, 1)
    font-size 16px
    font-family PingFangSC-Medium
    font-weight 500
    color rgba(255, 255, 255, 1)
</style>
