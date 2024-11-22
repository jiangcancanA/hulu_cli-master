<template>
  <view class="detail">
    <u-popup :show="true" mode="center" bgColor="transparent">
      <view class="detail-container">
        <view class="container-title">
          <view class="title-text">开箱数据</view>
          <view class="close" @click="popupClose"><img src="@/static/image/close.png" alt=""></view>
        </view>
        <view class="content">
          <view class="container-info">
            <view class="info-img">
              <img :src="detailData.detailInfo.cfUrl" alt="">
            </view>
            <view class="info-basic">
              <view class="basic-title">{{ detailData.detailInfo.goodsName }}</view>
              <view class="basic-price">¥{{ detailData.detailInfo.price }}</view>
              <view class="basic-buy">批量购买</view>
            </view>
          </view>
          <view class="container-content" v-for="(el, i) in dataList" :key="i">
            <view class="content-header" :style="{color: getColor(el.name), background: getBg(el.name)}">{{ el.name }}</view>
            <view class="content-main">
              <view class="main-item"
                v-for="(item, index) in el.list"
                :key="index"
              >
                <view class="item-img">
                  <img :src="item.img" alt="">
                </view>
                <view class="item-basic">
                  <view class="basic-top">
                    <view class="top-name1">{{ item.shortName }}</view>
                  </view>
                  <view class="basic-price">¥ {{ item.price  }}</view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </u-popup>
  </view>
</template>
<script>
import { unpackDataApi} from '@/api'
export default {
  props: {
    detailData: {
      type: Object,
      default:() => {}
    }
  },
  data() {
    return {
      dataList: [],
    }
  },
  mounted() {
    console.log(4444, this.detailData)
    this.getData()
  },
  methods: {
    popupClose() {
      this.$emit('closeunpack')
    },

    getData() {
      const params = {
        id: 87
      }
      unpackDataApi(params)
        .then(res => {
          for(let i in res.data) {
            this.dataList.push({
              name: i,
              list: res.data[i]
            })
          }
        })
    },

    getColor(key) {
      if (key === '大师') return '#E71818'
      if (key === '卓越') return '#9636FF'
      if (key === '高级') return '#0E96F8'
      if (key === '普通') return '#25BD6C'
      if (key === '隐秘') return '#66E718'
      if (key === '受限') return '#56B181'
      if (key === '军规级') return '#0000ff'
      if (key === '工业级') return '#008000'
      if (key === '普通级') return '#dddddd'
      if (key === '非凡') return '#800080'
      if (key === '保密') return '#56B100'
      if (key === '消费级') return '#567200'
      if (key === '奇异') return '#ffff00'
    },

    getBg(key) {
      if (key === '大师') return '#E7181860'
      if (key === '卓越') return '#9636FF60'
      if (key === '高级') return '#0E96F860'
      if (key === '普通') return '#25BD6C60'
      if (key === '隐秘') return '#66E71860'
      if (key === '受限') return '#56B18160'
      if (key === '军规级') return '#0000ff60'
      if (key === '工业级') return '#00800060'
      if (key === '普通级') return '#dddddd60'
      if (key === '非凡') return '#8000806'
      if (key === '保密') return '#56B10060'
      if (key === '消费级') return '#56720060'
      if (key === '奇异') return '#ffff0060'
    }
  }
}
</script>
<style lang="scss" scoped>
.detail-container {
  position: relative;
  width: 710rpx;
  overflow-y: auto;
  color: #fff;
  border-radius: 11.2rpx;
  padding: 32rpx 24rpx;
  background: linear-gradient(150deg, #042036 0%, #0E3B5A 57%, #06263B 102%);
  border: 2rpx solid #5E779E;
  box-shadow: 0rpx -2rpx 2rpx 0rpx #0095FF,0rpx 2rpx 2rpx 0rpx #0095FF,inset 0rpx 0rpx 16rpx 8rpx rgba(53, 174, 211, 0.32);
  .container-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title-text {
      font-size: 28rpx;
      color: #ECF6FE;
    }
    .close {
      height: 40rpx;
      width: 40rpx;
      margin-bottom: 11rpx;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .container-info {
    display: flex;
    align-items: center;
    max-height: calc(65);
    overflow-y: auto;
    margin-bottom: 10rpx;
    .info-img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 136rpx;
      height: 138rpx;
      margin-right: 32rpx;
      border-radius: 12rpx;
      background: radial-gradient(50% 50% at 50% 50%, rgba(124, 181, 248, 0.4) 0%, rgba(124, 181, 248, 0.4) 57%, rgba(48, 73, 111, 0.4) 100%), linear-gradient(180deg, #8FA4C3 0%, #ACB7CE 100%);
      img {
        max-width: 136rpx;
        max-height: 136rpx;
      }
    }
    .info-basic {
      .basic-title {
        font-size: 28rpx;
        color: #1A9FFF;
      }
    }
    .basic-price {
      font-size: 40rpx;
      color: #EDC315;
      margin-bottom: 14rpx;
    }
    .basic-buy {
      width: 146rpx;
      height: 46rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8rpx;
      border: 2rpx solid #1A9FFF;
      color: #1A9FFF;
      font-size: 24rpx;
    }
  }
  .content {
    max-height: calc(70vh - 60rpx);
    overflow-y: auto;
  }
  .container-content {
    .content-header {
      width: 90rpx;
      height: 46rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(231, 24, 24, 0.4);
      color: #E65555;
      font-size: 24rpx;
      color: #E65555;
      margin-bottom: 8rpx;
      border-radius: 8rpx;
    }
    .content-main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .main-item {
        width: calc(50% - 20rpx);
        margin-bottom: 40rpx;
        padding: 16rpx 28rpx;
        border-radius: 24rpx;
        background: #07304C;
        .item-img {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 174rpx;
          height: 116rpx;
          margin: 0 auto;
          border-radius: 20rpx;
          margin-bottom: 18rpx;
          background: linear-gradient(180deg, #8FA4C3 -3%, #ACB7CE 100%);
          overflow: hidden;
          img {
            max-width: 160rpx;
            max-height: 100rpx;
          }
        }
        .item-basic {
          .basic-top {
            display: flex;
            align-items: center;
            margin-bottom: 8rpx;
            height: 20rpx;
            font-size: 20rpx;
            color: #C7D5E0;
            line-height: 22px;
            border-left: 4rpx solid #1A9FFF;
            .top-name1 {
              padding-left: 12rpx;
            }
            .division {
              margin: 0 6px;
              color: #C7D5E0;
              opacity: 0.6;
            }
          }
          .basic-price {
            color: #1A9FFF;
            font-size: 28rpx;
          }
        }
      }
    }
    // &:nth-child(2) {
    //   .content-header {
    //     background: rgba(150, 54, 255, 0.4);
    //     color: #BA7BFF;
    //   }
    // }
  }
}
</style>