<!--需求提交页面-->
<template>
  <section class="need_wrap">
    <TopHeader :title="title"/>
    <section class="nav_wrap">
      <div class="title">服务类型</div>
      <ul class="nav_list">
        <li class="nav_item" :class="{isChecked: num===0}" @click="needSend($event)">综合布线</li>
        <li class="nav_item" :class="{isChecked: num===1}" @click="needSend($event)">无线网组</li>
        <li class="nav_item" :class="{isChecked: num===2}" @click="needSend($event)">网络优化</li>
        <li class="nav_item" :class="{isChecked: num===3}" @click="needSend($event)">其他</li>
      </ul>
    </section>
    <ShopList :num="num"/>
    <SendNeed v-show="isShow"/>
    <NextStep>
      <span slot="text">下一步</span>
    </NextStep>
  </section>
</template>

<script>
  import NextStep from '../../../components/NextStep/NextStep'
  import ShopList from '../../../components/ShopList/ShopList'
  import SendNeed from '../../../components/SendNeed/SendNeed'

  export default {
    name: "NeedPut",
    data() {
      return {
        title: '需求提交',
        num: 0,
        isShow: false,
        isChecked: false,
      }
    },
    methods: {
      needSend(event) {
        let text = event.target.innerText;
        switch (text) {
          case '综合布线':
            this.num = 0;
            this.isShow = false;
            return
          case '无线网组':
            this.num = 1;
            this.isShow = false;
            return
          case '网络优化':
            this.num = 2;
            this.isShow = false;
            return
          case '其他':
            this.num = 3;
            this.isShow = true;
        }
      },
    },
    components: {
      NextStep,
      ShopList,
      SendNeed
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .need_wrap
    width 100%
    height 100%
    font-size 14px
    box-shadow: 0 0 0 0 rgba(229, 234, 243, 1)
    position relative
    .nav_wrap
      margin-bottom 8px
      background rgba(255, 255, 255, 1)
      .title
        padding 0 16px
        box-sizing border-box
        width: 1005;
        height: 48px;
        line-height 48px
        font-size: 16px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(58, 61, 74, 1);
      .nav_list
        width 100%
        padding 0 8px 0 16px
        box-sizing border-box
        clearFix()
        .nav_item
          float left
          width: 108px
          height: 36px
          line-height 36px
          margin 0 9px 8px 0
          background: rgba(238, 240, 246, 1)
          border-radius: 2px
          box-shadow 0 0 0 0 rgba(229, 234, 243, 1)
          font-size 14px
          font-family PingFangSC-Regular
          font-weight 400
          text-align: center
          color rgba(112, 117, 127, 1)
          &.isChecked
            color: rgba(255, 255, 255, 1);
            background: rgba(238, 81, 71, 1);
</style>
