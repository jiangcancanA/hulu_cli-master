<template>
  <view class="add-goods">
    <u-popup :show="true" mode="center" closeable bgColor="transparent" @close="popupClose">
      <view class="goods">
        <div class="goods-title">买入</div>
        <div class="goods-label">
          <span class="icon">*</span>
          <span>选择待买入的饰品</span>
         </div>
         <div class="goods-input">
          <u-input :showAction="false" style="width: 660rpx;" class="custom-input" color="rgba(255, 255, 255, 0.8)" fontSize="24rpx" :customStyle="inputStyle" shape="square"
            placeholder="最低价1" :adjustPosition="true" v-model="formData.data1" clearable></u-input>
         </div>
         <div class="goods-label">
          <span class="icon">*</span>
          <span>买入饰品数量</span>
         </div>
         <div class="goods-input">
          <u-input :showAction="false" style="width: 660rpx;" class="custom-input" color="rgba(255, 255, 255, 0.8)" fontSize="24rpx" :customStyle="inputStyle" shape="square"
            placeholder="最低价1" :adjustPosition="true" v-model="formData.data1" clearable></u-input>
         </div>
         <div class="goods-footer">
            <div class="btn footer-cancel">取消</div>
            <div class="btn footer-confirm">确定</div>
         </div>
      </view>
    </u-popup>
  </view>
</template>
<script>
export default {
  data() {
    return {
      // 板块分布
      value: '',
       formData: {
        data1: ''
      },
      inputStyle: {
        height: '62rpx',
        // width: '172rpx',
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '24rpx',
        backgroundColor: '#1F3951', // 输入框背景颜色
        border: 'none' // 输入框边框颜色
      },
    }
  },
  created() {},
  methods: {
    popupClose() {
      this.$emit('closeDeal')
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
.goods {
  padding: 0px;
  border-radius: 24px;
  padding: 32rpx 32rpx 4rpx;
  background: #1B1F2A;
  width: 702rpx;
  color: #fff;
  .goods-title {
    padding: 0 38rpx 23rpx 0;
    margin-bottom: 32rpx;
    font-size: 28rpx;
    color: #E5E5E5;
    opacity: 0.8;
    border-bottom: 2rpx solid rgba(76, 86, 97, 0.48);
  }
  .goods-label {
    font-size: 28rpx;
    margin-bottom: 10rpx;
    color: #E5E5E5;
    opacity: 0.8;
    .icon {
      color: #1A9FFF;
    }
  }
  .goods-input {
    margin-bottom: 20rpx;
  }
  .goods-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 30rpx 0;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 112rpx;
      height: 50rpx;
      border-radius: 8rpx;
      font-size: 24rpx;
    }
    .footer-cancel {
      background: rgba(26, 147, 236, 0.16);
      border: 2rpx solid #8DA6BE;
      margin-right: 18rpx;
      color: #DCDEDF;
      opacity: 0.8;
    }
    .footer-confirm {
      background: linear-gradient(270deg, #1397F6 0%, #437EF0 99%, #437EF0 100%);
      color: #FFFFFF;
    }
  }
}
</style>