<!--个人设置界面-->
<template>
  <section>
    <TopHeader :title="title">
      <img src="../../../../static/images/icon_返回.png" class="return" @click="$router.back()" slot="return">
    </TopHeader>
    <ul class="setting_list">
      <li class="setting_item" @click="$router.push('/change_num')">
        <div class="name">更换号码</div>
        <div class="info">
          <img src="../../../../static/images/icon_更多.png" alt="">
        </div>
      </li>
      <li class="setting_item">
        <div class="name">版本信息</div>
        <div class="info">V01</div>
      </li>
    </ul>
    <div class="quit_btn" @click="$router.push('/login')">安全退出</div>
  </section>
</template>

<script>
  export default {
    name: "MySetting",
  data() {
    return {
      title: '我的设置',
      isShow: false
    }
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .setting_list
    width 100%
    margin-top 8px
    padding-left 16px
    box-sizing border-box
    background: rgba(255, 255, 255, 1)
    .setting_item
      width: 100%
      height: 48px
      display flex
      align-items center
      justify-content space-between
      padding-right 16px
      box-sizing border-box
      box-shadow: 0 0 0 0 rgba(229, 234, 243, 1)
      bottom-border-1px(#E5EAF3)
      font-size:14px;
      font-family:PingFangSC-Regular;
      .name
        color:rgba(58,61,74,1);
        line-height:20px;
      .info
        color:rgba(58,61,74,1);
        line-height:20px;
  .quit_btn
    width:100%
    height:48px
    margin-top 8px
    line-height 48px
    text-align: center
    font-size:14px;
    background:rgba(255,255,255,1)
    box-shadow:0 0 0 0 rgba(229,234,243,1)
    color:rgba(238,81,71,1);
</style>
