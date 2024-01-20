// vuex代码
import { createStore } from 'vuex';

//创建仓库

const store = createStore({
    state: {
      // 在这里定义你的状态
      appVersion: 'v1.0'
    },
    mutations: {
      // 在这里定义你的 mutations
    },
    actions: {
      // 在这里定义你的 actions
    },
    modules: {
      // 在这里定义你的模块
    },
  });
  
//导出给main.js

export default store;