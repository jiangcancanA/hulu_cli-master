<template>
  <view class="today">
    <u-popup :show="true" mode="center" bgColor="transparent" @close="popupClose">
      <!-- 今日在线 -->
      <view class="aside-online">
        <view class="online-header">
          <view class="header-left">
            <view class="left-icon">
              <!-- <img src="../../assets/images/user.svg" alt=""> -->
            </view>
            <view class="left-data">
              <view class="data-label">今日在线</view>
              <view class="data-number">{{ onlineData.number }}</view>
            </view>
          </view>
          <view class="header-right">
            <view class="right-data">
              <span class="label">较昨日</span>
              <span class="data1">({{ onlineData.yNumber }})</span>
              <span class="data2 risk">{{ onlineData.data1 }}</span>
            </view>
            <view class="right-data">
              <span class="label">本月平均</span>
              <span class="data1">({{ onlineData.mNumber }})</span>
              <span class="data2 reduce">{{ onlineData.data2 }}</span>
            </view>
          </view>
        </view>
        <view class="online-time">更新时间：{{ onlineData.time }}</view>
        <view class="online-line">
          <view class="line-label">每月平均人数曲线图</view>
          <view class="line" id="peopleLine"></view>
        </view>
      </view>
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
  },
  methods: {
    popupClose() {
      this.$emit('closeToday')
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep.today {
  color: #fff;
  background: #1B1F2A;
  // padding: 32rpx;
  // border-radius: 24rpx;
}

.aside-online {
  width: 702rpx;
  box-sizing: border-box;
  color: #fff;
  background: #1B1F2A;
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