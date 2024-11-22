<template>
  <view class="collect">
    <view class="collect-header">
      <u-scroll-list :indicator="false">
        <view class="header-item"
        :class="{'active-item': index === activeIndex}"
          v-for="(item, index) in headerList"
          :key="index"
          @click="changeHeader(index)"
        >
          <view class="item-text">
            {{ item.name }}
          </view>
        </view>
        <view class="header-item">+</view>
      </u-scroll-list>
    </view>
    <view class="collect-basic">
      <view class="basic-data">
        <view class="data-part">
          <view class="part-title">总盈亏</view>
          <view class="part-icon">
            <img src="" alt="">
          </view>
          <view class="part-btn">板块分布</view>
        </view>
        <view class="data-price">
          <view class="price-number">¥831,862</view>
          <view class="price-ratio">+11.91%</view>
        </view>
        <view class="data-today">
          <view class="today-label">今日</view>
          <img src="" alt="">
          <view class="today-price">
            <view class="text1">¥ 607.21</view>
            <view class="text2">(3.1)</view>
          </view>
        </view>
      </view>
      <view class="basic-check">
        <div class="check-label">查看详情</div>
        <div class="check-line">
          <div class="line-label">总价值变动</div>
          <div class="line"></div>
        </div>
      </view>
    </view>
    <view class="collect-operate">
      <div class="operate-add">添加饰品</div>
      <div class="operate-right">
        <div class="right-btn">绑定Steam</div>
        <div class="right-btn">列显示</div>
        <div class="right-btn">列显示</div>
        <div class="right-btn">筛选</div>
      </div>
    </view>
    <view class="collect-statistics">
      <u-scroll-list :indicator="false">
        <div class="statistics-item"
          v-for="(item, index) in totalData"
          :key="index"
        >
          <div class="item-label">{{ item.name }}</div>
          <div class="item-info">
            <text class="text1">{{ item.number }} <text class="text2" v-if="!index">件</text></text>
            <div class="reduce" v-show="index >= 2">({{ item.ratio }})</div>
          </div>
        </div>
      </u-scroll-list>
    </view>
    <!-- 表格 -->
    <table-data></table-data>
    <!-- 添加饰品 -->
    <add-goods-popup v-if="addGoodsDialog.visible" @closeAddGoods="addGoodsDialog.visible = false"/>
  </view>
</template>
<script>
import TableData from './components/TableData'
import AddGoodsPopup from './components/AddGoodsPopup'
export default {
  components: {
    TableData,
    AddGoodsPopup
  },
  data() {
    return {
      headerList: [
        {
          name: '1号库存'
        },
        {
          name: '2号库存'
        },
        {
          name: '3号库存'
        },
        {
          name: '4号库存'
        },
        {
          name: '5号库存'
        },
        {
          name: '6号库存'
        },
        {
          name: '7号库存'
        }
      ],
      activeIndex: 0,

      addGoodsDialog: {
        visible: false
      },

      // 数据展示
      totalData: [
        {
          name: '饰品数量',
          number: 155
        },
        {
          name: '饰品总价值 ¥',
          number: 1558.43
        },
        {
          name: '短租租金 ¥',
          number: 155.43,
          ratio: 10.5
        },
        {
          name: '长租租金 ¥',
          number: 155.33,
          ratio: 10.5
        }
      ],
    }
  },
  created() {},
  methods: {
    changeHeader(index) {
      this.activeIndex = index
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'style.scss';
.u-scroll-list {
  padding-bottom: 0px;
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