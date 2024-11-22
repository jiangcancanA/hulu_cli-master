import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import baseURL from '@/utils/config.js'; // 导入 baseURL

import {
	setToken,
	getToken,
	removeToken
} from '@/utils/cookies.js'; // 导入 Cookies 方法
import {
	AgentType
} from '@/utils/utils.js'; // 引入枚举
import tmVuetify from "./tm-vuetify";
import uView from '@/uni_modules/uview-ui'

Vue.use(tmVuetify)

Vue.use(uView)

// 获取存储的 Token 并挂载到 Vue 实例的原型上
const token = uni.getStorageSync('token');
Vue.prototype.$token = token;

// 将 baseURL 挂载到 Vue 实例的原型上
Vue.prototype.$baseURL = baseURL;

// 导入 API 函数
import {
	getCode,
	appRegister,
	loginUser,
	getInfo,
	allupload
} from '@/utils/api';

// 将 API 函数挂载到 Vue 实例的原型上
Vue.prototype.$api = {
	getCode,
	appRegister,
	loginUser,
	getInfo,
	allupload
};

// 将 Cookies 方法挂载到 Vue 实例的原型上
Vue.prototype.$setToken = setToken;
Vue.prototype.$getToken = getToken;
Vue.prototype.$removeToken = removeToken;

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App,
})
app.$mount()
// #endif