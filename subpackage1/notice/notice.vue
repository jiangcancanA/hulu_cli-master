<template>
  <view class="notice">
    <view class="notice-header">
      <view class="header-title" :class="{'title-active': activeTitle == '公告'}" @click="changeTitle('公告')">公告</view>
      <view class="header-title" :class="{'title-active': activeTitle == '反馈意见'}" @click="changeTitle('反馈意见')">反馈意见</view>
    </view>
    <view class="notice-list">
      <view class="list-item"
        v-for="(item, index) in noticeList"
        :key="index"
      >
        <view class="item-icon">
          <u-image shape="circle" :showLoading="true" src="@/static/image/notice-icon.png" width="80rpx"
						height="80rpx"></u-image>
        </view>
        <view class="item-title">
          <view class="title-name" :title="item.content">{{ item.content }}</view>
          <view class="title-time">{{ item.time }}</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        activeTitle: '公告',
        noticeList: [
          {
            content: '提醒内容提醒内容提醒内容提醒内容提醒内容提醒内容提醒内容提醒内容',
            time: '2024-09-10 14:42:25'
          },
          {
            content: '依托公司自主研发的“五大服务体系，一个支撑平台”，为用户灵活定制覆盖IT基础设施全生命周期的体系化支撑服务解决方案，满足用户数据中心个性化、全场景的服务需求，让用户IT基础设施运维工作变简单！',
            time: '2024-09-10 14:42:25'
          },
          {
            content: '提醒内容提醒内容提醒内容提醒内容提醒内容提醒内容提醒内容提醒内容',
            time: '2024-09-10 14:42:25'
          },
          {
            content: '提醒内容提醒内容提醒内容提醒内容提醒内容提醒内容提醒内容提醒内容',
            time: '2024-09-10 14:42:25'
          }
        ]
      }
    },
    methods: {
      changeTitle(name) {
        this.activeTitle = name
      }
    }
  }
</script>

<style lang="scss">
@import 'style.scss';

</style>
