import { reactive } from "vue";
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
let user = sessionStorage.getItem('user');
let pwd = sessionStorage.getItem('pwd');
// 报错参考网站:
// https://blog.csdn.net/qq_18470967/article/details/121023827
// const router = useRouter()
export function useCount () {
    // router必须放在事件函数外, 暴露函数内
    const router = useRouter()
    const formObj = reactive({
        loginName: '',
        loginPass: ''
    })
    //点击登录，会跳转到主界面
    const login = () => {
        if (formObj.loginName == '' || formObj.loginPass == '') {
            ElMessage({
                message: '用户名和密码不能为空',
                type: 'error',
            })
            return;
        } else {
            if (formObj.loginName !== user || formObj.loginPass !== pwd) {
                ElMessage({
                    message: '用户名和密码不对,请核实~',
                    type: 'error',
                })
                return;
            } else {
                router.push({
                    path: '/index',
                })
            }

        }
    }
    const regist = () => {
        router.push({ path: '/register' })
        // 路径和namespaced有关
        // this.$store.dispatch("exam/regedit",'卫海');
        // https://blog.csdn.net/qq_34220826/article/details/89214727?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.base
    }
    const tixi = () => {
        router.push({ path: '/tixi' });
    }
    return { formObj, login, regist, tixi }
}


