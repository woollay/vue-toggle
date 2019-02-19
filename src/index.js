import Vue from 'vue'
import ToggleSwitch from './components/ToggleSwitch.vue'

const plugin = {
    install(Vue, options) {
        Vue.component('ToggleSwitch', ToggleSwitch)
    }
}

export default plugin