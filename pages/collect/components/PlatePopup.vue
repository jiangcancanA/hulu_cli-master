<template>
  <view class="plate">
    <u-popup :show="true" mode="center" closeable bgColor="transparent" @close="popupClose">
      <view class="plate-panel">
        <view class="panel-title">
          <view class="title-text">板块分布</view>
        </view>
        <view class="panel-header">
          <view class="header-item" :class="{'item-active': modelActive === '价值占比'}" @click="changeModel('价值占比')">价值占比</view>
          <view class="header-item" :class="{'item-active': modelActive === '数量占比'}" @click="changeModel('数量占比')">数量占比</view>
        </view>
        <view class="panel-line"></view>
      </view>
    </u-popup>
  </view>
</template>
<script>
export default {
  data() {
    return {
      // 板块分布
      modelActive: '价值占比'
    }
  },
  created() {},
  methods: {
    popupClose() {
      this.$emit('closePlate')
    },

    changeModel(type) {
      this.modelActive = type
    }
  }
}
</script>
<style lang="scss" scoped>
* {
	box-sizing: border-box;
}
::v-deep.plate {
  color: #fff;
  background: #1B1F2A;
  box-sizing: border-box;
}
.plate-panel {
  padding: 0px;
  border-radius: 24px;
  padding: 32rpx 32rpx 4rpx;
  background: #1B1F2A;
  width: 702rpx;
  .panel-title {
    display: flex;
    align-items: center;
    margin-bottom: 32rpx;
    font-size: 36rpx;
    color: #FFFFFF;
    .title-text {
      margin-right: 20rpx;
    }
  }
  .panel-line {
    height: 500rpx;
    margin-bottom: 30rpx;
    border: 1px solid pink;
    box-sizing: border-box;
  }
  .panel-header {
    display: flex;
    align-items: center;
     margin-bottom: 30rpx;
    padding-bottom: 6rpx;
    border-bottom : 2rpx solid #4C5661;
    .header-item {
      margin-right: 12rpx;
      padding: 12rpx 32rpx;
      border-radius: 16rpx 16rpx 0rpx 0rpx;
      background: rgba(26, 159, 255, 0.12);
      color: #1A9FFF;
    }
    .item-active {
      background: rgba(26, 159, 255, 0.32);
      color: #FFFFFF;
    }
  }
} 
</style>