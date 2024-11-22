<template>
	<view class="allbutClss">
		{{butTxtTitlex?butTxtTitlex:'确定'}}
	</view>
</template>

<script>
	export default {
		name:"allBut",
		props: {
		butTxtTitlex: {
			type: String,
			default: () => '',
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
	.allbutClss{
		margin-top: 20rpx;
		border-radius: 94px;
		height: 94rpx;
		width: 100%;
		gap: 8px;
		text-align: center;
		line-height: 94rpx;
		align-self: stretch;
		background: linear-gradient(90deg, #307072 2%, #3B5D87 100%);
		font-family: MiSans;
		font-size: 34rpx;
		font-weight: 500;
		text-align: center;
		letter-spacing: 0px;
		font-variation-settings: "opsz" auto;
		font-feature-settings: "kern" on;
		color: #FFFFFF;
	}
</style>