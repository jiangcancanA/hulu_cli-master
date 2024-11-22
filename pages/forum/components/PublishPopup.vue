<template>
  <view class="publish">
    <u-popup :show="true" mode="center" bgColor="transparent" @close="popupClose">
      <div class="publish-panel">
        <div class="panel-title">发帖</div>
        <div class="panel-comment">
          <u-input :showAction="false" style="width: 638rpx;margin-bottom: 14rpx;" color="#C6D4DF" fontSize="28rpx" :customStyle="inputStyle"
          placeholder="标题" :adjustPosition="true" v-model="title" clearable></u-input>
          <u-input :showAction="false" style="width: 638rpx;" color="#C6D4DF" fontSize="28rpx" :customStyle="inputStyle2"
          placeholder="内容" :adjustPosition="true" v-model="content" clearable></u-input>
        </div>
        <div class="panel-operate">
          <div class="operate-icons">
            <img src="../../../static/image/photo.png" alt="">
            <img src="../../../static/image/vedio.png" alt="">
          </div>
          <div class="operate-btn" @click="public">发布</div>
        </div>
      </div>
    </u-popup>
  </view>
</template>
<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      inputStyle: {
        height: '72rpx',
        // width: '172rpx',
        color: '#C6D4DF',
        fontSize: '28rpx',
        borderRadius: '16rpx',
        border: 'none',
        backgroundColor: 'rgba(81, 97, 138, 0.4)' // 输入框背景颜色
      },
      inputStyle2: {
        display: 'block',
        height: '280rpx',
        // width: '172rpx',
        color: '#C6D4DF',
        fontSize: '28rpx',
        borderRadius: '16rpx',
        border: 'none',
        backgroundColor: 'rgba(81, 97, 138, 0.4)' // 输入框背景颜色
      },
    }
  },
  created() {
  },
  methods: {
    popupClose() {
      this.$emit('CLOSE')
    },
    public() {
      this.$emit('CLOSE')
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

.publish-panel {
  width: 702rpx;
  color: #fff;
  background: #1B1F2A;
  padding: 32rpx;
  border-radius: 24rpx;
  color: #fff;
  .panel-title {
    display: flex;
    align-items: center;
    margin-bottom: 12rpx;
    font-size: 28rpx;
  }
  .panel-comment {
    .ant-input {
      width: 100%;
      height: 160px;
      margin-bottom: 8px;
      border-radius: 16px;
      background: rgba(81, 97, 138, 0.16);
      border: none;
    }
  }
  .panel-operate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .operate-icons {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: auto;
        height: 20px;
        margin-right: 20px;
        cursor: pointer;
        transform: translateY(2px)
      }
    }
    .operate-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 16rpx;
      width: 120rpx;
      height: 25px;
      border-radius: 8rpx;
      background: linear-gradient(270deg, #1397F6 0%, #437EF0 99%, #437EF0 100%);
      font-size: 28rpx;
      color: #FFFFFF;
    }
  }
}
</style>