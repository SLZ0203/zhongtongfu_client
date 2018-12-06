<!--信息修改页面-->
<template>
  <section>
    <TopHeader :title="title">
      <img src="../../../../static/images/icon_返回.png" class="return" @click="$router.back()" slot="return">
    </TopHeader>
    <ul class="user_info">
      <li class="info_item item_first">
        <div class="name">头像</div>
        <div>
          <img src="../../../../static/images/路径.png" class="headImg">
          <img src="../../../../static/images/icon_更多.png" alt="">
        </div>
      </li>
      <li class="info_item">
        <div class="name">姓名</div>
        <div class="info">voices</div>
      </li>
      <li class="info_item">
        <div class="name">联系电话</div>
        <div class="info">13052667270</div>
      </li>
      <li class="info_item">
        <div class="name">地址选择</div>
        <div>
          <span class="info">北京市朝阳区</span>
          <img src="../../../../static/images/icon_更多.png">
        </div>
      </li>
      <li class="info_item">
        <div class="name">详细地址</div>
        <input type="text" placeholder="请输入您的详细地址" class="input">
      </li>
    </ul>
    <footer class="save_btn" @click="isShow=true">保存</footer>
    <div class="save_success" v-show="isShow">
      <div class="outer_wrap">
        <img src="../../../../static/images/icon_弹窗_完成.png" alt="">
        <p class="win">信息修改成功 !</p>
        <p class="five">5秒后跳转到个人中心页面~</p>
        <div class="sureBtn" @click="isShow=false">确定</div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ChangeMessage",
    data() {
      return {
        title: '信息修改',
        isShow: false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .user_info
    width 100%
    margin-top 8px
    padding-left 16px
    box-sizing border-box
    background: rgba(255, 255, 255, 1)
    span, img
      vertical-align middle
    .info_item
      width: 100%
      height: 48px
      display flex
      align-items center
      justify-content space-between
      padding-right 16px
      box-sizing border-box
      box-shadow: 0 0 0 0 rgba(229, 234, 243, 1)
      bottom-border-1px(#E5EAF3)
      font-size:14px
      .headImg
        width:40px
        height:40px
        border-radius 50%
      .name
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(112,117,127,1);
        line-height:20px;
      .info
        color:rgba(58,61,74,1);
        line-height:20px;
      .input
        outline none
    .item_first
      height 68px
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
  .save_success
    width 100%
    height 100%
    position fixed
    top 0
    z-index 100
    background:rgba(60,64,72,0.8)
    .outer_wrap
      position fixed
      left 50%
      top 50%
      padding-top 24px
      box-sizing border-box
      text-align: center
      transform translate(-50%,-50%)
      width:311px
      height:250px
      background:rgba(255,255,255,1)
      border-radius:2px
      .win
        font-size:16px
        font-family:PingFangSC-Medium
        font-weight:500
        color:rgba(58,61,74,1)
        line-height:22px
      .five
        margin-top 7px
        font-size:14px
        font-family:PingFangSC-Regular
        font-weight:400
        color:rgba(112,117,127,1)
        line-height:21px
      .sureBtn
        width:311px
        height:48px
        line-height 48px
        position absolute
        bottom 0
        box-shadow:0 1px 0 0 rgba(229,234,243,1)
        font-size:16px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(236,88,79,1);
</style>
