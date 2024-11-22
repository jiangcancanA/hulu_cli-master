<template>
  <view class="deal">
    <div class="deal-panel">
      <div class="panel-header">
        <div class="header-avatar">
          <img src="" alt="">
        </div>
        <text class="header-text">昵称</text>
      </div>
      <div class="panel-content">
        <div class="content-item">
          <div class="item-label">总资产</div>
          <div class="item-value">20000.00</div>
        </div>
        <div class="content-item">
          <div class="item-label">浮动盈亏</div>
          <div class="item-value risk">+0.3</div>
        </div>
        <div class="content-item">
          <div class="item-label">总市值</div>
          <div class="item-value">20000.00</div>
        </div>
        <div class="content-item">
          <div class="item-label">日参考盈亏</div>
          <div class="item-value reduce">-0.3</div>
        </div>
      </div>
    </div>
    <div class="deal-panel panel-operate" style="padding-bottom: 30rpx;">
      <div class="panel-operate">
        <view class="operate-item" @click="openDealPopup">
          <view class="item-icon"
            :class="{'buy-active': buyActive === '买'}"
            @click="changeDealType('买')"
          >买</view>
          <view class="item-text">买入</view>
        </view>
        <view class="operate-item" @click="openDealPopup">
          <view class="item-icon"
            :class="{'buy-active': buyActive === '卖'}"
            @click="changeDealType('卖')"
          >卖</view>
          <view class="item-text">卖出</view>
        </view>
      </div>
    </div>

    <!-- 表格 -->
    <table-data />

    <!-- 买入/卖出 -->
    <deal-popup v-if="dealDialog.visible" @closeDeal="dealDialog.visible = false"/>
  </view>
</template>
<script>
import TableData from './components/TableData'
import DealPopup from './components/DealPopup'
export default {
  components: {
    TableData,
    DealPopup
  },
  data() {
    return {
      buyActive: '买',
      dealDialog: {
        visible: false
      }
    }
  },
  created() {
  },
  methods: {
    changeDealType(type) {
      this.buyActive = type
    },

    // 打开交易
    openDealPopup() {
      this.dealDialog.visible = true
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'style.scss';
* {
	box-sizing: border-box;
}
::v-deep {
  .u-button--primary {
    width: 108rpx !important;
    height: 52rpx !important;
    font-size: 22rpx!important;
  }

  .uni-table-text {
    background-color: #1b1f2a !important;
  }

  .uni-table-th {
    border-bottom: none !important;
  }

  .uni-table-tr {
    background-color: #242834 !important;
  }

  .uni-table-td {
    position: relative;
    background-color: #1b1f2a !important;
    border-bottom: 2rpx solid #2e3541 !important;
  }
}
</style>