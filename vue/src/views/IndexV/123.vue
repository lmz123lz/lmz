<template>
    <div>
        <el-container>
            <el-header class="head">
                <el-row type="flex" justify="space-between">
                    <el-col >百科知识答题系统</el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside class="left" width="1000px">
                     <div class='content'>
                        <el-row class="header">
                            <el-col :span="10"><div>答题区</div></el-col>
                            <el-col :span="8" :offset="6"><el-button  :disabled="li.yes" type="primary" @click="begin">开始答题</el-button></el-col>
                        </el-row> 
                        <!-- <div class="tip" v-if="saw">
                               <div class="tips">
                               </div>  
                             
                        </div> -->
                         <div class="mid" v-if="seen">
                            <div >当前第{{num+1}}题，一共10道题</div>
                            <div> 
                                <!-- 题目 -->
                                <p>
                                    {{exam.data[num].qid}} {{exam.data[num].qtext}}
                                </p> 
                                <!-- 选项 -->
                                <p v-for="(item,index) of exam.data[num].option" :key="index" >
                                   <input type="radio" name="aqqq" @click="doo(index)" class="xuan">{{exam.data[num].option[index].otext}}
                                </p> 

                                <!-- <el-radio-group v-model="radio" >
                                    <el-radio    v-for="(item,index) of exam.data[num].option" :key="index"  :label="index" >
                                        {{exam.data[num].option[index].otext}}
                                    </el-radio>
                                     <el-radio :label="6">备选项</el-radio>
                                    <el-radio :label="9">备选项</el-radio>
                                    <el-radio :label="9">备选项</el-radio> --> 
                                <!-- </el-radio-group>  --> 

                                 <!-- <el-radio-group v-model="radio">
                                        <el-radio :label="3" @click="do">{{exam.data[num].option[0].otext}}</el-radio>
                                        <el-radio :label="6" @click="do"> {{exam.data[num].option[1].otext}}</el-radio>
                                        <el-radio :label="9" @click="do"> {{exam.data[num].option[2].otext}}</el-radio>
                                        <el-radio :label="1" @click="do"> {{exam.data[num].option[3].otext}}</el-radio>
                                    </el-radio-group> -->
                            </div>
                        </div> 
                        
                         <div class="button" v-if="seen">
                            <el-button-group class="pre">
                                <el-button type="primary" :disabled="ques.previous"  @click="pre" icon="el-icon-arrow-left">上一题</el-button>
                                <el-button type="primary" :disabled="ques.next" @click="next" >下一题<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                            </el-button-group>
                              
                        </div>
                         
                     </div>
                     
                </el-aside>
                
                <el-main class="right">
                    <div class='score'>
                         <p>记分区</p>
                        <div class="box">
                            <div v-for="(item,index) of this.exam.data" :key="index" class="aaa" >
                                <div class="rightbox1">
                                    {{item.qid}}
                                </div>
                            </div>
                            <!-- <el-radio-group v-model="radio" @change="change">
                                <el-radio v-for="(item,index) of this.exam.data" :key="index" :label="index">{{index+1}}</el-radio>
                            </el-radio-group> -->
                        </div>
                         <!-- <el-button type="primary"  @click="jiao" class="jiao">交卷</el-button> -->
                         <el-popover  placement="right" width="400" trigger="click">
                            <div class="tankuang">
                                恭喜你，获得{{this.count}}分
                            </div>
                             <el-button slot="reference" @click="jiao">交卷</el-button>
                         </el-popover>
                     </div>
                </el-main>
            </el-container>            
        </el-container>
    </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
export default {
    data:function(){
        return{
            num:0,
            radio:'4',
            ques:{
                previous:true,
                next:false,
            },
            seen:false,
            anlist:[],
            // rightlist:[102,104,103,103,103,102,103,101,103,103],
            rightlist:[],
            count:0,
            li:{
              yes:false,
           },
           label:"",
           saw:true,
           
        }
    },
    computed:{
         ...mapState(['exam'])
    },
    methods:{
        // change(value){
        //     this.num=value
        // },
        //开始答题
        begin(){
            //按钮不可用状态
           this.seen=true;
           this.li.yes=true;
           this.saw=false
        },
        //选项
        doo(index){
            this.anlist[this.num]=this.exam.data[this.num].option[index].oid
            // this.exam.data[this.num].choice
            //判断选中的答案是否和标准的答案一致
            console.log(this.anlist[this.num])
            document.getElementsByClassName('aaa')[this.num].style.backgroundColor='red'

        //     //若被选中，对应的右边的记分栏背景颜色发生变化
            
         },
        
        jiao(){
             this.$message('交卷成功');
             //计算分数
             for(let i=0;i<10;i++){
                if(this.anlist[i]== this.rightlist[i]){
                  console.log('答对了' +this.anlist[i])
                  this.count+=10
                  
                }else{
                  console.log('答错了' +this.anlist[i])
                  
                }
             }
             console.log(this.count)
        },
        //点击下一题
        next(){
            this.ques.previous=false
            this.num++
            // if(this.num==9){
            if(this.num==this.exam.data.length-1){
               this.ques.next=true
            }
           
            // console.log(this.radio)
              this.radio=""
            for(let i=0;i<4;i++){
                document.getElementsByClassName('xuan')[i].checked=''
            }
        //     if(this.ques.previous=true){
        //     this.li.no=false
        //    }

        },
        //点击上一题
        pre(){
            this.ques.next=false
            this.num--
            if(this.num==0){
                this.ques.previous=true
            }
           for(let i=0;i<4;i++){
                document.getElementsByClassName('xuan')[i].checked=''
            } 

        },
        
    },
    created(){
        for(let i of  this.exam.data){
            this.rightlist.push(i.correct)
        }
        console.log(this.rightlist)
    },
}
</script>
<style scoped>
.head {
  background-color: rgb(17, 128, 226);
  line-height: 60px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: whitesmoke;
}

.left {
  background-color: gainsboro;
  height: 88vh;
}
.left .content{
    width: 800px;
    height: 500px;
    margin: 30px auto;
    border:1px solid black;
}
.left .content .header{
    width: 100%;
    height: 60px;
    line-height: 60px;
     border-bottom:1px solid black ;
}
.left .content .mid{
    width: 100%;
    height: 300px;
    border-bottom:1px solid black;
  
}
/* .left .content .tip{
    width: 500px;
    height: 300px;
    line-height: 300px;
    margin: 50px auto;
    border:1px solid black;
    font-size: 18px;
    font-weight: border;
    text-align: center;
    background-color: rgb(72, 160, 236); ;
}
.tip .tips{
    width: 270px;
    height: 100px;
    border:1px solid red;
    margin: 0 auto;
    vertical-align: middle;
    display: inline-block;
} */
.pre{
    margin-left: 50px;
    line-height: 200px;
}

.right {
  height: 88vh;
  overflow: auto;
}
.right .score{
    width:400px;
    height:400px;
    border:1px solid red;
    margin:10px auto;
   
}
.tankuang{
    width:400px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    font-size: 20px;
    font-weight: border;
    color:white;
    background-color: pink;
}
.right .score .box{
    width: 100%;
    height: 200px;
    /* border:1px solid black; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.right .score .rightbox1{
      width:45px;
      height: 45px;
      border:1px solid black;
      margin: 10px;
      line-height: 45px;
      text-align: center;
}
.jiao{
    float:right;
    margin-right:180px;
}
</style>