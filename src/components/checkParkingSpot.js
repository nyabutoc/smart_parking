import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAvailableParking } from '../actions/street';

class CheckParkingSpot extends Component {
	constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm (e) {
  	 e.preventDefault();
  	 //console.log(this.refs);
    let main_st =  this.refs.main_st.value;
    let other_st =  this.refs.other_st.value;
    this.props.availableParking({main_st : main_st, other_st:other_st });

  } 

  render() {
  	return (
  		<div className="container">
       <h2>Check For spot</h2>
         <div className="col-md-4">
           <form onSubmit={this.submitForm}>
             <div className="form-group">
               <label>
                Main Street name
              </label>
              <input
              className="form-control"
              type="text"
              ref="main_st"
              />
            </div>
            <div className="form-group">
              <label>
                Cross Street
              </label>
              <input
                className="form-control"
                type="text"
                ref="other_st"
              />
            </div>
            <div className="form-group">
              <input
              type="submit"
              className="btn btn-primary"
              value="Check Available Spots"
              />
            </div>
          </form>
         </div>     
      </div>
  	
  	);
  }
}


const mapDispatchToProps = (dispatch) => ({
  availableParking: (data) => dispatch(getAvailableParking(data)),
})
export default connect(null, mapDispatchToProps)(CheckParkingSpot);
