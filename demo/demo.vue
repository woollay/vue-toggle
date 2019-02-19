<template>
	<div id="toggle-switch-demo">
		<toggle-switch :resultData="resultData" :curStyle="curStyle" @changeSwitch="change" v-if="isInit"></toggle-switch>
	</div>
</template>

<script>
	import ToggleSwitch from "vue-multi-toggle-switch";
	import Vue from "vue";
	Vue.use(ToggleSwitch);

	export default {
		name: "Demo",
		data() {
			return {
				resultData: [],
				curStyle: {},
				isInit: false
			};
		},
		mounted() {
			console.log("start to init toggle switch components now.");
			this.resultData = [
				{
					id: "123",
					status: true,
					on: "",
					off: ""
				},
				{
					id: "234",
					status: false,
					on: "ON",
					off: "OFF"
				},
				{
					id: "456",
					status: true,
					on: "开",
					off: "关"
				}
			];
			this.curStyle = { switch_on: "red" };
			this.isInit = true;
		},
		methods: {
			change(result) {
				console.log("data changed:" + result.id + "," + result.checked);
			}
		}
	};
</script>

<style scoped>
	#toggle-switch-demo {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		width: 100%;
		height: 100%;
	}
</style>
