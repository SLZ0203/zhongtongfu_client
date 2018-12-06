<!--选择服务地址-->
<template>
  <section class="address_wrap">
    <TopHeader :title="title">
      <img src="../../../../../static/images/icon_添加.png" slot="add" class="add" @click="$router.push('new_address')">
    </TopHeader>
    <div class="scroll_wrap">
      <ul class="address_list">
        <li class="address_item" v-for="(add,index) in addressArr" :key="index">
          <div class="user_info">
            <span class="user_name">{{add.user_name}}</span>
            <span class="user_phone">{{add.phone}}</span>
            <div class="user_address ellipsis">{{add.address}}</div>
          </div>
          <div class="item_handle">
            <div class="default_address" @click="updataNum(index)">
              <span class="checked" :class="{on: index===num}"></span>
              <span class="default" :class="{on: index===num}">默认地址</span>
            </div>
            <div class="amend_delete">
              <img :src="add.amendImg" @click="$router.push('new_address')">
              <span @click="$router.push('new_address')">修改</span>
              <img :src="add.deleteImg" alt="">
              <span>删除</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "SelectAddress",
    data() {
      return {
        title: '选择服务地址',
        num: 0,
        addressArr: [
          {
            user_name: "Voices",
            phone: "19976890235",
            address: "中国广东省 佛山市 禅城区大高路290号 207室",
            amendImg: "static/images/icon_修改.png",
            deleteImg: "static/images/icon_16px_删除.png"
          },
          {
            user_name: "Voices",
            phone: "19976890235",
            address: "中国广东省 佛山市 禅城区大高路290号 207室",
            amendImg: "static/images/icon_修改.png",
            deleteImg: "static/images/icon_16px_删除.png"
          },
          {
            user_name: "Voices",
            phone: "19976890235",
            address: "中国广东省 佛山市 禅城区大高路290号 207室",
            amendImg: "static/images/icon_修改.png",
            deleteImg: "static/images/icon_16px_删除.png"
          },
          {
            user_name: "Voices",
            phone: "19976890235",
            address: "中国广东省 佛山市 禅城区大高路290号 207室",
            amendImg: "static/images/icon_修改.png",
            deleteImg: "static/images/icon_16px_删除.png"
          },
          {
            user_name: "Voices",
            phone: "19976890235",
            address: "中国广东省 佛山市 禅城区大高路290号 207室",
            amendImg: "static/images/icon_修改.png",
            deleteImg: "static/images/icon_16px_删除.png"
          },
        ]
      }

    },
    methods: {
      updataNum(index) {
        this.num = index
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
  @import "../../../../common/stylus/mixins.styl"
  .address_wrap
    width 100%
    .add
      vertical-align middle
      position absolute
      top 35px
      right 17px
    .scroll_wrap
      width 100%
      height 603px
      .address_list
        width 100%
        padding 8px 8px 0
        box-sizing border-box
        .address_item
          height 124px
          background rgba(255, 255, 255, 1)
          box-shadow 0 2px 6px -1px rgba(36, 37, 41, 0.1)
          border-radius 2px
          margin-bottom 8px
          padding 0 16px 12px
          box-sizing border-box
          .user_info
            padding 15px 0
            bottom-border-1px(#E5EAF3)
            font-size 16px
            .user_name, .user_phone, .user_address
              font-family PingFangSC-Medium
              font-weight 500
              line-height 20px
              color rgba(58, 61, 74, 1)
            .user_address
              font-size 14px
              margin-top 8px
          .item_handle
            display flex
            justify-content space-between
            margin-top 12px
            span, img
              vertical-align middle
            .default_address, .amend_delete
              font-size 14px
              font-family PingFangSC-Regular
              font-weight 400
              line-height 20px
              color rgba(112, 117, 127, 1)
              img
                margin-right 3px
            .default_address
              .checked
                display inline-block
                width 16px
                height 16px
                background url("../../../../../static/images/icon_未选中（小）.png") no-repeat
                &.on
                  background url("../../../../../static/images/icon_选中（小）.png") no-repeat
              .default
                &.on
                  color #EE5147
            .amend_delete
              text-align right
              img
                margin-left 12px


</style>
