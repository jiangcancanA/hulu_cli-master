<template>
	<view class="app-main">
		<view class="forum-title">
			<u-image width="54rpx" height="54rpx"
				src="@/static/image/ebca1ff68882805e9c684c277e92805 1@4x.png"></u-image>
			<u-search :showAction="false" :inputStyle="inputStyle" shape="square" bgColor="#142C44"
				borderColor="#1A9FFF" fontSize="24rpx" placeholder="搜索..." v-model="search"></u-search>
			<view>
				<u-button style="font-size: 24rpx" type="primary" text="登录"></u-button>
			</view>
			<!-- <u-icon name="email" size="38" color="#3999E3" @click="toNotice"></u-icon> -->
		</view>
		<div class="forum-header">
			<div class="header-item"
				:class="{'header-active': item === headerActive}"
				v-for="(item, index) in headerList"
				:key="index"
				@click="changeHeaderActive(item)"
			>{{ item }}</div>
		</div>

		<div class="forum-panel" style="margin-bottom: 28rpx;">
			<div class="panel-title">
				<img src="" alt="">
				<div class="title-text">哈萨比尔</div>
			</div>
			<div class="panel-list">
				<div class="list-item">
					<div class="item-number">{{ myDetailData.content }}</div>
					<div class="item-bottom">
						<img src="../../static/image/message.png" alt="">
						<div class="bottom-text">评论</div>
					</div>
				</div>
				<div class="list-item">
					<div class="item-number">{{ myDetailData.likes}}</div>
					<div class="item-bottom">
						<img src="../../static/image/like.png" alt="">
						<!-- <img src="@/assets/images/liked.png" alt=""> -->
						<div class="bottom-text">点赞</div>
					</div>
				</div>
				<div class="list-item">
					<div class="item-number">{{ myDetailData.collect }}</div>
					<div class="item-bottom">
						<img src="../../static/image/collect-f.png" alt="">
						<div class="bottom-text">收藏</div>
					</div>
				</div>
				<div class="list-item">
					<div class="item-number">{{ myDetailData.follow }}</div>
					<div class="item-bottom">
						<img src="../../static/image/love.png" alt="">
						<div class="bottom-text">关注</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 列表 -->
		<div class="forum-list" v-if="forumList.length">
			<div class="list-item"
				v-for="(item, index) in forumList"
				@click="isShowPublish = true"
				:key="index"
			>
				<div class="item-header">
					<div class="header-info">
						<img src="" alt="">
						<div class="info-desc">
							<div class="desc-text ellipsis">恢复速度疯狂的</div>
							<div class="desc-time">更新时间 {{ item.createTime }}</div>
						</div>
					</div>
					<div class="header-like" :class="{'liked': item.isFollow}">
						<img v-if="!item.isFollow" src="../../static/image/love.png" alt="">
						<img v-else src="../../static/image/loved.png" alt="">
						<span>{{item.isFollow ? '取消关注' : '关注'}}</span>
					</div>
				</div>
				<div class="item-content">
					<div class="content-text">{{ item.content }}</div>
					<div class="content-imgs" v-if="item.fileUrl">
						<div class="img">
							<img v-for="(el, i) in item.fileUrl.split(';')" :key="i" :src="el" alt="">
						</div>
					</div>
					<div class="content-operate">
						<div class="operate-part">
							<div class="part-img"><img src="../../static/image/message.png" alt=""></div>
							<div class="part-value">{{ item.commentNum }}</div>
						</div>
						<div class="operate-part">
							<div class="part-img">
								<img v-if="!item.isLike" src="../../static/image/like.png" alt="">
								<img v-else src="../../static/image/liked.png" alt="">
							</div>
							<div class="part-value">{{ item.likeNum }}</div>
						</div>
						<div class="operate-part">
							<div class="part-img part-img2">
								<img v-if="!item.isCollect" src="../../static/image/collect-f.png" alt="">
								<img v-else src="../../static/image/collected-f.png" alt="">
							</div>
							<div class="part-value">{{ item.collectNum }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 感兴趣 -->
		<div class="forum-panel">
			<div class="panel-header2">
				<div class="header-text">你可能感兴趣的人</div>
				<div class="header-change">
					<img src="../../static/image/change.png" alt="">
					<div class="text">换一换</div>
				</div>
			</div>
			<div class="panel-likes">
				<div class="likes-item"
					v-for="(item, index) in likesList"
					:key="index"
				>
					<div class="item-info">
						<img src="" alt="">
						<div class="name ellipsis">{{ item.name }}</div>
					</div>
					<div class="item-like">
						<img src="../../static/image/love.png" alt="">
						<span>关注</span>
					</div>
				</div>
			</div>
		</div>

		<!-- 今日在线 -->
		<publish-popup v-if="isShowPublish" @CLOSE="closePublic"/>
	</view>
</template>

<script>
import PublishPopup from './components/PublishPopup'
export default {
	components: {
		PublishPopup
	},
	data() {
		return {
			search: '',
			inputStyle: {
				height: '50rpx'
			},
			headerList: ['推荐', '热门', '关注', '我的'],
			headerActive: '推荐',
			forumList: [
				{
					createTime: '2022-2-2',
					fileUrl: '123123;234234',
					commentNum: 10,
					content: '内容内容内容内容内容内容内容内容内容内容',
					likeNum: 0,
					collectNum: 0,
					isLike: false,
				},
				{
					createTime: '2022-2-2',
					fileUrl: '123123;234234',
					content: '内容内容内容内容内容内容内容内容内容内容',
					commentNum: 10,
					likeNum: 0,
					collectNum: 0,
					isLike: false,
				}
			],
			likesList: [
        {
          img: '',
          name: '恢复速度哈哈恢复速度哈哈恢复速度哈哈恢复速度哈哈'
        },
        {
          img: '',
          name: '恢复速度哈哈'
        },
        {
          img: '',
          name: '恢复速度哈哈'
        }
      ],
			isShowPublish: false,

			myDetailData: {
        collect: 0,
        follow: 0,
        likes: 0,
        content: 0,
      }
		}
	},
	onReady() {
	},
	methods: {
		changeHeaderActive(type) {
			this.headerActive = type
		},
		closePublic() {
			this.isShowPublish = false
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