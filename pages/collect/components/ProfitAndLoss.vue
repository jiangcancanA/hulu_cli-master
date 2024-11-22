<template>
  <view class="profit">
    <view class="profit-panel">
      <view class="panel-title">
        <view class="title-text">总盈亏</view>
        <view class="title-icon">
          <!-- <img src="../../assets/images/reduce.png" alt=""> -->
          <!-- <img src="../../assets/images/risk.png" alt=""> -->
        </view>
      </view>
      <view class="panel-price">
        <view class="price-number">¥{{ detailData.price }}</view>
        <view class="price-number2">{{ detailData.number2 }}</view>
      </view>
      <view class="panel-info">
        <view class="info-label">涨跌情况</view>
        <view class="info-container">
          <view class="container-item"
            :class="{'item-risk': index % 2 === 1}"
            v-for="(item, index) in detailData.infoList"
            :key="index"
          >
            <view class="item-top">
              <view class="top-label">{{item.label}}</view>
              <!-- <img src="../../assets/images/reduce.png" alt=""> -->
              <!-- <img src="../../assets/images/risk.png" alt=""> -->
            </view>
            <view class="item-btm">
              <view class="btm-uni">¥</view>
              <view class="btm-price">{{ item.price }}</view>
              <view class="btm-uni">({{ item.data2 }})</view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="profit-panel">
      <view class="panel-title">
        <view class="title-text">总价值变动</view>
      </view>
      <view class="panel-line" id="totalPrice"></view>
    </view>

    <!-- 板块分布 -->
    <plate-popup v-if="platePopup.visible" @closePlate="closePlate"/>
  </view>
</template>
<script>
import PlatePopup from './PlatePopup'
export default {
  components: {
    PlatePopup
  },
  data() {
    return {
      // 总盈亏
      detailData: {
        price: '831,852',
        number2: '+11.91%',
        infoList: [
          {
            label: '今日',
            price: '601.22',
            data2: '3.1'
          },
          {
            label: '本周',
            price: '601.22',
            data2: '3.1'
          },
          {
            label: '本月',
            price: '601.22',
            data2: '3.1'
          },
          {
            label: '近三个月',
            price: '601.22',
            data2: '3.1'
          },
          {
            label: '近半年',
            price: '601.22',
            data2: '3.1'
          },
          {
            label: '近一年',
            price: '601.22',
            data2: '3.1'
          }
        ]
      },

      platePopup: {
        visible: true
      }
    }
  },
  created() {},
  methods: {
    closePlate() {
      this.platePopup.visible = false
    }
  }
}
</script>
<style lang="scss" scoped>
.profit {
  padding: 24rpx;
  color: #fff;
  .profit-panel {
    padding: 0px;
    border-radius: 24px;
    padding: 32rpx 32rpx 4rpx;
    background: #1B1F2A;
    .panel-title {
      display: flex;
      align-items: center;
      margin-bottom: 32rpx;
      font-size: 36rpx;
      color: #FFFFFF;
      .title-text {
        margin-right: 20rpx;
      }
      .title-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4rpx 12rpx;
        background: rgba(255, 35, 35, 0.11);
        border-radius: 8rpx;
        img {
          width: 32rpx;
        }
      }
    }
    .panel-price {
      display: flex;
      align-items: flex-end;
      color: #E71818;
      font-size: 48rpx;
      margin-bottom: 36rpx;
      .price-number {
        margin-right: 26rpx;
        line-height: 48rpx;
      }
      .price-number2 {
        font-size: 32rpx;
        line-height: 32rpx;
      }
    }
    .panel-info {
      .info-label {
        margin-bottom: 24rpx;
        color: #FFFFFF;
      }
      .info-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .container-item {
          width: calc(50% - 20rpx);
          margin-bottom: 28rpx;
          padding: 20rpx 32rpx;
          background: rgba(65, 194, 125, 0.16);
          color: #41C27D;
          border-radius: 16rpx;
          border: 2rpx solid #32D386;
          .item-top {
            display: flex;
            align-items: center;
            margin-bottom: 16rpx;
            color: #C6D4DF;
            .top-label {
              margin-right: 16rpx;
            }
            img {
              width: 32rpx;
            }
          }
          .item-btm {
            display: flex;
            align-items: flex-end;
            line-height: 36rpx;
            font-size: 36rpx;
            .btm-price {
              margin: 0 8rpx;
              font-size: 24rpx;
              line-height: 24rpx ;
            }
          }
        }
        .item-risk {
          background: rgba(255, 95, 94, 0.16);
          border: 2rpx solid #FF4545;
          color : #E71818;
        }
      }
    }
    .panel-line {
      height: 466rpx;
      border: 1px solid pink;
      margin-bottom: 20rpx;
    }
  } 
}
</style>