const userModule = {
  namespaced: false, // 启用命名空间
  state: () => ({
	userInfo: JSON.parse(uni.getStorageSync('userInfo') || null), // 从 localStorage 恢复用户信息
    permissions: [], // 存储用户权限
    menumeList: [ // 存储菜单项的数组
      { name: '我的钱包', pic: '/static/iocn/qian.png', id: 1,url:'/pages/userPage/wallet/wallet' },
      { name: '我的订单', pic: '/static/iocn/order.png', id: 2 },
      { name: '邀请好友', pic: '/static/iocn/yaoqing.png', id: 3 },
      { name: '寻找代理', pic: '/static/iocn/daili.png', id: 4 },
      { name: '联系我们', pic: '/static/iocn/lianxi.png', id: 5 },
      { name: '意见反馈', pic: '/static/iocn/yijian.png', id: 6 },
      { name: '关于我们', pic: '/static/iocn/abt.png', id: 7 },
      { name: '设置', pic: '/static/iocn/sting.png', id: 8 }
    ],
    setupList: [
      { name: '用户昵称', id: 1 },
      { name: '用户ID', id: 2 },
      { name: '联系电话', id: 3 },
      { name: '代理级别', id: 4 }, 
    ],
	payList:[
		{
			title:'支付宝支付',
			miaos:'支付宝安全支付',
			pic:'/static/iocn/zfb.png',
			id:1
		},
		{
			title:'微信',
			miaos:'亿万用户的选择，更快更安全',
			pic:'/static/iocn/wx.png',
			id:2
		}
	]
  }),

  mutations: {
    // 设置用户信息的 mutation
    setUserInfo(state, userInfo) {
		console.log(state, userInfo)
      state.userInfo = userInfo;
      uni.setStorageSync('userInfo', JSON.stringify(userInfo)); // 保存用户信息到 localStorage
    },
    // 清除用户信息
    clearUserInfo(state) {
      state.userInfo = null;
      uni.removeStorageSync('userInfo'); // 从 localStorage 移除用户信息
    },
    setPermissions(state, permissions) {
      state.permissions = permissions;
    },
    addMenuItem(state, menuItem) { // 添加菜单项的 mutation
      state.menumeList.push(menuItem);
    }
  },


  getters: {
    getUserInfo: state => state.userInfo,
    getPermissions: state => state.permissions,
    getMenumeList: state => state.menumeList, // 获取菜单项的 getter
    getSetupList: state => state.setupList ,// 获取设置项的 getter
	getpaylist: state => state.payList // 获取设置项的 getter
  }
};
export default userModule;