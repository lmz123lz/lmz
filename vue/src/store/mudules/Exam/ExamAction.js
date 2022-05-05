import $axios from 'axios'
let action = {
    showtopic ({ commit }) {
        //请求mockjs中的数据
        $axios.get("/api/testbase").then(res => {
            commit('showtopic', res.data.shuju)
        })
    },
    //   增加知识体系
    submitadd (context, payload) {
        context.state.tixiData.push(payload);
        console.log(context.state.tixiData);
    }
}
export default action;