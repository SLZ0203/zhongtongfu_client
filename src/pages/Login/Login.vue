<!--登录页面-->
<template>
  <section class="login_wrap">
    <img src="../../../static/images/cion_登录_关闭.png" alt="" class="login_close">
    <img src="../../../static/images/登录_logo.png" alt="" class="login_logo">
    <p class="app_name">通服管家</p>
    <div class="input_wrap">
      <input type="text" class="phone" maxlength="11" placeholder="请输入手机号" v-model="phone">
      <span class="add_86">+86</span>
      <span class="line"></span>
      <input type="text" class="code" maxlength="4" placeholder="请输入验证码" v-model="authCode">
      <button class="getCode" :class="{sendCode:computeTime>0}" @click="getCode" :disabled="computeTime>0">
        {{computeTime > 0 ? `重新获取${computeTime}s` : '获取验证码'}}
      </button>
      <button class="login_btn" @click="login">登录</button>
    </div>
    <div class="login_way">
      <p class="third">第三方账号登录</p>
      <div class="third_img">
        <img src="../../../static/images/icon_微信1.png" alt="" class="wechat">
        <img src="../../../static/images/icon_qq1.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
  import {Toast} from 'mint-ui';
  import {postURL} from '../../api/index'

  export default {
    name: "Login",
    data() {
      return {
        computeTime: 0,//倒计时时间
        phone: '',//登录账号，手机号
        authCode: '',//短信验证码
        password: '',
      }
    },
    methods: {
      //获取验证码
      getCode() {
        if (!this.isRightPhone) {
          return Toast({
            message: '请输入正确的手机号！',
            duration: 2000
          });
        } else {
          this.computeTime = 60;
          const intervalId = setInterval(() => {
            if (this.computeTime <= 0) {
              clearInterval(intervalId);
              this.computeTime = 0;
              return
            }
            this.computeTime--;
          }, 1000);
          //发送请求发送短信验证码
          const url = postURL + '/login/sendAuthCode';
          this.$axios.post(url, {
            "data": this.phone,
            "requestId": new Date().getTime()
          }).then(res => {
            const result = res.data;
            if (result === 200) {
              Toast({
                message: result.message,
                duration: 2000
              })
            } else {
              Toast({
                message: result.message,
                duration: 2000
              })
            }
          }).catch(error => {
            console.log(error)
          })
        }
      },
      //点击请求登录
      login() {
        //前台表单验证
        if (!this.isRightPhone) {
          return Toast({
            message: '请输入正确的手机号！',
            duration: 2000
          });
        } else if (!this.authCode) {
          return Toast({
            message: '请输入验证码！',
            duration: 2000
          });
        } else if (!this.isRightCode) {
          return Toast({
            message: '请输入正确的验证码！',
            duration: 2000
          });
        }
        //发登录的请求
        const url = postURL + '/login/login';
        this.$axios.post(url, {
          "data": {
            "authCode": this.authCode,
            "userType": 9,
            "username": this.phone
          },
          "requestId": new Date().getTime()
        }).then(res => {
          const result = res.data;
          if (result.code === 200) {
            console.log(result.data.token);
            this.$router.push('/home')
          }
        })
      }
    },
    computed: {
      //手机号正则验证
      isRightPhone() {
        return /^1[3|4|5|7|8|9][0-9]\d{8}$/.test(this.phone)
      },
      //验证码正则验证
      isRightCode() {
        return /^\d{4}$/.test(this.authCode)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login_wrap
    width 100%
    height 100%
    text-align: center
    position relative
    background-color rgba(255, 255, 255, 1)
    background-image url("../../../static/images/登录页_背景.png")
    background-repeat no-repeat
    background-size 100%
    .login_close
      position absolute
      top 24px
      left 16px
    .login_logo
      margin 80px 0 10px
    .app_name
      font-size 20px /*px*/
      font-family PingFangSC-Medium
      font-weight 500
      color rgba(238, 81, 71, 1)
      line-height 28px
      margin-bottom 48px
    .input_wrap
      position relative
      input
        width 311px
        height 48px
        background rgba(255, 255, 255, 1)
        border-radius 2px
        border 1px solid #E7EAEE
        font-size 16px
        padding-left 16px
        box-sizing border-box
        outline none
      .phone
        padding-left 78px
        margin-bottom 16px
        position relative
      .add_86
        position absolute
        top 13px
        left 48px
        font-size 16px
        font-family PingFangSC-Regular
        font-weight 400
        color rgba(58, 61, 74, 1)
        line-height 22px
      .line
        position absolute
        left 93px
        top 16px
        display inline-block
        width 1px
        height 16px
        background rgba(231, 234, 238, 1)
      .code
        margin-bottom 40px
      .getCode
        font-size 16px
        font-family PingFangSC-Regular
        font-weight 400
        background transparent
        border none
        text-decoration underline
        color rgba(238, 81, 71, 1)
        line-height 22px
        position absolute
        right 48px
        top 74px
        &.sendCode
          color #F6A8A3
      .login_btn
        width 303px
        height 48px
        background rgba(238, 81, 71, 1)
        box-shadow 0 6px 12px -2px rgba(238, 81, 71, 0.3)
        border-radius 4px
        border none
        font-size 18px
        font-family PingFangSC-Medium
        font-weight 500
        color rgba(255, 255, 255, 1)
        line-height 25px
    .login_way
      width 100%
      height 84px
      padding-bottom 24px
      box-sizing border-box
      position absolute
      bottom 0
      .third
        font-size 14px
        font-family PingFangSC-Regular
        font-weight 400
        color rgba(161, 167, 179, 1)
        line-height 20px
      .third_img
        margin-top 16px
        .wechat
          margin-right 30px
</style>
