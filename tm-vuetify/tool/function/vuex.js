class VuexFacade {
	constructor(store) {
	    this.store = store;
	}

	// 链式调用
	state(namespace) {
		if (namespace) {
			return this.store.state[namespace];
		}
		return this.store.state;
	}

	// 链式调用
	getters(namespace) {
		const getters = this.store.getters;
		const keys = Object.keys(getters);
		const result = {};

		keys.forEach(key => {
			const parts = key.split('/');
			if (parts.length === 1) {
				result[key] = getters[key];
			} else if (namespace && namespace === parts[0]) {
				result[parts[1]] = getters[key];
			} else {
				result[`${parts[0]}_${parts[1]}`] = getters[key];
			}
		});

		return result;
	}

	commit(funName, arg) {
		try {
			this.store.commit(funName, arg);
		} catch (e) {
			console.error(`未发现函数方法: ${funName}`);
		}
	}

	dispatch(funName, arg) {
		try {
			return this.store.dispatch(funName, arg);
		} catch (e) {
			console.error(`未发现函数方法: ${funName}`);
		}
	}

	// 获得原始vuex对象。
	getVuex() {
		return this.store;
	}
}

export default VuexFacade;