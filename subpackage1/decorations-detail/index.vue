<template>
	<view class="detail">
		<view class="detail-info">
			<view class="info-img">
				<img :src="detailInfo.cfUrl" alt="">
				<view class="unpack" @click="openUnpack">
					<img src="" alt="">
				</view>
			</view>
			<view class="info-panel">
				<view class="panel-name">
					<view class="text">{{ detailInfo.goodsName }}</view>
					<view class="hot">
						<img src="" alt="">
						<text>热门关注</text>
						<text>No.{{ detailInfo.hot }}</text>
					</view>
				</view>
				<view class="panel-property">
					<view class="property-left">
						<view class="property-label">属性：</view>
						<view class="property-value" style="margin-right: 5px;">{{ detailInfo.quality }}</view>
						<view style="color: #1890ff;margin-right: 5px;">{{ detailInfo.property }}</view>
                		<view style="color: #ffffff80;">{{ detailInfo.category }}</view>
					</view>
					<view class="property-collect">
						<img src="" alt="">
						<text>收藏</text>
					</view>
				</view>
				<view class="panel-pirce">
					<view class="number">
						<text class="price-unit">¥</text>
						<text class="price-number">{{ detailInfo.price }}</text>
					</view>
					<view class="number-btn" @click="dealDialog = true">虚拟交易</view>
				</view>
				<view class="panel-time">更新时间：{{ detailInfo.updateTime }}</view>
			</view>
		</view>
		<view class="detail-tip">
			<view class="tip-father">所属武器箱：{{ detailInfo.category }}</view>
			<view class="tip-time">上线时间：{{ detailInfo.createTime }}</view>
		</view>

		<view class="detail-tabs">
			<view class="tabs-tab" :class="{ 'active-tab': activeTab === item }" v-for="(item, index) in tabsList"
				:key="index" @click="changeTab(item)">{{ item }}</view>
		</view>

		<view class="detail-main" v-if="activeTab === '数据详情'">
			<u-scroll-list :indicator="false">
				<view class="main-item" :class="item.rateStr.includes('-') ? 'item-reduce' : ''" v-for="(item, index) in indexList"
					:key="index">
					<view class="item-top">
						<view class="top-name">{{ item.title }}</view>
						<img v-if="item.rateStr.includes('-')" src="@/static/image/Vector@4x.png" alt="">
						<img v-else src="@/static/image/Vector@4x (1).png" alt="">
					</view>
					<view class="item-bott">
						<text>¥</text>
						<text>{{ item.now }}</text>
						<text>({{ item.rateStr }})</text>
					</view>
				</view>
			</u-scroll-list>
			<view class="detail-types" v-if="detailInfo.goodsInfo">
				<view class="types-type" v-for="(item, index) in detailInfo.goodsInfo" :key="index">
					<view class="type-sale">
						<view class="sale-label">{{ item.sourceName }}出售价</view>
						<view class="sale-price">¥ {{ item.price }}</view>
						<view class="sale-tip">
							<view class="tip-label">在售数量</view>
							<view class="tip-number">{{ item.onlineBuyNum ? item.onlineBuyNum : 0 }}</view>
						</view>
					</view>
					<view class="type-sale">
						<view class="sale-label">{{ item.sourceName }}求购价</view>
						<view class="sale-price">¥ {{ item.price2 ? item.price2 : 0 }}</view>
						<view class="sale-tip">
							<view class="tip-label">求购数量</view>
							<view class="tip-number">{{ item.onlineSellNum ? item.onlineSellNum : 0 }}</view>
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="detail-goods">
				<view class="content-item">求购挂刀：0.84</view>
				<view class="content-item">在售挂刀：0.84</view>
				<view class="content-item">日成交量：40,300</view>
			</view> -->

			<!-- <u-scroll-list :indicator="false">
				<view class="list-item"
					v-for="(item, index) in dataList"
					:key="index"
				>
					<view class="item-img">
						<img src="" alt="">
					</view>
					<view class="item-content">
						<view class="content-label">{{ item.label }}</view>
						<view class="content-value">{{ item.value }}</view>
					</view>
				</view>
			</u-scroll-list> -->
		</view>

		<!-- 价格走势 -->
		<price-change v-if="activeTab === '价格走势'" />
		<comment-info v-if="activeTab === '评论'" />

		<u-popup :show="dealDialog" closeable @close="dealDialog = false">
			<view class="deal">
				<view class="deal-content">
					<view class="content-item">
						<view class="item-icon" :class="{ 'buy-active': buyActive === '买' }" @click="changeDealType('买')">
							买</view>
						<view class="item-text">买入</view>
					</view>
					<view class="content-item">
						<view class="item-icon" :class="{ 'buy-active': buyActive === '卖' }" @click="changeDealType('卖')">
							卖</view>
						<view class="item-text">卖出</view>
					</view>
				</view>
			</view>
		</u-popup>

		<!-- 详情 -->
		<detail-dialog v-if="unpackData.visible" :detailData="unpackData" @closeunpack="closeunpack" />
	</view>
</template>

<script>
import DetailDialog from './component/DetailDialog';
import PriceChange from './component/PriceChange'
import CommentInfo from './component/CommentInfo'
import { goodsDetailInfoApi } from '../../api/index'
export default {
	components: {
		DetailDialog,
		PriceChange,
		CommentInfo
	},
	data() {
		return {
			detailInfo: {
				goodsInfo: [{}]
			},
			tabsList: ['数据详情', '价格走势', '评论'],
			activeTab: '数据详情',

			indexList: [
				{
					title: '今日',
					now: '',
					rateStr: ''
				},
				{
					title: '本周',
					now: '',
					rateStr: ''
				},
				{
					title: '本月',
					now: '',
					rateStr: ''
				},
				{
					title: '近半年',
					now: '',
					rateStr: ''
				}
			],

			typeList: [],
			dataList: [
				{
					label: '回报率',
					value: '24.59%'
				},
				{
					label: '预期收益',
					value: '24.59%'
				},
				{
					label: '内容热度',
					value: '24.59%'
				},
				{
					label: '今日开箱',
					value: '24.59%'
				},
				{
					label: '本周开箱',
					value: '24.59%'
				},
				{
					label: '本月开箱',
					value: '129.19万'
				},
				{
					label: '总开箱',
					value: '5507.06万'
				}
			],

			// 交易
			dealDialog: false,
			buyActive: '买',

			unpackData: {
				visible: false,
				title: '',
				price: 0,
				detailInfo: {}
			},
			goodName: '',
			category: '',
		}
	},
	onReady(e) {
	},
	created() {
	},
	methods: {
		changeTab(name) {
			this.activeTab = name
		},
		// 切换交易角色
		changeDealType(type) {
			this.buyActive = type
		},

		getDetailData() {
			const params = {
				name: this.goodName
			}
			goodsDetailInfoApi(params)
				.then(res => {
					this.detailInfo = res.data || {}
					this.indexList[0].now = res.data?.sellerPrice1.now
					this.indexList[0].rateStr = res.data?.sellerPrice1.rateStr
					this.indexList[1].now = res.data?.sellerPrice1.now
					this.indexList[1].rateStr = res.data?.sellerPrice1.rateStr
					this.indexList[2].now = res.data?.sellerPrice1.now
					this.indexList[2].rateStr = res.data?.sellerPrice1.rateStr
					this.indexList[3].now = res.data?.sellerPrice1.now
					this.indexList[3].rateStr = res.data?.sellerPrice1.rateStr
				})
		},

		openUnpack() {
			this.unpackData.visible = true
			this.unpackData.id = this.detailInfo.containerId
			this.unpackData.detailInfo = this.detailInfo
		},
		closeunpack() {
			this.unpackData.visible = false
		}
	},
	onLoad(e) {
		this.goodName = e.name
		this.category = e.category
		this.getDetailData()
	}
};
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>