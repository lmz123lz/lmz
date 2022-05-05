export default {
	REBACK(state) {
		return state.data[state.index].choice != -1 ? state.data[state.index].choice : ''
	},
    SHUJU(state){
        return state.tixiData;
    }
}
