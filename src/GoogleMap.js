import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React ,{Component} from 'react';

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter:{
          lat:this.props.lat,
          lng:this.props.lng
      }

    };
     style = {
        width: '100%',
        height: '100%',
      }
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
     containerStyle = {
      position: 'absolute',  
      width: '400px',
      height: '160px'
    }
   
    render() {
      return (
        <Map containerStyle={this.containerStyle} style={this.style} google={this.props.google}
            initialCenter={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            } }
            center={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            } }>
          <Marker position={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            } } />

   
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
         apiKey: process.env.REACT_APP_API_KEY 
  })(MapContainer)