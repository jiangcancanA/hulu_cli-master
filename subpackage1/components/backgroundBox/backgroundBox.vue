<!-- 顶部导航栏组件 -->
<template>
 <view class="form-item">
 	<slot></slot>
 </view>
</template>

<script>
export default {
name: 'backgroundBox',
  data() {
    return {
		
	};
  },

 
  created() {},
  mounted() {
 
  },
  methods: {
	  
    }
};
</script>

<style scoped lang="scss">
	.form-item{
		border-radius: 20rpx;
		padding: 24rpx;
		gap: 24rpx;
		background: #282E47;
		box-sizing: border-box;
	}
</style>