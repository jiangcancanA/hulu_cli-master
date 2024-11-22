<template>
  <view class="comment">
    <view class="comment-item"
      v-for="(item, index) in commentList"
      :key="index"
    >
      <view class="item-header">
        <view class="header-img"><img src="" alt=""></view>
        <view class="header-info">
          <view class="info-name">{{ item.name }}</view>
          <view class="info-name">更新时间 {{ item.time }}</view>
        </view>
      </view>
      <view class="item-main">
        <view class="main-text">{{ item.comment }}</view>
        <view class="main-imgs">
          <img v-for="(el, i) in item.imgsList" :key="i" src="" alt="">
        </view>
      </view>
      <view class="item-operate">
        <view class="operate-part">
          <view class="part-label"><img src="" alt=""></view>
          <view class="part-value">{{ item.messageNumber }}</view>
        </view>
        <view class="operate-part">
          <view class="part-label"><img src="" alt=""></view>
          <view class="part-value">{{ item.likeNumber }}</view>
        </view>
        <view class="operate-part">
          <view class="part-label"><img src="" alt=""></view>
          <view class="part-value">{{ item.shareNumber }}</view>
        </view>
      </view>
    </view>
    <div class="comment-bottom">
      <u-input :showAction="false" style="width: 686rpx;" color="#DCDEDF" fontSize="28rpx" :customStyle="inputStyle"
        placeholder="请输入内容" :adjustPosition="true" v-model="content" clearable></u-input>
      <div class="bottom-operate">
        <div class="operate-img"><img src="" alt=""></div>
        <div class="operate-btn">发布</div>
      </div>
    </div>
  </view>
</template>
<script>
export default {
  props: {
  },
  data() {
    return {
      content: '',
      inputStyle: {
        height: '60rpx',
        // width: '172rpx',
        color: '#DCDEDF',
        fontSize: '28rpx',
        borderRadius: '8rpx',
        border: 'none',
        backgroundColor: 'rgba(81, 97, 138, 0.4)' // 输入框背景颜色
      },
      commentList: [
        {
          img: '',
          name: '给啊u厚度撒谎的',
          time: '2024-09-16 09:41:07',
          comment: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍',
          imgsList: [
            '', '', ''
          ],
          messageNumber: 100,
          likeNumber: 100,
          shareNumber: 100
        },
        {
          img: '',
          name: '给啊u厚度撒谎的',
          time: '2024-09-16 09:41:07',
          comment: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍',
          imgsList: [
            '', '', ''
          ],
          messageNumber: 100,
          likeNumber: 100,
          shareNumber: 100
        },
        {
          img: '',
          name: '给啊u厚度撒谎的',
          time: '2024-09-16 09:41:07',
          comment: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍',
          imgsList: [
            '', '', ''
          ],
          messageNumber: 100,
          likeNumber: 100,
          shareNumber: 100
        }
      ]
    } 
  },
  created() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.comment {
  width: 702rpx;
  margin: 0 auto 0;
  padding-bottom: 200rpx;
  // height: 710rpx;
  font-size: 24rpx;
  .comment-item {
    // width: 100%;
    border-radius: 24rpx;
    background: #1B1F2A;
    padding: 20rpx 24rpx;
    margin-bottom: 16rpx;
    .item-header {
      display: flex;
      align-items: center;
      margin-bottom: 21rpx;
      .header-img {
        width: 68rpx;
        height: 68rpx;
        border: 1.5rpx solid #FFF6F6;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 18rpx;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .header-info {
        .info-name {
          color: #C7D5E0;
          font-size: 28rpx;
        }
        .info-name {
          color: #C6D4DF;
          font-size: 24rpx;
          opacity: 0.6;
        }
      }
    }
    .item-main {
      .main-text {
        color: #C6D4DF;
        opacity: 0.9;
        font-size: 24rpx;
        padding-left: 80rpx;
        padding-right: 80rpx;
        margin-bottom: 19rpx;
      }
      .main-imgs {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding-left: 80rpx;
        img {
          width: 148.9rpx;
          height: 148.9rpx;
          margin-bottom: 19rpx;
          margin-right: 28rpx;
          border-radius: 16rpx;
        }
      }
    }
    .item-operate {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30rpx;
      .operate-part {
        display: flex;
        align-items: center;
        .part-label {
          width: 32rpx;
          height: 32rpx;
          margin-right: 8rpx;
          border: 1px solid pink;
        }
        .part-value {
          color: #C6D4DF;
          font-size: 28rpx;
        }
      }
    }
  }
  .comment-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    height: 186rpx;
    background: #1B1F2A;
    padding: 32rpx;
    .bottom-operate {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 18rpx;
      .operate-img {
        width: 40rpx;
        height: 40rpx;
        border: 1px solid pink;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .operate-btn {
        width: 112rpx;
        height: 46rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8rpx;
        background: linear-gradient(270deg, #1397F6 0%, #437EF0 99%, #437EF0 100%);
        font-size: 24rpx;
        color: #FFFFFF;
      }
    }
  }
}
</style>