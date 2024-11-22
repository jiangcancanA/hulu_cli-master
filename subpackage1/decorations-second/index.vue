<template>
	<view class="app-main">
		<view class="home-title">
			<u-image width="54rpx" height="54rpx"
				src="@/static/image/ebca1ff68882805e9c684c277e92805 1@4x.png"></u-image>
			<u-search :showAction="false" :inputStyle="inputStyle" shape="square" bgColor="#142C44"
				borderColor="#1A9FFF" fontSize="24rpx" placeholder="搜索..." v-model="search"></u-search>
			<view>
				<u-button style="font-size: 24rpx" type="primary" text="登录"></u-button>
			</view>
		</view>
		<view class="home-search">
			<view class="search-text">
				<text class="text">饰品类别</text>
				<text class="text2">></text>
				<text>{{ category }}</text>
			</view>
			<view class="search-btn">筛选</view>
		</view>
		<view class="home-main">
			<view class="main-item"
				v-for="(item, index) in dataList"
        		:key="index"
				@click="checkDetail(item)"
			>
				<view v-if="item.quality" :style="{background: getBackground(item.quality)}" class="item-tag">{{item.quality}}</view>
				<view class="item-img">
					<img class="img" :src="item.cfUrl" alt="">
				</view>
				<view class="item-info">
					<view class="info-top">
						<view class="info-name">{{ item.goodsName }}</view>
						<view class="info-reduce" v-if="index % 2 === 0">
							<img src="@/static/image/Vector@4x.png" alt="">
							<text>{{ item.intValue }}</text>
						</view>
						<view class="info-risk" v-else>
							<img src="@/static/image/Vector@4x (1).png" alt="">
							<text>{{ item.intValue }}</text>
						</view>
					</view>
					<view class="info-bottom">
						<view class="bottom-number">{{item.onlineSellNum ? item.onlineSellNum : 0}}件在售</view>
						<view class="bottom-price">
							<text class="price-unit">¥</text>
							<text class="price-number">{{item.price}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { goodsListApi } from '../../api/index'

export default {
	components: {
	},
	data() {
		return {
			inputStyle: {
				height: '50rpx',
			},
			search: '',
			dataList: [],
			pageNo: 1,
			pageSize: 20,
			busy: false,
			totalNum: 0,
			typeName: '',
			category: '',
			quality: undefined,
		};
	},
	onReady() {
	},
	methods: {
		getTypeList() {
			const params = {
				typeName: this.typeName,
				pageNo: this.pageNo,
				pageSize: this.pageSize,
				category: this.category,
				quality: this.quality
			}
			goodsListApi(params)
				.then(res => {
					if (this.pageNo === 1) {
						this.dataList = res.rows
					} else {
						this.dataList = this.dataList.concat(res.rows)
					}
					this.totalNum = res.total
				})
		},
		// 公告
		toNotice(e = 0) {
			uni.navigateTo({
				url: '/subpackage1/notice/notice?id=' + e
			})
		},

		checkDetail(e = 0) {
			uni.navigateTo({
				url: '/subpackage1/decorations-detail/index?name=' + e.goodsName + '&category=' + this.category
			})
		},
		getBackground(key) {
			if (key === '大师') return '#E71818'
			if (key === '卓越') return '#9636FF'
			if (key === '高级') return '#0E96F8'
			if (key === '普通') return '#25BD6C'
			if (key === '隐秘') return '#66E71818'
			if (key === '受限') return '#56B181'
			if (key === '军规级') return 'blue'
			if (key === '工业级') return 'green'
			if (key === '普通级') return '#ddd'
			if (key === '非凡') return 'purple'
			if (key === '保密') return '#56B100'
			if (key === '消费级') return '#567200'
			if (key === '奇异') return 'yellow'
		},
	},
	// 滚动到底部
	onReachBottom() {
		// if (!this.dataLoading) {
		if (this.totalNum > this.dataList.length) {
			this.pageNo++
			this.getTypeList()
		}
		// }
	},
	onLoad(e) {
		this.category = e.category
		this.getTypeList()
	}
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