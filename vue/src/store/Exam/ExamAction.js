import $axios from 'axios'

let action = {
    //请求mockjs中的数据
    showtopic(){
        $axios.get('/api/testbase').then(res=>{
            console.log(res);
        })
    }
}

export default action;




