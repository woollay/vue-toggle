# vue-multi-toggle-switch ![version](https://img.shields.io/badge/version-%20v1.0.9%20-green.svg) ![vue](https://img.shields.io/badge/vue-%20v2.1%20-green.svg) 
Toggle switch for vue.js <br>

<img src="https://img.shields.io/badge/license-MIT-green.svg" /> <img src="https://img.shields.io/badge/dependencies-0-brightgreen.svg" /> <img src="https://img.shields.io/badge/bugs-0-red.svg" />


Do you have questions or want a new feature? Use the "Issues" section :point_left:

## Setup
install:
```bash
npm install vue-multi-toggle-switch --save
```

Import: (in your main.js)
```javascript
	import ToggleSwitch from "vue-multi-toggle-switch";
	import Vue from "vue";
	Vue.use(ToggleSwitch);
```
## Usage
Use: (in your local .vue file/component, html section)

```xml

<toggle-switch 
  :resultData="resultData" //toggle switch button data
  :curStyle="curStyle" //toggle switch button css style
  @changeSwitch="change" //toggle switch button events
>
</toggle-switch>

```
## Webpack project by vue-cli

https://github.com/woollay/vue-toggle-switch


### Properties

| Name            | Type              | Required     | Sample     | Description                        |
| ---             | ---               | ---          | ---         | ---                                |
| resultData      | JSON              | Yes          | [{id: "234",status: false,on: "ON",off: "OFF"}]  | id:id of toggle-switch;<br/>on/off status of toggle-switch; <br/>on:the text of on status in toggle-switch;<br/>off:the text of off status in toggle-switch|
| curStyle        | JSON              | No           | { switch_on: "red" }  | customization style of toggle-switch|



### Events

| Name   | Description              |
| ---    | ---                      |
| changeSwitch | Triggered on toggle, user selects switch option, returns current value. used in component,like:<br/>@changeSwitch="change",<br/>the callback function as following:<br/>function change(result) {<br/>console.log("option changed:" + result.id + "," + result.checked);<br/>}<br/>    |



## LICENSE
MIT

