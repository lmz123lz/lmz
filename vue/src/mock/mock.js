import Mock from 'mockjs';

// const Random = require('mockjs').Random;
// **题库接口*******************************************************
//首页题库接口
Mock.mock("/api/testbase",{
    shuju:[ 
        {
            qid: 1,   //题目的序号
            qtype: 1,   //题目类型, 单选 多选
            qtext: "下列那种动物不属于哺乳动物？",
            option: [
                { "oid": 101, otext: "蝙蝠" },
                { "oid": 102, otext: "海龟" },
                { "oid": 103, otext: "袋鼠" },
                { "oid": 104, otext: "鲸" }
            ],
            correct: 102,   //正确答案
            choice: -1,    //用户是否答过, 不管正确与否
            flag: true		// 用来判断用户是否多次选择正确答案
        },
        {
            qid: 2,
            qtype: 1,
            qtext: "蜗牛头上的一对“角”主要作用？",
            option: [
                { oid: 101, otext: "捕食" },
                { oid: 102, otext: "防护" },
                { oid: 103, otext: "爬行" },
                { oid: 104, otext: "探路" }
            ],
            correct: 104,
            choice: -1,
            flag: true
        },
        {
            qid: 3,
            qtype: 2,
            qtext: "嘴的作用？",
            option: [
                { oid: 101, otext: "吃饭" },
                { oid: 102, otext: "吃气球" },
                { oid: 103, otext: "说话" },
                { oid: 104, otext: "Kiss" }
            ],
            correct: [101,103,104],
            choice: -1,
            flag: true
        },
        {
            qid: 4,
            qtype: 1,
            qtext: "现在美国国旗星条上有多少颗星？",
            option: [
                { oid: 101, otext: "25颗" },
                { oid: 102, otext: "30颗" },
                { oid: 103, otext: "50颗" },
                { oid: 104, otext: "60颗" }
            ],
            correct: 103,
            choice: -1,
            flag: true
        },
        {
            qid: 5,
            qtype: 1,
            qtext: "飞机票头等舱的票价为普通舱票价的",
            option: [
                { oid: 101, otext: "200%" },
                { oid: 102, otext: "180%" },
                { oid: 103, otext: "150%" },
                { oid: 104, otext: "130%" }
            ],
            correct: 103,
            choice: -1,
            flag: true
        },
        {
            qid: 6,
            qtype: 1,
            qtext: "人体的解毒器官是",
            option: [
                { oid: 101, otext: "胃" },
                { oid: 102, otext: "肾脏" },
                { oid: 103, otext: "脾脏" },
                { oid: 104, otext: "脾" }
            ],
            correct: 103,
            choice: -1,
            flag: true
        },
        {
            qid: 7,
            qtype: 1,
            qtext: "满汉全席兴起于",
            option: [
                { oid: 101, otext: "清代" },
                { oid: 102, otext: "唐代" },
                { oid: 103, otext: "宋代" },
                { oid: 104, otext: "两汉" }
            ],
            correct: 102,
            choice: -1,
            flag: true
        },
        {
            qid: 8,
            qtype: 1,
            qtext: "动物细胞的“能量转换器”是：",
            option: [
                { oid: 101, otext: "液泡" },
                { oid: 102, otext: "染色体" },
                { oid: 103, otext: "线粒体" },
                { oid: 104, otext: "叶绿体" }
            ],
            correct: 103,
            choice: -1,
            flag: true
        },
        {
            qid: 9,
            qtype: 1,
            qtext: "人舌头的哪个部位对甜度最敏感",
            option: [
                { oid: 101, otext: "舌尖" },
                { oid: 102, otext: "舌两侧" },
                { oid: 103, otext: "舌根" },
                { oid: 104, otext: "舌中间" }
            ],
            correct: 101,
            choice: -1,
            flag: true
        },
        {
            qid: 10,
            qtype: 1,
            qtext: "通常所说的“生命中枢”是指",
            option: [
                { oid: 101, otext: "下丘脑" },
                { oid: 102, otext: "中脑" },
                { oid: 103, otext: "延脑" },
                { oid: 104, otext: "脑桥" }
            ],
            correct: 103,
            choice: -1,
            flag: true
        },
        {
            qid: 11,
            qtype: 1,
            qtext: "牛的“年轮”长在",
            option: [
                { oid: 101, otext: "牛角上" },
                { oid: 102, otext: "牛蹄上" },
                { oid: 103, otext: "牙齿上" },
                { oid: 104, otext: "肚片上" }
            ],
            correct: 103,
            choice: -1,
            flag: true
        }
    ]
});


