import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkin } from '../actions/street';


class Checkin extends Component {
	constructor(props) {
    super(props);
  }
  submitForm (e) {
  	 e.preventDefault();
    let { dispatch } = this.props;
    let main_st =  this.refs.main_st.value;
    let other_st =  this.refs.other_st.value;
    //this.props.availableParking({main_st : main_st, other_st:other_st });

  } 

  render() {
     let spots= [];
     console.log("props");
     console.log(this.props);
     let parkingSpots = this.props.availableParkingSpots ?  this.props.availableParkingSpots : []

     parkingSpots.map((i, idx) => {
      //let authorUrl = `/profile/${i.id}`;
      spots.push(
        <div key={idx}>
            { i.street_adress}
        </div>
      );
    });

    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Select a street to check in</h3>
          { spots }
        </div>
      </div>
    );

  }
}

const mapStateToProps = state => (state.availableParkingReducer);

//const mapDispatchToProps = (dispatch) => ({
  //getHeatMapData: (streetName,radius) => dispatch(getHeatMapData(streetName,radius)),
//})
export default connect(mapStateToProps, null)(Checkin);