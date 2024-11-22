<template>
  <view class="high">
    <u-popup zIndex="99999" :safeAreaInsetBottom="false" :safeAreaInsetTop="false" :show="true" mode="center" @close="popupClose">
      <view class="high-content">
        <view class="content-left">
          <view class="left-item"
            :class="{'type-active': activeTitle === item}"
            v-for="(item, index) in typeList"
            :key="index"
            @click="changeType(item)"
          >{{item}}</view>
        </view>
        <view class="content-main">
          <view class="main-from">
            <view class="from-label">价格范围：</view>
            <view class="from-panel" style="padding:0">
              <view class="panel-prices">
                <view class="prices-price"
                  :class="{'price-active': activePrice === item}"
                  v-for="(item, index) in priceList"
                  :key="index"
                  @click="changePrice(item)"
                >{{ item }}</view>
              </view>
            </view>
            <view class="from-label">自定义：</view>
            <view class="from-panel">
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最低价1" :adjustPosition="true" v-model="filterInfoData.priceRange.min" clearable></u-input>
              <view class="division">~</view>
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最高价" v-model="filterInfoData.priceRange.max" clearable></u-input>
            </view>
            <view class="from-label">在售数量：</view>
            <view class="from-panel">
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最低价" v-model="filterInfoData.goodsNumRange.min" clearable></u-input>
              <view class="division">~</view>
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最高价" v-model="filterInfoData.goodsNumRange.max" clearable></u-input>
            </view>
            <view class="from-label">出租数量：</view>
            <view class="from-panel">
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最低价" v-model="filterInfoData.leaseRange.min" clearable></u-input>
              <view class="division">~</view>
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最高价" v-model="filterInfoData.leaseRange.max" clearable></u-input>
            </view>
            <view class="from-label">求购数量：</view>
            <view class="from-panel">
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最低价" v-model="filterInfoData.buyNumRange.min" clearable></u-input>
              <view class="division">~</view>
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最高价" v-model="filterInfoData.buyNumRange.max" clearable></u-input>
            </view>
            <view class="from-label">短租价格范围：</view>
            <view class="from-panel">
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最低价" v-model="filterInfoData.leasePriceRange.min" clearable></u-input>
              <view class="division">~</view>
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最高价" v-model="filterInfoData.leasePriceRange.max" clearable></u-input>
            </view>
            <view class="from-label">长租价格范围：</view>
            <view class="from-panel">
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最低价" v-model="filterInfoData.longLeasePriceRange.min" clearable></u-input>
              <view class="division">~</view>
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最高价" v-model="filterInfoData.longLeasePriceRange.max" clearable></u-input>
            </view>
            <!-- <view class="from-label">短租收益率(%)：</view>
            <view class="from-panel">
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最低价" v-model="formData.data1" clearable></u-input>
              <view class="division">~</view>
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最高价" v-model="formData.data1" clearable></u-input>
            </view>
            <view class="from-label">长租收益率(%)：</view>
            <view class="from-panel">
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最低价" v-model="formData.data1" clearable></u-input>
              <view class="division">~</view>
              <u-input :showAction="false" style="width: 100rpx;" class="custom-input" color="#DCDEDF" fontSize="24rpx" :customStyle="inputStyle" shape="square"
                placeholder="最高价" v-model="formData.data1" clearable></u-input>
            </view> -->
          </view>
          <div class="main-footer">
            <div class="default-btn" style="margin-right: 12rpx" @click="resetData">重置</div>
            <div class="default-btn" style="margin-right: 12rpx">保存</div>
            <div class="primary-btn" @click="selectData">查询</div>
          </div>
        </view>
      </view>
    </u-popup>
  </view>
</template>
<script>
export default {
  props: {
    filterInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      typeList: ['区间', '类型', '品质', '类别', '磨损'],
      activeTitle: '区间',
      priceList: ['100元以下', '100-500元', '500-1000元', '1000-5000元', '5000-10000元'],
      activePrice: '100元以下',
      filterInfoData: {},

      inputStyle: {
        height: '44rpx',
        // width: '172rpx',
        color: '#DCDEDF',
        fontSize: '24rpx',
        backgroundColor: '#142C44', // 输入框背景颜色
        border: '1px solid #1A9FFF' // 输入框边框颜色
      },
    }
  },
  created() {
    this.filterInfoData = this.filterInfo
  },
  methods: {
    // 切换类型
    changeType(name) {
      this.activeTitle = name
    },
    // 切换区间
    changePrice(item) {
      this.activePrice = item
    },
    popupClose() {
      this.$emit('closeHighSearch')
    },

    resetData() {
      this.filterInfoData = {
        priceRange: {
          max: '',
          min: ''
        },
        goodsNumRange: {
          max: '',
          min: ''
        },
        leaseRange: {
          max: '',
          min: ''
        },
        buyNumRange: {
          max: '',
          min: ''
        },
        leasePriceRange: {
          max: '',
          min: ''
        },
        longLeasePriceRange: {
          max: '',
          min: ''
        },
        quality: [],
        category: [],
        wear: []
      }
      this.$emit('selectData', this.filterInfoData)
    },

    selectData() {
      console.log(111, this.filterInfoData)
      this.$emit('selectData', this.filterInfoData)
    }
  }
}
</script>
<style scoped lang="scss">
.high-content {
  width: 640rpx;
  padding: 0;
  overflow: hidden;
  background: #0F151E;
  border-radius: 8rpx;
  color: #fff;
  width: 640rpx;
  display: flex;
  border: 1px solid #264973;
  .content-left {
    width: 108rpx;
    padding: 46rpx 0;
    flex-shrink: 0;
    border-radius: 8rpx 0rpx 0rpx 8rpx;
    background: #264973;
    backdrop-filter: blur(80rpx);
    .left-item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 56rpx;
      width: 100%;
      height: 86rpx;
      font-size: 24rpx;
      color: #DCDEDF;
    }
    .type-active {
      background: #1C293A;
    }
  }
  .content-main {
    padding: 30rpx 26rpx;
    max-height: 80vh;
    overflow-y: auto;
    .main-from {
      .from-label {
        margin-bottom: 6rpx;
        font-size: 24rpx;
        color: #DCDEDF;
        opacity: 0.8;
      }
      .from-panel {
        display: flex;
        align-items: center;
        margin-bottom: 24rpx;
        padding-right: 120rpx;
        &:first-child {
          padding-right: 0;
        }
        .panel-prices {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: -16rpx;
          .prices-price {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16rpx;
            font-size: 24rpx;
            margin-right: 10rpx;
            padding: 8rpx 10rpx;
            background: rgba(26, 147, 236, 0.16);
            border-radius: 8rpx;
            border: 2rpx solid #8DA6BE;
            color: #DCDEDF;
            opacity: 0.8;
          }
          .price-active {
            color: #1A9FFF;
            background: linear-gradient(270deg, rgba(25, 147, 235, 0.32) 0%, rgba(67, 147, 240, 0.32) 46%, rgba(57, 136, 255, 0.32) 100%);
            border: 2rpx solid #1993EB;
          }
        }
        .division {
          margin: 0 15rpx;
        }
      }
    }
    .main-footer {
      margin-top: 100rpx;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}
.custom-input {
  height: 40rpx;
  width: 100rpx!important;
  font-size: 24rpx;
  background-color: #142C44; // 输入框背景颜色
  border: 2rpx solid #1A9FFF; // 输入框边框颜色
  border-color: #1A9FFF;
}
::v-deep.u-popup__content {
  background-color: transparent!important;
}
</style>