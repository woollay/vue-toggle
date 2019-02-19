// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ToggleSwitch from './demo'

/* eslint-disable no-new */
new Vue({
    el: '#toggle-switch-demo',
    components: {
        ToggleSwitch
    },
    template: '<ToggleSwitch/>'
})