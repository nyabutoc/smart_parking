

const streetReducer = (state = {heatMapData : []}, action) => {
	switch (action.type) {
		case 'GET_HMDATA_FUL' :
		 return {heatMapData:  action.data};
		default: 
			return state;
	}
	
}

export default streetReducer;