import React from "react"
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import MyHeatMapLayer from './MyHeatMapLayer';
import { connect } from 'react-redux';
import {getHeatMapData} from '../actions/street';
const url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDD7e-AVNApqktqxpYf5DlON8WTV48exm4&v=3.exp&libraries=geometry,drawing,places,visualization";
const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDD7e-AVNApqktqxpYf5DlON8WTV48exm4&v=3.exp&libraries=geometry,drawing,places,visualization",
    //googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places,visualization",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>(
  <GoogleMap
    defaultZoom={props.defaultZoom}
    defaultCenter={props.defaultCenter}
  >
    <MyHeatMapLayer/>
  </GoogleMap>
))
//{props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
class MyMap extends React.Component {
	constructor() {
    super();
    //this.state = {
    //isMarkerShown: false,
  //}; 
  //this.delayedShowMarker = this.delayedShowMarker.bind(this);
  //this.handleMarkerClick = this.handleMarkerClick.bind(this);
  this.getPoints = this.getPoints.bind(this);
  this.submitForm = this.submitForm.bind(this);

 	}
  componentDidMount() {
    //this.delayedShowMarker()
  }

  //delayedShowMarker(){
    //setTimeout(() => {
      //this.setState({ isMarkerShown: true })
    //}, 3000)
  //}

  handleMarkerClick() {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }
   // Heatmap data: 500 Points
      getPoints() {
         }
  submitForm(e) {
    e.preventDefault();
    let streetName =  this.refs.streetName.value;
    let radius =  this.refs.radius.value;
    this.props.getHeatMapData(streetName,radius);
  }

  render() {
    return (
       <div className="container">
       <h2>Browse Spots</h2>
       <div className="row">
         <div className="col-md-4">
           <form onSubmit={this.submitForm}>
             <div className="form-group">
               <label>
                Street Name
              </label>
              <input
              className="form-control"
              type="text"
              ref="streetName"
              />
            </div>
            <div className="form-group">
              <label>
                radius
              </label>
              <input
                className="form-control"
                type="text"
                ref="radius"
              />
            </div>
            <div className="form-group">
              <input
              type="submit"
              className="btn btn-primary"
              value="Browse Spots"
              />
            </div>
          </form>
         </div>
         <div className="col-md-8">
          <MyMapComponent
            defaultZoom={14}
            defaultCenter={{ lat: 40.8741693, lng:-73.87747130000001 }}
            //isMarkerShown={this.state.isMarkerShown}
            //onMarkerClick={this.handleMarkerClick}
            getPoints = {this.getPoints}
          >
          </MyMapComponent>  
         </div>
       </div>
      </div>
    )
  }
}
const mapStateToProps = state => (state.streetReducer);

const mapDispatchToProps = (dispatch) => ({
  getHeatMapData: (streetName,radius) => dispatch(getHeatMapData(streetName,radius)),
})
export default connect(mapStateToProps, mapDispatchToProps)(MyMap);

  
      


