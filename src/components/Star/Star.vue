<!--评价星星列表组件-->
<template>
  <ul class="star_list">
    <li class="star_item">
      <div class="name">仪容仪表</div>
      <div>
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
      </div>
    </li>
    <li class="star_item">
      <div class="name">文明用语</div>
      <div>
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
      </div>
    </li>
    <li class="star_item">
      <div class="name">上门准时</div>
      <div>
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
      </div>
    </li>
    <li class="star_item">
      <div class="name">是否满足客户需求</div>
      <div>
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
      </div>
    </li>
    <li class="star_item">
      <div class="name">服务态度</div>
      <div>
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
        <img src="../../../static/images/icon_评价_空星.png" alt="">
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Star"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .star_list
    width 100%
    margin-bottom 8px
    .star_item
      width 100%
      height 54px
      display flex
      align-items center
      justify-content space-between
      .name
        font-size: 14px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(58, 61, 74, 1);
        line-height: 22px;
      .score
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(92, 97, 111, 1);
        line-height: 17px;
</style>
