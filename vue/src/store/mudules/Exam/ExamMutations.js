let mutation = {
	showtopic(state, payload) {
		state.data = payload;
		state.saw = true;
		state.bool = false;
	},
	CountDown(state) {
		if (state.maxtime >= 0) {
			let minutes = Math.floor(state.maxtime / 60);
			let seconds = Math.floor(state.maxtime % 60);
			state.msg = "距离考试结束还有" + minutes + '分' + seconds + '秒';
			if (state.maxtime == 5 * 60) alert("距离考试结束仅剩5分钟");
			--state.maxtime;
		} else {
			clearInterval(this.timer);
			alert("时间到，结束!");
		}
	},

	//点击下一题
	NEXT(state) {
		// 判断其是否已选
		// if (state.data[state.index].choice == -1) {
		// 	return false;
		// }
		//当前的题号+1
		state.index++;
		state.ques.previous = false;
		if (state.index == state.data.length - 1) {
			state.ques.next = true;
		}
	},
	//点击上一题
	LAST(state) {
		//当前的题号-1
		state.index--;
		state.ques.next = false;
		if (state.index == 0) {
			state.ques.previous = true;
		}
	}
}

export default mutation
