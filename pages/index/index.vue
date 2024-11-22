<template>
	<view class="app-main">
		<view class="home-title">
			<u-image width="54rpx" height="54rpx"
				src="@/static/image/ebca1ff68882805e9c684c277e92805 1@4x.png"></u-image>
			<u-search :showAction="false" :inputStyle="inputStyle" shape="square" bgColor="#142C44"
				borderColor="#1A9FFF" fontSize="24rpx" placeholder="搜索..." v-model="search"></u-search>
			<view class="search-btn" style="font-size: 28rpx;height:56rpx">
				登录
				<!-- <u-button style="font-size: 24rpx" type="primary" text="登录"></u-button> -->
			</view>
			<u-icon name="email" size="38" color="#3999E3" @click="toNotice"></u-icon>
		</view>
		<view class="home-index">
			<view class="home-index-title">
				<view>
					<u-image shape="circle" :showLoading="true" src="@/static/image/Frame@4x.png" width="80rpx"
						height="80rpx"></u-image>
				</view>
				<view class="home-index-right">
					<view class="home-index-title-text">
						<view>
							<text style="font-size:28rpx">饰品指数</text>
							<u-icon name="question-circle" :size="12" color="#fff"></u-icon>
						</view>
						<view @click="goTo()">
							<text>查看详情</text>
							<view style="transform: translateY(1rpx)">
								<u-icon name="arrow-right" size="12" color="#929ea8"></u-icon>
							</view>
						</view>
					</view>
					<view class="home-index-text">
						<view>
							<u-image width="32rpx" height="24rpx" src="@/static/image/Vector@4x.png"></u-image>
							<text class="text">连跌14天</text>
						</view>
						<view>
							<u-image width="32rpx" height="24rpx" src="@/static/image/Vector@4x (1).png"></u-image>
							<text class="text">连涨14天</text>
						</view>
					</view>
				</view>
			</view>
			<view class="home-index-bottom">
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
		</view>
		<view class="home-market">
			<view class="home-market-title">市场指数</view>
			<view class="home-market-content">
				<u-scroll-list :indicator="false">
					<view class="home-market-content-card" v-for="(item, index) in dataList" :key="index">
						<view>
							<text style="font-size: 28rpx">{{ item.name }}</text>
							<u-icon name="question-circle" :size="12" color="#fff"></u-icon>
						</view>
						<view>
							<text style="color: #1b93ec; font-size: 28rpx">{{ item.now }}</text>
							<text style="margin-left: 20rpx; color: #e71818;font-size: 24rpx">{{ item.rateStr }}</text>
						</view>
					</view>
				</u-scroll-list>
			</view>
		</view>
		<view class="home-onLine">
			<view>
				<u-image width="80rpx" height="80rpx" src="@/static/image/Frame@4x (1).png"></u-image>
				<view class="home-onLine-text">
					<view style="margin-bottom: 6rpx" @click="openTodatLine">
						<text style="font-size: 28rpx">今日在线</text>
						<view style="display: flex; align-items: center;font-size:24rpx">
							<view style="color: #929ea8; font-size:24rpx;width: 100rpx; margin-right: 10rpx">较昨日</view>
							<text style="font-size: 24rpx;margin-right: 3px">({{ onlineData.onlineUserCount }}人)</text>
							<text style="font-size: 24rpx;" :class="onlineData.data1.includes('-') ? 'reduce' : 'risk'">{{ onlineData.data1 }}</text>
						</view>
					</view>
					<view>
						<text style="color: #e71818; font-size: 28rpx">{{ onlineData.onlineUserCount }}人</text>
						<view style="display: flex; align-items: center;font-size:24rpx">
							<view style="color: #929ea8; font-size:24rpx;width: 110rpx; margin-right: 3rpx">本月平均</view>
							<text  style="font-size: 24rpx;margin-right: 3px;">({{ onlineData.onlineYesterdayUserCount }}人)</text>
							<text style="font-size: 24rpx;" :class="onlineData.data2.includes('-') ? 'reduce' : 'risk'">{{ onlineData.data2 }}</text>
						</view>
					</view>
				</view>
			</view>
			<view>
				<view style="font-size:24rpx">更新时间：{{ onlineData.updateTime }}</view>
				<view style="width: 200rpx;height: 100rpx;">
					<!-- <u-image width="100rpx" height="50rpx" src="@/static/image/Group 17@4x.png"></u-image> -->
					<qiun-data-charts type="area" background="rgba(27, 31, 42,1)" :opts="opts" :chartData="chartData" />
				</view>
			</view>
		</view>
		<view class="home-event">
			<view style="font-size: 28rpx;flex-shrink: 0;">
				<view>大事</view>
				<view>提醒</view>
			</view>
			<view style="font-size: 28rpx" v-if="noticeList.length">
				<view class="notice" style="font-size: 28rpx;color: #fff;">{{ noticeList[0].content }}{{ noticeList[0].content }}{{ noticeList[0].content }}{{ noticeList[0].content }}{{ noticeList[0].content }}{{ noticeList[0].content }}</view>
				<view style="color: #929ea8;font-size: 24rpx">{{ noticeList[0].createTime }}</view>
			</view>
		</view>
		<view class="home-ranking">
			<view class="home-ranking-title">
				<view style="font-size: 32rpx">排行榜</view>
				<view @click="toRanking()">
					<text style="font-size: 24rpx">更多</text>
					<view style="transform: translateY(1rpx)">
						<u-icon name="arrow-right" size="12"></u-icon>
					</view>
				</view>
			</view>
			<!-- 排行榜 -->
			<sale-table :type="1"/>
		</view>
		<!-- 今日在线 -->
		<today-line v-if="isShowTodayInfo" @closeToday="closeToday"/>
	</view>
</template>

<script>
import TodayLine from './components/TodayLine'
import SaleTable from './components/SaleTable'
import { noticeListApi, todayInfoApi, marketDataApi, onlineLineDataApi } from '../../api/index'
import { FormatTime } from '../../utils/time'
export default {
	components: {
		TodayLine,
		SaleTable
	},
	data() {
		return {
			chartData: {},
			// 今日在线
			onlineData: {
				// number: '831,862人',
				// time: '2024-09-10 14:42',
				// yNumber: '364人',
				// mNumber: '364人',
				data1: '+0%',
				data2: '-0%'
			},
			opts: {
				color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
					"#ea7ccc"
				],
				padding: [12, -5, 8, 15],
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
			search: '',
			inputStyle: {
				height: '50rpx'
			},
			dataList: [
				{
				name: '总市值',
				index: 'totalMarketValue',
				now: '0',
				rateStr: '0',
				desc: '所有饰品的总市值（底价*在售价）之和'
				},
				{
				name: '总在售量',
				index: 'totalSellNum',
				now: '0',
				rateStr: '0',
				desc: '所有饰品的在售数量之和'
				},
				{
				name: '总底价',
				index: 'totalPrice',
				now: '0',
				rateStr: '0',
				desc: '所有饰品的低价之和'
				},
				{
				name: '总求购价',
				index: 'totalBuyPrice',
				now: '0',
				rateStr: '0',
				desc: '所有饰品的求购最高价之和'
				},
				{
				name: '总求购数',
				index: 'totalBuyNum',
				now: '0',
				rateStr: '0',
				desc: '所有饰品的求购数量之和'
				}
      		],
			// 是否显示今日在线
			isShowTodayInfo: false,
			todayDetail: {
				todayInfo: {},
				dataLine: [],
				dateLine: []
			},
			dataInfo: {
				number: 0,
				data1: '0',
				data2: '0',
				currentTime: '',
				highData: 0,
				lowData: 0
			},
			noticeList: []
		};
	},
	onReady() {
		console.log(process.env.VUE_APP_BASE_URL, 777777777)
	},
	mounted() {
		this.getTodayData()
		this.getNoticeData()
		this.getOnlineData()
		this.getMarketData()

		this.timer = setInterval(() => {
			const currentData = new Date()
			this.dataInfo.currentTime = FormatTime('YYYY-MM-DD HH:mm:ss', currentData)
		}, 1000)
	},
	methods: {
		getTodayData() {
			console.log('当前')
			todayInfoApi()
			.then(res => {
				console.log('当前', res)
				this.todayDetail = {
					todayInfo: res.data?.todayInfo,
					dataLine: res.data?.dataLine || [],
					dateLine: res.data?.dateLine || []
				}
				this.todayDetail = res.data
			})
		},
		getOnlineData() {
			onlineLineDataApi()
			.then(res => {
				this.onlineData = res.data || {}
				this.onlineData.data1 = '0'
				this.onlineData.data2 = '0'

				this.$nextTick(() => {
					this.getLineData(res.data.sumSixMonth);
				})
			})
		},
		getMarketData() {
			marketDataApi()
			.then(res => {
				const { totalMarketCap, totalVolumeOnSale, totalFloorPrice, totalBidPrice, totalBidIndex } = res.data
				this.dataList[0].now = totalMarketCap.now
				this.dataList[0].rateStr = totalMarketCap.rateStr
				this.dataList[0].now = totalVolumeOnSale.now
				this.dataList[0].rateStr = totalVolumeOnSale.rateStr
				this.dataList[2].now = totalFloorPrice.now
				this.dataList[2].rateStr = totalFloorPrice.rateStr
				this.dataList[3].now = totalBidPrice.now
				this.dataList[3].rateStr = totalBidPrice.rateStr
				this.dataList[4].now = totalBidIndex.now
				this.dataList[4].rateStr = totalBidIndex.rateStr
			})
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

		// 大事提醒
		getNoticeData() {
			const params = {
				type: 0
			}
			noticeListApi(params)
			.then(res => {
				this.noticeList = res.data || []
				if (res.data.length) this.noticeList = this.noticeList.slice(0, 1)
				console.log(88888, this.noticeList)
			})
			
		},
		// 指数详情
		goTo(e = 0) {
			uni.navigateTo({
				url: '/subpackage1/indexDetails/indexDetails?id=' + e
			});
		},
		// 排行榜
		toRanking(e = 0) {
			uni.navigateTo({
				url: '/subpackage1/ranking/ranking?id=' + e
			});
		},
		// 公告
		toNotice(e = 0) {
			uni.navigateTo({
				url: '/subpackage1/notice/notice?id=' + e
			})
		},

		// 打开今日在线详情弹窗
		openTodatLine() {
			this.isShowTodayInfo = true
		},
		closeToday() {
			this.isShowTodayInfo = false
		}
	},
	onLoad() {}
};
</script>

<style lang="scss" scoped>
	@import 'style.scss';

	::v-deep {
		.u-button--primary {
			width: 108rpx !important;
			height: 52rpx !important;
			font-size: 22rpx!important;
		}
		.uni-table {
			min-width: 1000rpx!important;
		}

		.uni-table-text {
			background-color: #1b1f2a !important;
		}

		.uni-table-th {
			padding: 12rpx 20rpx;
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