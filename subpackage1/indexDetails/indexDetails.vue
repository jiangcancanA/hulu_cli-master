<template>
	<view class="app-main">
		<view class="details-index">
			<view class="details-index-title">
				<view>
					<u-image shape="circle" :showLoading="true" src="@/static/image/Frame@4x.png" width="80rpx"
						height="80rpx"></u-image>
				</view>
				<view class="details-index-right">
					<view class="details-index-title-text">
						<view>
							<text style="font-size:28rpx">饰品指数</text>
							<u-icon name="question-circle" :size="12" color="#fff"></u-icon>
						</view>
					</view>
					<view class="details-index-text">
						<view>
							<u-image width="32rpx" height="24rpx" src="@/static/image/Vector@4x.png"></u-image>
							<text>连跌14天</text>
						</view>
						<view>
							<u-image width="32rpx" height="24rpx" src="@/static/image/Vector@4x (1).png"></u-image>
							<text>连涨14天</text>
						</view>
					</view>
				</view>
			</view>
			<view class="details-index-bottom">
				<view>
					<view style="color: #e71818; display: flex; align-items: center; gap: 20rpx">
						<text style="font-size: 40rpx" :class="todayDetail.todayInfo.now < 0 ? 'reduce' : 'risk'">{{ todayDetail.todayInfo.now }}</text>
						<text style="font-size: 20rpx" :class="todayDetail.todayInfo.amplitude < 0 ? 'reduce' : 'risk'">{{ todayDetail.todayInfo.amplitude }}</text>
						<text style="font-size: 20rpx" :class="todayDetail.todayInfo.rateStr && todayDetail.todayInfo.rateStr.includes('-') ? 'reduce' : 'risk'">{{ todayDetail.todayInfo.rateStr }}</text>
					</view>
					<view style="width: 230rpx;display: flex;align-items: center;">
						<text  style="color: #929ea8;font-size: 20rpx">今日最高</text>
						<text style="margin-left: 10rpx;font-size: 24rpx" class="risk">{{ todayDetail.todayInfo.maxValue }}</text>
					</view>
				</view>
				<view>
					<view style="color: #929ea8;font-size: 20rpx">
						<text>当前时间</text>
						<text style="margin-left: 20rpx">{{ dataInfo.currentTime }}</text>
					</view>
					<view style="color: #929ea8;font-size: 20rpx;width: 230rpx;display: flex;align-items: center;">
						<text>今日最低</text>
						<text style="margin-left: 10rpx;font-size: 24rpx" class="reduce">{{ todayDetail.todayInfo.minValue }}</text>
					</view>
				</view>
			</view>
			<view class="details-index-button">
				<view class="button-list">
					<View :class="tabBtnIndex == 0 ? 'btn-active' : 'btn-normal'" plain @click="tabBtn(0)">日线</View>
					<View :class="tabBtnIndex == 1 ? 'btn-active' : 'btn-normal'" plain @click="tabBtn(1)">时线</View>
					<View :class="tabBtnIndex == 2 ? 'btn-active' : 'btn-normal'" plain @click="tabBtn(2)">K线</View>
					<View :class="tabBtnIndex == 3 ? 'btn-active' : 'btn-normal'" plain @click="tabBtn(3)">租赁</View>
				</view>
				<!-- <view style="display: flex; align-items: center;">
					<view class="tool" @click="tabBtn(5)">
						<u-image width="28rpx" height="28rpx" src="@/static/image/amplify.png"></u-image>
					</view>
				</view> -->
			</view>
			<view>
				<view class="details-index-texts">
					<view>
						<text style="font-size: 30rpx">当前:</text>
						<text style="color: #fff; font-size: 30rpx">1544.54</text>
					</view>
					<view>
						<text style="font-size: 30rpx">浮动:</text>
						<text style="color: #3fb878; font-size: 30rpx">0</text>
					</view>
					<view>
						<text style="font-size: 30rpx">涨跌幅:</text>
						<text style="color: #e71818; font-size: 30rpx">+0.03%</text>
					</view>
					<view>
						<text>MA(7):</text>
						<text style="color: #fff">1544.54</text>
					</view>
					<view>
						<text>MA(14):</text>
						<text style="color: #fff">1544.54</text>
					</view>
					<view>
						<text>MA(21):</text>
						<text style="color: #fff">1544.54</text>
					</view>
				</view>
				<view style="margin-top: 20rpx; display: flex; align-items: center; gap: 10rpx">
					<text style="font-size: 25rpx; color: #929ea8">趋势信号</text>
					<view style="display: flex; align-items: center; gap: 5rpx">
						<u-switch size="15" v-model="value1" @change="change($event, 0)"
							activeColor="rgba(26, 83,127,0.8)" inactiveColor="rgba( 27, 51, 76,0.5)"></u-switch>
						<u-switch size="15" v-model="value2" @change="change($event, 1)"
							activeColor="rgba(26, 83,127,0.8)" inactiveColor="rgba( 27, 51, 76,0.5)"></u-switch>
					</view>
				</view>
			</view>
			<view class="details-charts-box">
				<qiun-data-charts type="line" background="rgba(27, 31, 42,1)" :ontouch="true" :opts="opts"
					:chartData="chartData" />
				<!-- <charts-vue :cData="chartData"></charts-vue> -->
			</view>
		</view>
		<view class="details-index-table">
			<view class="details-table-title">
				<view :class="tabIndex == 0 ? 'table-select' : ''" @click="tabTable(0)">饰品指数</view>
				<view :class="tabIndex == 1 ? 'table-select' : ''" @click="tabTable(1)">热门饰品</view>
				<view :class="tabIndex == 2 ? 'table-select' : ''" @click="tabTable(2)">皮肤涨跌</view>
				<view :class="tabIndex == 3 ? 'table-select' : ''" @click="tabTable(3)">高价求购</view>
				<view :class="tabIndex == 4 ? 'table-select' : ''" @click="tabTable(4)">低价捡漏</view>
			</view>
			<view class="details-table">
				<uni-table :stripe="false" emptyText="暂无更多数据">
					<!-- 表头行 -->
					<uni-tr>
						<uni-th align="center">类型</uni-th>
						<uni-th align="center">
							<view style="display: flex; align-items: center; justify-content: center"
								@click="sortByPrice('index')">
								<text>指数</text>
								<u-icon :name="isAscending['index'] ? 'arrow-down-fill' : 'arrow-up-fill'"
									size="12"></u-icon>
							</view>
						</uni-th>
						<uni-th align="center">
							<view style="display: flex; align-items: center; justify-content: center"
								@click="sortByPrice('Chg')">
								<text>涨跌幅</text>
								<u-icon :name="isAscending['Chg'] ? 'arrow-down-fill' : 'arrow-up-fill'"
									size="12"></u-icon>
							</view>
						</uni-th>
						<uni-th align="center">
							<view style="display: flex; align-items: center; justify-content: center"
								@click="sortByPrice('ChgNum')">
								<text>涨跌值</text>
								<u-icon :name="isAscending['ChgNum'] ? 'arrow-down-fill' : 'arrow-up-fill'"
									size="12"></u-icon>
							</view>
						</uni-th>
					</uni-tr>
					<!-- 表格数据行 -->
					<uni-tr v-for="item in tableList" :key="item.id">
						<uni-td align="center">
							<view style="display: flex; align-items: center; gap: 10rpx; justify-content: center">
								<u-image width="60rpx" height="60rpx" src="@/static/image/Mask group@4x.png"></u-image>
								<text style="color: #fff">{{ item.type }}</text>
							</view>
						</uni-td>
						<uni-td align="center">
							<view style="color: #fff" class="details-table-td">{{ item.index }}</view>
						</uni-td>
						<uni-td align="center">
							<view style="color: #e71818" class="details-table-td">+{{ item.Chg }}%</view>
						</uni-td>
						<uni-td align="center">
							<view class="details-table-td">
								<text style="color: #e71818">{{ item.ChgNum }}</text>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
			</view>
		</view>
		<u-popup :show="show" mode="center" @close="popupClose">
			<view style="width: 700rpx;height: 500rpx;background-color: rgba(27, 31, 42,1);">
				<charts-vue v-if="show" :cData="chartData"></charts-vue>
			</view>
		</u-popup>
	</view>
</template>
<script>
import { todayInfoApi } from '../../api/index'
import chartsVue from '../components/charts/charts.vue';
import { FormatTime } from '../../utils/time'
export default {
	components: {
		chartsVue
	},
	data() {
		return {
			show: false,
			tabBtnIndex: 0,
			tabIndex: 0,
			value1: true,
			value2: false,
			chartData: {},
			dataInfo: {
				number: 0,
				data1: '0',
				data2: '0',
				currentTime: '',
				highData: 0,
				lowData: 0
			},
			todayDetail: {
				todayInfo: {},
				dataLine: [],
				dateLine: []
			},
			opts: {
				color: ['#1A4CFF', '#EDC315', '#41C27D', '#1A9FFF', '#73C0DE', '#FC8452', '#9A60B4', '#ea7ccc'],
				padding: [15, 10, 0, 0],
				dataLabel: false,
				enableScroll: true,
				legend: {
					position: 'top',
					float: 'center',
					margin: 10
				},
				xAxis: {
					disableGrid: true,
					scrollShow: true,
					itemCount: 3
				},
				yAxis: {
					gridType: 'dash',
					dashLength: 2
				},
				extra: {
					line: {
						type: 'curve',
						width: 2,
						activeType: 'hollow',
						linearType: 'custom',
						onShadow: true,
						animation: 'horizontal'
					}
				}
			},
			tableList: [{
					id: 1,
					type: '冲锋枪',
					index: 31055.88,
					Chg: 0.25,
					ChgNum: 0.08
				},
				{
					id: 2,
					type: '步枪',
					index: 31055.89,
					Chg: 0.24,
					ChgNum: 0.07
				},
				{
					id: 3,
					type: '狙击枪',
					index: 31055.9,
					Chg: 0.23,
					ChgNum: 0.06
				},
				{
					id: 4,
					type: '火箭筒',
					index: 31055.91,
					Chg: 0.22,
					ChgNum: 0.05
				}
			],
			isAscending: {
				index: false,
				Chg: false,
				ChgNum: false
			} //降序
		};
	},
	onLoad(options) {
		console.log(options.id);
	},
	onReady() {
		this.getServerData();
	},
	mounted() {
		this.getTodayData()
		this.timer = setInterval(() => {
			const currentData = new Date()
			this.dataInfo.currentTime = FormatTime('YYYY-MM-DD HH:mm:ss', currentData)
		}, 1000)
	},
	methods: {
		getTodayData() {
			todayInfoApi()
			.then(res => {
				this.todayDetail = {
					todayInfo: res.data?.todayInfo,
					dataLine: res.data?.dataLine || [],
					dateLine: res.data?.dateLine || []
				}
				this.todayDetail = res.data
			})
		},
		change(row, index) {
			console.log(row, index);
		},
		tabBtn(e) {
			if (this.tabBtnIndex == e) return;
			if (e == 4) {
				return;
			}
			if (e == 5) {
				this.show = true;
				return;
			}
			this.tabBtnIndex = e;
		},
		popupClose() {
			this.show = false
		},
		tabTable(e) {
			if (this.tabIndex == e) return;
			this.tabIndex = e;
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
		getServerData() {
			//模拟从服务器获取数据时的延时
			setTimeout(() => {
				//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
				let res = {
					categories: ['2018-09-01', '2019-09-01', '2020-09-01', '2021-09-01', '2022-09-01',
						'2023-09-01'
					],
					series: [{
							name: '成交量A',
							linearColor: [
								[0, '#1A4CFF'],
								[1, '#1A4CFF']
							],
							setShadow: [3, 8, 10, '#1A4CFF'],
							data: [15, 45, 15, 45, 15, 45]
						},
						{
							name: '成交量B',
							data: [55, 85, 55, 85, 55, 85]
						},
						{
							name: '成交量C',
							linearColor: [
								[0, '#41C27D'],
								[1, '#41C27D']
							],
							setShadow: [3, 8, 10, '#41C27D'],
							data: [95, 125, 95, 125, 95, 125]
						},
						{
							name: '成交量D',
							data: [100, 85, 56, 12, 90, 5]
						}
					]
				};
				this.chartData = JSON.parse(JSON.stringify(res));
			}, 500);
		}
	}
};
</script>

<style lang="scss" scoped>
	@import 'style.scss';

	::v-deep {
		.u-button {
			height: 60rpx !important;
			padding: 0 !important;
			margin: 0 !important;
		}

		.u-button--primary {
			background-color: transparent !important;
		}

		.u-button--success {
			background-color: #1a9fff !important;
			color: #fff !important;
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

		.u-safe-bottom {
			display: none;
		}
	}
</style>