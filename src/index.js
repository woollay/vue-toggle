import ToggleSwitchComp from './components/ToggleSwitch.vue'

function install(Vue) {
    if (install.installed) return
    install.installed = true
    Vue.component('toggle-switch', ToggleSwitchComp)
}

const ToggleSwitch = {
    install: install,
    ToggleSwitchComp
};

if (typeof window !== undefined && window.Vue) {
    window.Vue.use(ToggleSwitch);
}

export default ToggleSwitch