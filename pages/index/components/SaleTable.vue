<template>
  <view>
    <view class="home-ranking-btn">
      <view style="font-size: 24rpx;" :style="{ color: tabIndex == '在售榜' ? '#fff' : '#929ea8' }" @click="rankingClick('在售榜')">在售榜</view>
      <view style="font-size: 24rpx;" :style="{ color: tabIndex == '求购榜' ? '#fff' : '#929ea8' }" @click="rankingClick('求购榜')">求购榜</view>
      <view style="font-size: 24rpx;" :style="{ color: tabIndex == '涨跌榜' ? '#fff' : '#929ea8' }" @click="rankingClick('涨跌榜')">涨跌榜</view>
      <view style="font-size: 24rpx;" :style="{ color: tabIndex == '热度榜' ? '#fff' : '#929ea8' }" @click="rankingClick('热度榜')">热度榜</view>
      <view style="font-size: 24rpx;" :style="{ color: tabIndex == '市值榜' ? '#fff' : '#929ea8' }" @click="rankingClick('市值榜')">市值榜</view>
      <view style="font-size: 24rpx;" :style="{ color: tabIndex == '租赁榜' ? '#fff' : '#929ea8' }" @click="rankingClick('租赁榜')">租赁榜</view>
    </view>
    <view class="home-ranking-table">
      <uni-table style="min-width: 1000rpx;" :stripe="false" emptyText="暂无更多数据">
        <!-- 表头行 -->
        <uni-tr>
          <uni-th align="center"><text style="font-size: 20rpx;">排行</text></uni-th>
          <uni-th align="center"><text style="font-size: 20rpx;">物品</text></uni-th>
          <uni-th align="center">
            <view style="display: flex; align-items: center; justify-content: center;font-size: 20rpx;"
              @click="sortByPrice('price')">
              <text style="font-size: 20rpx;">在售价格</text>
              <u-icon style="font-size: 20rpx;" :name="isAscending['price'] ? 'arrow-down-fill' : 'arrow-up-fill'"
                size="11"></u-icon>
            </view>
          </uni-th>
          <uni-th align="center">
            <view style="display: flex; align-items: center; justify-content: center;font-size: 20rpx;"
              @click="sortByPrice('goodsNum')">
              <text style="font-size: 20rpx;">在售数量</text>
              <u-icon style="font-size: 20rpx;" :name="isAscending['goodsNum'] ? 'arrow-down-fill' : 'arrow-up-fill'"
                size="11"></u-icon>
            </view>
          </uni-th>
          <uni-th align="center">
            <view style="display: flex; align-items: center; justify-content: center;font-size: 20rpx;"
              @click="sortByPrice('lowPrice')">
              <text style="font-size: 20rpx;">在售低价</text>
              <u-icon style="font-size: 20rpx;" :name="isAscending['lowPrice'] ? 'arrow-down-fill' : 'arrow-up-fill'"
                size="11"></u-icon>
            </view>
          </uni-th>
          <!-- <uni-th align="center">
            <view style="display: flex; align-items: center; justify-content: center;font-size: 20rpx;"
              @click="sortByPrice('number')">
              <text style="font-size: 20rpx;">成交价</text>
              <u-icon style="font-size: 20rpx;" :name="isAscending['number'] ? 'arrow-down-fill' : 'arrow-up-fill'"
                size="11"></u-icon>
            </view>
          </uni-th> -->
          <uni-th align="center"><text style="font-size: 20rpx;">趋势</text></uni-th>
        </uni-tr>
        <!-- 表格数据行 -->
        <uni-tr v-for="(item, index) in tableData" :key="item.id">
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
          <uni-td align="center" style="min-width: 400rpx;">
            <view>
              <view style="display: flex; align-items: center">
                <view style="width: 4rpx; height: 24rpx; background-color: #1A9FFF;font-size: 20rpx;margin-right: 4rpx;"></view>
                <view style="margin-left: 5rpx; text-align: left; color: #b5c3ce;font-size: 20rpx;">
                  {{ item.name }}
                </view>
              </view>
              <view style="margin-top: 3rpx; text-align: left; display: flex; align-items: center">
                <text style="margin-right: 10rpx;font-size: 16rpx;">近24小时</text>
                <view
                  style="display: flex; padding: 0 16rpx; align-items: center; justify-content: center;height: 28rpx; font-size: 16rpx;border-radius: 4rpx; background-color: rgba(168, 25, 29, 0.3); color: #e71818"
                  :style="{'background-color': item.lastRate && item.lastRate.includes('-')? 'rgba(54, 151, 103, 0.3)' : 'rgba(168, 25, 29, 0.3)', color: item.lastRate && item.lastRate.includes('-')? '#369867' : '#e71818'}"
                  >
                  {{ item.lastRate }}
                </view>
                <text style="font-size: 16rpx;margin: 0 15rpx">|</text>
                <text style="font-size: 16rpx;margin-right: 10rpx">租金</text>
                <view
                  style="display: flex; padding: 0 16rpx; align-items: center;height: 28rpx; justify-content: center; border-radius: 4rpx;font-size: 16rpx; background-color: rgba(54, 151, 103, 0.3); color: #369867">
                  {{ item.leasePrice1 }}
                </view>
                <text style="font-size: 16rpx;margin: 0 15rpx">|</text>
                <text style="font-size: 16rpx;color: #1b93ec">详情</text>
              </view>
            </view>
          </uni-td>
          <uni-td align="center">
            <view style="font-size: 20rpx;color: #1b93ec" class="home-table-td">¥ {{ item.price }}</view>
          </uni-td>
          <uni-td align="center">
            <view class="home-table-td">
              <text style="font-size: 20rpx;color: red">{{ item.goodsNum }}</text>
            </view>
          </uni-td>
          <uni-td align="center">
            <view class="home-table-td">
              <text style="font-size: 20rpx;color: #41C27D">¥ {{ item.lowPrice }}</text>
            </view>
          </uni-td>
          <uni-td align="center">
            <view class="home-table-td">
              <view class="view-trend">
                <qiun-data-charts type="area" background="rgba(27, 31, 42,1)" :opts="opts" :chartData="chartDataList[index]" />
              </view>
              <!-- <text style="font-size: 20rpx;color: #b5c3ce">趋势</text> -->
            </view>
          </uni-td>
        </uni-tr>
      </uni-table>
      <view class="more" v-if="type == 1">
        <text style="font-size: 20rpx;">查看更多</text>
        <view style="transform: translateY(1rpx)">
          <u-icon color="#b5c3ce" name="arrow-right" size="13"></u-icon>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { rankDataApi } from '@/api'
export default { 
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      tabIndex: '在售榜',
      tableData: [],
      totalNum: 0,
      isAscending: {
				price: false,
				goodsNum: false,
        lowPrice: false
			}, //降序
      sortValue: 'ASC',
      sortField: '',
      opts: {
				color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
					"#ea7ccc"
				],
				padding: [0, 0, 0, 0],
				dataPointShape: false,
				dataLabel: false,
				enableScroll: false,
				legend: {
					show: false
				},
				xAxis: {
					disabled: true,
					disableGrid: true,
					axisLine: false,
				},
				yAxis: {
					disabled: true,
					gridType: "dash",
					dashLength: 2,
					disableGrid: true
				},
				extra: {
					tooltip: {
						showBox: false,
						showArrow: false,

					},
					area: {
						type: "curve",
						opacity: 0.8,
						addLine: true,
						width: 2,
						gradient: true,
						color: ['#1890FF', 'rgba(255, 255, 255, 0.5)'], // 渐变颜色数组
						activeType: "none"
					}
				}
			},
      chartDataList: [],
      pageNo: 1,
      pageSize: 4
    }
  },
  mounted() {
    if (this.type === 2) this.pageSize = 10
    this.getTableData()
  },
  methods: {
    getTableData() {
      const params = {
        tabIndex: this.tabIndex,
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        sortValue: this.sortValue,
        sortField: this.sortField
      }
      rankDataApi(params)
        .then(res => {
          this.totalNum = res.total
          if (this.pageNo === 1) {
            this.tableData = res.rows
            this.chartDataList = []
            this.tableData.forEach((item, index) => {
              item.sort = index + 1
              this.chartDataList.push({
                categories: item.dateLine,
                series: [{
                  name: "A",
                  data: item.dataLine
                }, ]
              })
            })
          } else {
            this.tableData = this.tableData.concat(res.rows)
            this.tableData.forEach((item, index) => {
              item.sort = index + 1
              this.chartDataList.push({
                categories: item.dateLine,
                series: [{
                  name: "A",
                  data: item.dataLine
                },]
              })
            })
          }
        })
    },
    rankingClick(index) {
			this.tabIndex = index;
      this.pageNo = 1
      this.getTableData()
		},
    sortByPrice(e) {
			this.isAscending[e] = !this.isAscending[e]; // 切换排序状态
      this.sortField = e
			console.log(this.isAscending[e]);
      if (this.isAscending[e]) {
        this.sortValue = 'ASC'
      } else {
        this.sortValue = 'DESC'
      }
      this.getTableData()
			// this.tableData.sort((a, b) => {
			// 	if (this.isAscending[e]) {
			// 		return Number(a[e]) - Number(b[e]); // 升序
			// 	} else {
			// 		return Number(b[e]) - Number(a[e]); // 降序
			// 	}
			// });
		},

    getLineData(dataInfo) {
			// dataInfo['2024-12'] = {
			// 	month: '2024-12',
			// 	monthly_online_num: 8
			// }
			let res = {
				categories: Object.keys(dataInfo).map(item => item.split('-')[1] + '月'),
				series: [{
					name: "A",
					data: Object.values(dataInfo).map(item => item.monthly_online_num)
				}, ]
			};
			console.log(3, res)
			this.chartData = res;
		},
  },
  // 滚动到底部
	onReachBottom() {
    console.log('到底')
		// if (!this.dataLoading) {
		if (this.type === 2&& this.totalNum > this.tableData.length) {
			this.pageNo++
			this.getTableData()
		}
		// }
	},
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
.view-trend {
  width: 92.36rpx;
  height: 38.79rpx;
}
.more {
  margin-top: 15rpx;
  margin-bottom: -10rpx;
  height: 52rpx;
  font-size: 20rpx; 
  text-align: center; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  color: #DCDEDF;
}
::v-deep.uni-table {
  min-width: 1000rpx !important;
}
</style>