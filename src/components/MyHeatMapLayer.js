import React from "react";

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import HeatmapData from "../utils/HeatmapData";
import {getHeatMapData} from '../actions/street';
import { connect } from 'react-redux';

const DEFAULT_STREETNAME = 'DECATUR AVENUE';
const DEFAULT_RADIUS = 2000;

const MyComponent = compose(
  withProps({
    //googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDD7e-AVNApqktqxpYf5DlON8WTV48exm4&v=3.exp&libraries=geometry,drawing,places,visualization",
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDD7e-AVNApqktqxpYf5DlON8WTV48exm4&v=3.exp&libraries=geometry,drawing,places,visualization",
    loadingElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs
)((props) =>(
    <HeatmapLayer data = {
      props.data.map( (dat) => ({
        location : new google.maps.LatLng(dat.location.lat,dat.location.lon),
        weight: dat.weight 
      }))
  }/>
))
 class MyHeatMapLayer extends React.Component {
  constructor () {
    super();
    //this.state = {
      //HeatmapData: []
     //}
    this.delayedShowHeatMap = this.delayedShowHeatMap.bind(this);
   }
  componentDidMount() {
    this.delayedShowHeatMap()
  }
   delayedShowHeatMap(){
    setTimeout(() => {
      this.props.getHeatMapData(DEFAULT_STREETNAME,DEFAULT_RADIUS);
    }, 200)
  }
   render () {
    return (
          <MyComponent data={this.props.heatMapData}/>
      )
   }

 }

const mapStateToProps = state => (state.streetReducer);

const mapDispatchToProps = (dispatch) => ({
  getHeatMapData: (streetName,radius) => dispatch(getHeatMapData(streetName,radius)),
})
export default connect(mapStateToProps, mapDispatchToProps)(MyHeatMapLayer);