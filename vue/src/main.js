import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入初始化css
import '@/assets/css/base.scss'

/****引入mokejs*******/
require("./mock/mock")

const app = createApp(App);

/****引入 echarts *******/
import * as echarts from 'echarts';
app.config.globalProperties.$echarts = echarts;

// import { Search } from '@element-plus/icons-vue'
// app.use(Search)
app.use(store).use(router).use(ElementPlus).mount('#app');

