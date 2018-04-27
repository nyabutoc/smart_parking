
let fetchingHeatMapDataError = (message) => ({
  type : 'GET_HMDATA_REJ',
  message: message 
});

let fetchingHeatMapDataSuccess = (data) => ({
  type: 'GET_HMDATA_FUL',
  data : data
});

let fetchingAvailableParkingSuccess = (data) => ({
  type : 'GET_ASDATA_FUL',
  data: data 
});

let fetchingAvailableParkingError = (message) => ({
  type : 'GET_ASDATA_REJ',
  message: message 
});

export function checkin (streetId) {
  
}

export function getAvailableParking (crossStreet)  {
  let config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }, // this line is important, if this content-type is not set it wont work
    body: JSON.stringify(crossStreet),
  };
  return dispatch => fetch('/street/getAvailableParking', config)
    .then(response => response.json())
    .then((res) => {
      if (!res.success) {
        dispatch(fetchingAvailableParkingError(res.message));
        return Promise.reject(res.message);
      } else {
        //localStorage.setItem('token', res.token);
        dispatch(fetchingAvailableParkingSuccess(res.data));
      }
    })
    .catch(err => dispatch(fetchingAvailableParkingError(err)));

}
export function getHeatMapData(streetName, radius) {
	let config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }, // this line is important, if this content-type is not set it wont work
    body: JSON.stringify({streetName: streetName, radius : radius}),
  };
  return dispatch => fetch('/street/getHeatMapData', config)
    .then(response => response.json())
    .then((res) => {
      if (!res.success) {
        dispatch(fetchingHeatMapDataError(res.message));
        return Promise.reject(res.message);
      } else {
        //localStorage.setItem('token', res.token);
        dispatch(fetchingHeatMapDataSuccess(res.data));
      }
    })
    .catch(err => dispatch(fetchingHeatMapDataError(err)));
}