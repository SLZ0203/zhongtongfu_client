<!--服务方案列表-->
<template>
  <section>
    <TopHeader :title="title"/>
    <div class="scroll_wrap">
      <ul class="project_list">
        <li class="pro_item">
          <div class="outer_wrap" @click="isShow1=!isShow1">
            <div>综合布线</div>
            <div>
              <img src="../../../../static/images/icon_展开.png" v-if="isShow1">
              <img src="../../../../static/images/icon_收起.png" v-else>
            </div>
          </div>
          <ul class="item_list" v-show="isShow1">
            <li class="list_item" @click="$router.push('/every_detail')">水星S105P（百兆POE交接）</li>
            <li class="list_item" @click="$router.push('/every_detail')">水星S105P（百兆POE交接）</li>
            <li class="list_item" @click="$router.push('/every_detail')">水星S105P（百兆POE交接）</li>
          </ul>
        </li>
        <li class="pro_item">
          <div class="outer_wrap" @click="isShow2=!isShow2">
            <div>无线网组</div>
            <div>
              <img src="../../../../static/images/icon_展开.png" v-if="isShow2">
              <img src="../../../../static/images/icon_收起.png" v-else>
            </div>
          </div>
          <ul class="item_list" v-show="isShow2">
            <li class="list_item" @click="$router.push('/every_detail')">水星S105P（百兆POE交接）</li>
            <li class="list_item" @click="$router.push('/every_detail')">水星S105P（百兆POE交接）</li>
            <li class="list_item" @click="$router.push('/every_detail')">水星S105P（百兆POE交接）</li>
            <li class="list_item" @click="$router.push('/every_detail')">水星S105P（百兆POE交接）</li>
            <li class="list_item" @click="$router.push('/every_detail')">水星S105P（百兆POE交接）</li>
            <li class="list_item" @click="$router.push('/every_detail')">水星S105P（百兆POE交接）</li>
          </ul>
        </li>
        <li class="pro_item">
          <div class="outer_wrap" @click="isShow3=!isShow3">
            <div>网络优化</div>
            <div>
              <img src="../../../../static/images/icon_展开.png" v-if="isShow3">
              <img src="../../../../static/images/icon_收起.png" v-else>
            </div>
          </div>
          <ul class="item_list" v-show="isShow3">
            <li class="list_item" @click="$router.push('/every_detail')">水星S105P（百兆POE交接）</li>
            <li class="list_item" @click="$router.push('/every_detail')">水星S105P（百兆POE交接）</li>
            <li class="list_item" @click="$router.push('/every_detail')">水星S105P（百兆POE交接）</li>
            <li class="list_item" @click="$router.push('/every_detail')">水星S105P（百兆POE交接）</li>
            <li class="list_item" @click="$router.push('/every_detail')">水星S105P（百兆POE交接）</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "ServiceProject",
    data() {
      return {
        title: '服务方案',
        isShow1: false,
        isShow2: false,
        isShow3: false,
      }
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.scroll_wrap', {
          click: true,
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .scroll_wrap
    width 100%
    height 600px
    .project_list
      width 100%
      padding-left 16px
      box-sizing border-box
      background: rgba(255, 255, 255, 1);
      .pro_item
        font-size: 16px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(58, 61, 74, 1);
        width 100%
        padding-right 16px
        box-sizing border-box
        bottom-border-1px(#E5EAF3)
        .outer_wrap
          line-height 48px
          display flex
          justify-content space-between
        .item_list
          .list_item
            height:48px
            line-height 48px
            bottom-border-1px(#E5EAF3)
</style>
