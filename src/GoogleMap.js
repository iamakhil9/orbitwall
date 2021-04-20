import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React ,{Component} from 'react'

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
        width: '35%',
        height: '30%'
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
   
    render() {
      return (
        <Map style={this.style} google={this.props.google}
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
    apiKey: ("ADD YOUR GOOGLE MAP API KEY HERE")
  })(MapContainer)