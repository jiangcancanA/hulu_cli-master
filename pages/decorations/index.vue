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
			</view>
			<view class="search-btn">筛选</view>
		</view>
		<view class="home-main">
			<view class="main-item"
				v-for="(item, index) in dataList"
        		:key="index"
				@click="toGoods(item)"
			>
				<view class="item-img">
					<img class="img" :src="item.imageUrl" alt=""></img>
				</view>
				<view class="item-info">
					<view class="info-name">{{ item.typeName }}</view>
					<view class="info-reduce" v-if="index % 2 === 0">
						<img src="@/static/image/Vector@4x.png" alt="">
						<span>{{ item.intValue }}</span>
					</view>
					<view class="info-risk" v-else>
						<img src="@/static/image/Vector@4x (1).png" alt="">
						<span>{{ item.intValue }}</span>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { goodsTyleListApi } from '../../api/index'
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
			typeName: '',
			pageNo: 1,
			pageSize: 20,
			totalNum: 0
		};
	},
	onReady() {
		this.getTypeList()
	},
	methods: {
		getTypeList() {
			const params = {
				typeName: this.typeName,
				pageNo: this.pageNo,
				pageSize: this.pageSize
			}
			goodsTyleListApi(params)
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

		toGoods(e = 0) {
			console.log(e)
			uni.navigateTo({
				url: '/subpackage1/decorations-second/index?category=' + e.typeName
			})
		}
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