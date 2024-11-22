<template>
  <view class="add-collect">
    <u-popup :show="true" mode="center" bgColor="transparent" @close="popupClose">
    </u-popup>
  </view>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      // 今日在线
      onlineData: {
        number: '831,862人',
        time: '2024-09-10 14:42',
        yNumber: '364人',
        mNumber: '364人',
        data1: '+0%',
        data2: '-0%'
      }
    }
  },
  created() {
    console.log(123123123123)
  },
  methods: {
    popupClose() {
      this.$emit('closeToday')
    }
  }
}
</script>
<style lang="scss" scoped>
* {
	box-sizing: border-box;
}
::v-deep.today {
  color: #fff;
  background: #1B1F2A;
  // padding: 32rpx;
  // border-radius: 24rpx;
  box-sizing: border-box;
}

.collect {
  width: 702rpx;
  color: #fff;
  background: #1B1F2A;
  box-sizing: border-box;
  padding: 32rpx;
  border-radius: 24rpx;
  color: #fff;
  .online-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 32rpx;
    // border-bottom: 2rpx solid rgba(76, 86, 97, 1);
    // margin-bottom: 32rpx;
    .header-left {
      display: flex;
      .left-icon {
        background: rgba(26, 159, 255, 0.14);
        width: 74rpx;
        height: 74rpx;
        overflow: hidden;
        border-radius: 16rpx;
        margin-right: 20rpx;
        img  {
          width: 100%;
          height: 100%;
        }
      }
      .left-data {
        .data-label {
          font-size: 32rpx;
          line-height: 32rpx;
          color: #fff;
          margin-bottom: 12rpx;
        }
        .data-number {
          color: rgba(231, 24, 24, 1);
          font-size: 32rpx;
        }
      }
    }
    .header-right {
      .right-data {
        display: flex;
        align-items: center;
        color: rgba(198, 212, 223, 1);
        opacity: 0.8;
        font-size: 24rpx;
        margin-bottom: 8rpx;
        text-align: right;
        &:last-child {
          margin-bottom: 0px;
        }
        .data1 {
          margin-right: 8rpx;
          color: rgba(255, 255, 255, 1);
        }
        .label {
          // padding-left: 10rpx;
          text-align: left;
          width: 120rpx;
          font-size: 24rpx;
          display: inline-block;
          // width: 56px;
        }
      }
    }
  }
  .online-time {
    margin-bottom: 18px;
    font-size: 24rpx;
    color: #C6D4DF;
    opacity: 0.6;
    border-bottom: 2rpx solid rgba(76, 86, 97, 1);
    margin-bottom: 32rpx;
    padding-bottom: 32rpx;
  }
  .online-line {
    .line-label {
      margin-bottom: 30rpx;
      opacity: 0.8;
      color: #C6D4DF;
      font-size: 28rpx;
    }
    .line {
      width: 100%;
      height: 450rpx;
      border: 1px solid pink;
    }
  }
}
</style>