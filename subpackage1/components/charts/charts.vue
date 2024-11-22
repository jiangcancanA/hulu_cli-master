<template>
	<view>
		<qiun-data-charts type="line" background="rgba(27, 31, 42,1)" :ontouch="true" :opts="opts" :chartData="cData" />
	</view>
</template>

<script>
	export default {
		name: "charts",
		props: {
			cData: {
				type: Object,
				default: () => ({})
			}
		},
		data() {
			return {
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
			};
		},
		mounted() {
			console.log(this.cData);
		},
		watch: {
			cData: {
				handler(newValue) {
					console.log('cData changed:', newValue);
				},
				deep: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	view {
		width: 100%;
		height: 100%;
	}
</style>