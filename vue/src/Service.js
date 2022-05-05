import axios from 'axios'
import { ElMessage, ElLoading } from 'element-plus'
let loadingInstance = null //这里是loading
//使用create方法创建axios实例
const Service = axios.create({
    timeout: 8000, // 请求超时时间
    method: 'post',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})
// 添加请求拦截器，在请求头中加token
Service.interceptors.request.use(
    config => {
        loadingInstance = ElLoading.service({
            lock: true,
            text: 'loading...'
        })
        // 判断 storage 中是否有存储的指定键
        if (localStorage.getItem('Authorization')) {
            config.headers.Authorization = localStorage.getItem('Authorization');
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    });

// 添加响应拦截器
Service.interceptors.response.use(response => {
    setTimeout(() => {
        loadingInstance.close()
    }, 500);
    // console.log(response)
    return response.data
}, error => {
    console.log('axios响应拦截器：', error)
    const msg = error.Message !== undefined ? error.Message : ''
    ElMessage({
        message: '网络错误' + msg,
        type: 'error',
        duration: 3 * 1000
    })
    loadingInstance.close()
    return Promise.reject(error)
})

// 封装axios的get请求
export function fetch (url, params) {
    return new Promise((resolve, reject) => {
        Service.get(url, params)
            .then(response => {
                console.log(response, '~~~~~');
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

// 封装axios的post请求
export function posts (url, xx) {
    return Service({
        url: url,
        method: 'post',
        params: xx
    })
}

