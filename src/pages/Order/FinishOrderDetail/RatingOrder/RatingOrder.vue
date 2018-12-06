<!--订单评价页面-->
<template>
  <section class="rating_wrap">
    <TopHeader :title="title"/>
    <div class="scroll_wrap">
      <div class="outer_wrap">
        <div class="user_wrap">
          <img src="../../../../../static/images/商品.jpg" alt="">
          <p>罗秀兰</p>
        </div>
        <div class="all_rating">
          <div @click="goodOn">
            <img src="../../../../../static/images/icon_好评_默认.png" v-if="good">
            <img src="../../../../../static/images/icon_好评_选中.png" v-else>
            <p>很好</p>
          </div>
          <div @click="notBadOn">
            <img src="../../../../../static/images/icon_中评_默认.png" v-if="notBad">
            <img src="../../../../../static/images/icon_中评_选中.png" v-else>
            <p>还不错</p>
          </div>
          <div @click="badOn">
            <img src="../../../../../static/images/icon_差评_默认.png" v-if="bad">
            <img src="../../../../../static/images/icon_差评_选中.png" v-else>
            <p>不满意</p>
          </div>
          <div class="rating_title">整体评价</div>
        </div>
        <Star/>
        <TextWrap>
          <p class="add" slot="send_name">添加图片</p>
        </TextWrap>
      </div>
    </div>
    <SubmitBtn/>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import Star from '../../../../components/Star/Star'
  import TextWrap from '../../../../components/TextWrap/TextWrap'
  import SubmitBtn from '../../../../components/SubmitBtn/SubmitBtn'
  export default {
    name: "RatingOrder",
    data() {
      return {
        title: '发表评价',
        isShow: false,
        good: true,
        notBad: true,
        bad: true
      }
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.scroll_wrap', {
          click: true
        })
      })
    },
    methods:{
      goodOn(){
        this.good = !this.good;
        this.notBad = true;
        this.bad = true
      },
      notBadOn(){
        this.notBad = !this.notBad;
        this.good = true;
        this.bad = true
      },
      badOn(){
        this.bad = !this.bad;
        this.notBad = true;
        this.good = true
      }
    },
    components:{
      Star,
      TextWrap,
      SubmitBtn
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .rating_wrap
    width 100%
    height 100%
    background: rgba(255, 255, 255, 1);
    .scroll_wrap
      width 100%
      height 550px
      .outer_wrap
        width 100%
        padding 0 16px
        box-sizing border-box
        .user_wrap
          padding 16px 0
          text-align: center
          img
            width: 56px;
            height: 56px;
            border-radius 50%
            margin-bottom 8px
          p
            font-size: 16px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(58, 61, 74, 1);
            line-height: 22px;
        .all_rating
          width 100%
          height 99px
          padding 0 60px
          position relative
          text-align: center
          box-sizing border-box
          display flex
          align-items center
          justify-content space-between
          bottom-border-1px($main)
          top-border-1px($main)
          p
            margin-top 8px
            font-size: 14px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(58, 61, 74, 1);
            line-height: 20px;
          .rating_title
            position absolute
            top -10px
            left 50%
            transform translateX(-50%)
            z-index 100
            background #fff
            width 88px
            font-size: 14px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(112, 117, 127, 1);
            line-height: 20px;
</style>
