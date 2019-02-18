<template>
	<div id="toggle-switch">
		<div v-for="result in resultData" class="toggle-switch-item" :style="'width:'+myStyle.width+'px'">
			<input
				:id="['switch'+result.id]"
				class="toggle-switch-checkbox"
				type="checkbox"
				@change="changeStatus(result.id,$event.target.checked)"
				v-model="result.status"
			>
			<label
				class="toggle-switch-label"
				v-bind:for="['switch'+result.id]"
				:style="'border: 2px solid '+myStyle.border"
			>
				<span
					:id="['inner'+result.id]"
					class="toggle-switch-inner"
					:data-on="result.on"
					:data-off="result.off"
					:style="'height:'+myStyle.height+'px;line-height:'+myStyle.height+'px'"
				></span>
				<span
					class="toggle-switch-switch"
					:style="'width:'
					+(myStyle.height-6)+'px;height:'
					+(myStyle.height-6)+'px;top:50%;margin-top:-'
					+(myStyle.height/2-1)+'px;border: 2px solid '
					+myStyle.border"
				></span>
			</label>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ToggleSwitch",
		props: ["resultData", "curStyle"],
		data() {
			return {
				myStyle: {
					width: 70,
					height: 30,
					switch_on: "lawngreen",
					switch_off: "darkgrey",
					border: "#e6e6e6"
				}
			};
		},
		mounted: function() {
			console.log("start to init toggle switch now.");
			let self = this;
			self.initInnerStyle();
		},
		methods: {
			changeStatus(id, checked) {
				console.log("start to change status:" + id + "," + checked);
				this.$emit("changeSwitch", {
					id: id,
					checked: checked
				});
			},
			initInnerStyle() {
				let self = this;
				//use customization toggle switch style
				if (this.curStyle) {
					if (this.curStyle.width !== undefined) {
						this.myStyle.width = this.curStyle.width;
					}
					if (this.curStyle.height !== undefined) {
						this.myStyle.height = this.curStyle.height;
					}
					if (this.curStyle.switch_on !== undefined) {
						this.myStyle.switch_on = this.curStyle.switch_on;
					}
					if (this.curStyle.switch_off !== undefined) {
						this.myStyle.switch_off = this.curStyle.switch_off;
					}
					if (this.curStyle.border !== undefined) {
						this.myStyle.border = this.curStyle.border;
					}
				}

				this.resultData.forEach(element => {
					console.log("init inner color.");
					let innerId = "inner" + element.id;
					let inner = document.getElementById(innerId);
					let className = inner.className;
					//add css attributes to ":before" and ":after"
					let rules = [
						{
							":before": {
								"background-color": self.myStyle.switch_off,
								height: self.myStyle.height + "px"
							}
						},
						{
							":after": {
								"background-color": self.myStyle.switch_on,
								height: self.myStyle.height + "px"
							}
						}
					];
					rules.forEach(rule => {
						for (let key in rule) {
							let attributes = rule[key];
							let innerStyle = window.getComputedStyle(inner, key);
							//innerRule:".toggle-switch-inner:after{background-color: red}"
							let innerRule = "." + className;
							innerRule += key + "{";
							for (let attrName in attributes) {
								let attrValue = attributes[attrName];
								innerRule += attrName + ":" + attrValue + ";";
							}
							innerRule += "}";
							//IE:document.styleSheets[0].addRule('.toggle-switch-inner::before','color: green');
							document.styleSheets[0].insertRule(innerRule, 0);
						}
					});
				});
			}
		}
	};
</script>

<style scoped>
	#toggle-switch {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		width: 100%;
		font-size: 10px;
		font-weight: bold;
	}

	.toggle-switch-item {
		position: relative;
		/* width: 90px; */
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;

		margin: 2px;
	}

	.toggle-switch-checkbox {
		display: none;
	}

	.toggle-switch-label {
		display: block;
		overflow: hidden;
		/* border: 2px solid #e6e6e6; */
		border-radius: 20px;
	}

	.toggle-switch-inner {
		display: block;
		width: 200%;
		margin-left: -100%;
		transition: margin 0.3s ease-in 0s;
	}

	.toggle-switch-inner:before,
	.toggle-switch-inner:after {
		display: block;
		float: right;
		width: 50%;
		/* height: 30px; */
		padding: 0;
		/* line-height: 30px; */
		color: white;
		box-sizing: border-box;
	}

	.toggle-switch-inner:before {
		content: attr(data-off);
		padding-right: 10px;
		/* background-color: #4c0; */
		color: white;
		display: flex;
		justify-content: flex-end;
	}

	.toggle-switch-inner:after {
		content: attr(data-on);
		padding-left: 10px;
		/* background-color: darkgrey; */
		color: white;
		display: flex;
		justify-content: flex-start;
	}

	.toggle-switch-switch {
		/* display: block; */
		/* width: 30px;height: 30px; */
		margin: 0px;
		background: white;
		position: absolute;
		top: 0px;
		bottom: 0px;
		/* border: 2px solid #e6e6e6; */
		border-radius: 20px;
		transition: all 0.3s ease-in 0s;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.toggle-switch-checkbox:checked + .toggle-switch-label .toggle-switch-inner {
		margin-left: 0px;
	}

	.toggle-switch-checkbox:checked + .toggle-switch-label .toggle-switch-switch {
		right: 0px;
	}
</style>
