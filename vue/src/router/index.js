import { createRouter, createWebHashHistory } from 'vue-router'
import LoginV from '../views/LoginV/LoginV.vue'

const routes = [
   
    {
        path: '',
        name: 'LoginV',
        component: LoginV,
        // 此处设置的原因：保证第一次进入是缓存了的
        meta: { isKeepAlive: true }
    },
    {
        path: '/register',
        name: 'RegisterV',
        component: () => import('../views/RegisterV/RegisterV.vue'),
        meta: { isKeepAlive: true }
    },
    {
        path: '/index',
        name: 'IndexV',
        component: () => import('../views/IndexV/IndexV.vue'),
        meta: { isKeepAlive: true }    
    },
    {
        path: '/tixi',
        name: 'TixiV',
        component: () => import('../views/TiXiV/TixiV.vue'),
        meta: { isKeepAlive: true }    
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    // 业务逻辑, 这个根据你项目的具体情况决定, 不是固定的~
    let user = sessionStorage.getItem('user');  //有可能存在, 亦有可能不存在
    if(to.name == 'LoginV' || to.name == 'RegisterV' || to.name == 'TixiV'){
        next();
    }else{
        if(!user){   //判断user不存在的情况下
            next({name: 'LoginV'})
        }else{   //user存在的情况
            next();
        }
    }
})
export default router
