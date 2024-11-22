<template>
  <view>
    <view class="home-ranking-btn">
      <view style="font-size: 24rpx;" :style="{ color: tabIndex == 0 ? '#fff' : '#929ea8' }" @click="rankingClick(0)">在售榜</view>
      <view style="font-size: 24rpx;" :style="{ color: tabIndex == 1 ? '#fff' : '#929ea8' }" @click="rankingClick(1)">求购榜</view>
      <view style="font-size: 24rpx;" :style="{ color: tabIndex == 2 ? '#fff' : '#929ea8' }" @click="rankingClick(2)">涨跌榜</view>
      <view style="font-size: 24rpx;" :style="{ color: tabIndex == 3 ? '#fff' : '#929ea8' }" @click="rankingClick(3)">热度榜</view>
      <view style="font-size: 24rpx;" :style="{ color: tabIndex == 4 ? '#fff' : '#929ea8' }" @click="rankingClick(4)">市值榜</view>
      <view style="font-size: 24rpx;" :style="{ color: tabIndex == 5 ? '#fff' : '#929ea8' }" @click="rankingClick(5)">租赁榜</view>
    </view>
    <view class="home-ranking-table">
      <uni-table :stripe="false" emptyText="暂无更多数据">
        <!-- 表头行 -->
        <uni-tr>
          <uni-th style="font-size: 20rpx;" align="center">排行</uni-th>
          <uni-th style="font-size: 20rpx;" align="center">物品</uni-th>
          <uni-th align="center">
            <view style="display: flex; align-items: center; justify-content: center;font-size: 20rpx;"
              @click="sortByPrice('price')">
              <text style="font-size: 20rpx;">在售价格</text>
              <u-icon style="font-size: 20rpx;" :name="isAscending['price'] ? 'arrow-down-fill' : 'arrow-up-fill'"
                size="12"></u-icon>
            </view>
          </uni-th>
          <uni-th align="center">
            <view style="display: flex; align-items: center; justify-content: center;font-size: 20rpx;"
              @click="sortByPrice('number')">
              <text style="font-size: 20rpx;">在售数量</text>
              <u-icon style="font-size: 20rpx;" :name="isAscending['number'] ? 'arrow-down-fill' : 'arrow-up-fill'"
                size="12"></u-icon>
            </view>
          </uni-th>
        </uni-tr>
        <!-- 表格数据行 -->
        <uni-tr v-for="item in tableList" :key="item.id">
          <uni-td align="center">
            <view class="home-table-td">
              <u-image v-if="item.sort == 1" width="40rpx" height="60rpx"
                src="@/static/image/Group 46@4x.png"></u-image>
              <u-image v-else-if="item.sort == 2" width="40rpx" height="60rpx"
                src="@/static/image/18efaa1a344e3dff3ac2327ad0453d3.png"></u-image>
              <u-image v-else-if="item.sort == 3" width="40rpx" height="60rpx"
                src="@/static/image/53dcbc5463080d865cc4506ecfb09e6.png"></u-image>
              <text
                v-else-if="item.sort != 1 && item.sort != 2 && item.sort != 3">{{ item.sort }}</text>
            </view>
          </uni-td>
          <uni-td align="center">
            <view>
              <view style="display: flex; align-items: center">
                <view style="width: 4rpx; height: 24rpx; background-color: #1A9FFF;font-size: 20rpx;margin-right: 4rpx;"></view>
                <view style="margin-left: 5rpx; text-align: left; color: #b5c3ce;font-size: 20rpx;">游戏人物 |
                  {{ item.role }}
                </view>
              </view>
              <view style="margin-top: 3rpx; text-align: left; display: flex; align-items: center">
                <text style="margin-right: 10rpx;font-size: 16rpx;">近24小时</text>
                <view
                  style="display: flex; padding: 0 16rpx; align-items: center; justify-content: center;height: 28rpx; font-size: 16rpx;border-radius: 4rpx; background-color: rgba(168, 25, 29, 0.3); color: #e71818">
                  {{ item.change }}
                </view>
                <text style="font-size: 16rpx;margin: 0 15rpx">|</text>
                <text style="font-size: 16rpx;margin-right: 10rpx">租金</text>
                <view
                  style="display: flex; padding: 0 16rpx; align-items: center;height: 28rpx; justify-content: center; border-radius: 4rpx;font-size: 16rpx; background-color: rgba(54, 151, 103, 0.3); color: #369867">
                  {{ item.rent }}
                </view>
                <text style="font-size: 16rpx;margin: 0 15rpx">|</text>
                <text style="font-size: 16rpx;color: #1b93ec">详情</text>
              </view>
            </view>
          </uni-td>
          <uni-td align="center">
            <view style="font-size: 20rpx;color: #1b93ec" class="home-table-td">￥{{ item.price }}</view>
          </uni-td>
          <uni-td align="center">
            <view class="home-table-td">
              <text style="font-size: 20rpx;color: #b5c3ce">{{ item.number }}</text>
            </view>
          </uni-td>
        </uni-tr>
      </uni-table>
      <view
        style="margin-top: 15rpx;font-size: 20rpx; text-align: center; display: flex; align-items: center; justify-content: center; color: #b5c3ce">
        <text style="font-size: 20rpx;">查看更多</text>
        <view style="transform: translateY(1rpx)">
          <u-icon color="#b5c3ce" name="arrow-right" size="13"></u-icon>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: 0,
      tableList: [{
					id: 1,
					sort: 1,
					role: '战士(久经沙场)',
					rent: '0.03/0.03',
					change: '+23.9%',
					price: '955',
					number: 955
				},
				{
					id: 2,
					sort: 2,
					role: '战士(久经沙场)',
					rent: '0.03/0.03',
					change: '+23.9%',
					price: '954',
					number: 954
				},
				{
					id: 3,
					sort: 3,
					role: '战士(久经沙场)',
					rent: '0.03/0.03',
					change: '+23.9%',
					price: '953',
					number: 953
				},
				{
					id: 4,
					sort: 4,
					role: '战士(久经沙场)',
					rent: '0.03/0.03',
					change: '+23.9%',
					price: '952',
					number: 952
				}
			],
      isAscending: {
				price: false,
				number: false
			}, //降序
    }
  },
  methods: {
    rankingClick(index) {
			this.tabIndex = index;
		},
    sortByPrice(e) {
			this.isAscending[e] = !this.isAscending[e]; // 切换排序状态
			console.log(this.isAscending[e]);
			this.tableList.sort((a, b) => {
				if (this.isAscending[e]) {
					return Number(a[e]) - Number(b[e]); // 升序
				} else {
					return Number(b[e]) - Number(a[e]); // 降序
				}
			});
		},
  }
}
</script>
<style lang="scss" scoped>
.home-ranking-btn {
  margin-top: 20rpx;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  & > view {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.home-ranking-table {
  margin-top: 15rpx;
}
.home-table-td {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>