<!--头部组件-->
<template>
  <header class="header">
    <div class="outer">
      <img src="../../../static/images/icon_返回.png" class="return" @click="$router.back()">
      <span class="header_title">{{title}}</span>
      <slot name="add"></slot>
    </div>
    <slot name="nav"></slot>
  </header>
</template>

<script>

  export default {
    name: "TopHeader",
    props:{
      title: String
    },
    data() {
      return {}
    },
    methods: {
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .header
    width 100%
    background rgba(255, 255, 255, 1)
    padding 15px 16px
    box-sizing border-box
    position relative
    z-index 100
    bottom-border-1px(#E5EAF3)
    .outer
      text-align center
      .return
        vertical-align middle
        position absolute
        left 16px
        top 50%
        transform translateY(-50%)
      .header_title
        vertical-align middle
        font-size 18px
        font-family PingFangSC-Medium
        font-weight 500
        color rgba(58, 61, 74, 1)
        line-height 24px

</style>
