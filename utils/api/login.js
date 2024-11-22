import request from '@/utils/request.js'
import baseURL from '@/utils/config.js';

export function IsLogin() {
	let token = uni.getStorageSync('token'); 
	if (token == undefined | token == '')
		return false;
	return true;
}

//验证码
export function getCode(phone,type) {
	return request({
		url: `/common/sendCode/${phone}/${type}`,
		method: "get"
	})
}
//注册
export function appRegister(data) {
	return request({
		url: '/appRegister',
		data: data,
		method: "POST",
		loading: 1, // 启用加载效果
		loadingText: '注册中....', // 自定义加载提示文字
	})
}
//登录
export function loginUser(data) {
	return request({
		url: '/appLogin',
		data: data,
		method: "POST",
		loading: 1, // 启用加载效果
		loadingText: '登录中....', // 自定义加载提示文字
	})
}
//获取用户
export function getInfo() {
	return request({
		url: '/app/getInfo',
		method: "GET"
	})
}