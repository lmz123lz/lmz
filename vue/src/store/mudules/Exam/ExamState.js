let state = {
	// loginname: 'admin', //用户名
	maxtime: 9000, //倒计时最大描述
	msg: "倒计时提示:", //时间提示信息
	ques: { //上一个, 下一个按钮
		previous: true,
		next: false,
	},
	bool: true, //开始答题的DIV开关
	saw: false, //答题区显示开关
	index: 0, //当前的题号
	radiocount: 0, //记录已选选项个数
	correcount: 0, //正确选项个数
	errorcount: 0, //错误选项个数
	blankcount:0,  //空白选项个数
	data: [], //答题数据
    tixiData: []   //知识体系数据
}

export default state
