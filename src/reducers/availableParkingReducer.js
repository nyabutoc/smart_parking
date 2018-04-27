const availableParkingReducer = (state = {availableParkingSpots : []}, action ) => {
	switch (action.type) {
		case 'GET_ASDATA_FUL' :
		console.log('action.data');
		console.log(action.data);
		 return { availableParkingSpots:  action.data};
		case 'GET_ASDATA_REJ' :
		 return {availableParkingSpots : []};
		default: 
			return {availableParkingSpots : []};
	}
}

export default availableParkingReducer;