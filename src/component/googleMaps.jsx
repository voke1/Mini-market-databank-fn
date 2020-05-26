import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
// import Geocode from "react-geocode";
import './css/style.css';
import './css/bundle.css';
import Header from './header';
import Footer from './footer';
import axios from "axios";
import { HardwareTv } from 'material-ui/svg-icons';
import tv from 'material-ui/svg-icons/hardware/tv';




class Map extends Component {
    constructor(props) {
        console.log('props', props)
        super(props);
        this.state = {
            mapAddress: this.props.address
         
        }
    }

   

    /**
  * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
  *
  * @param nextProps
  * @param nextState
  * @return {boolean}
  */
    shouldComponentUpdate(nextProps, nextState) {
        if (
            this.props.markerPosition.lat !== this.props.center.lat ||
            this.props.address !== nextState.address 
        ) {
            return true
        } else if (this.props.center.lat === nextProps.center.lat) {
            return false
        }
    }

    onChange = async (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

   

    render() {
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap google={this.props.google}
                        defaultZoom={this.props.zoom}
                        defaultCenter={{ lat: this.props.mapPosition.lat, lng: this.props.mapPosition.lng }}
                    >
                        <InfoWindow
                            onClose={this.onInfoWindowClose}
                            position={{ lat: (this.props.markerPosition.lat + 0.0018), lng: this.props.markerPosition.lng }}
                        >
                            <div>
                                <span style={{ padding: 0, margin: 0 }}>{this.props.address}</span>
                            </div>
                        </InfoWindow>
                        {/* For Auto complete Search Box */}
                        <Autocomplete
                            style={{
                                width: '100%',
                                height: '40px',
                                paddingLeft: '16px',
                                marginTop: '2px',
                                marginBottom: '100px'
                            }}
                            onPlaceSelected={this.props.onPlaceSelected}
                            types={['(regions)']}
                        />
                        {/*Marker*/}
                        <Marker google={this.props.google}
                            name={'Dolores park'}
                            draggable={true}
                            onDragEnd={this.props.onMarkerDragEnd}
                            position={{ lat: this.props.markerPosition.lat, lng: this.props.markerPosition.lng }}
                        />
                        <Marker />
                    </GoogleMap>
                )
            )
        );
        let map;
        if (this.props.center.lat !== undefined) {
            map = <div>
                <div>
                    <div className="form-group">
                        <label htmlFor="">Address</label>
                        <input type="text" name="address" className="form-control"  readOnly="readOnly" value={this.props.address} />
                    </div>
                </div>
                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8VMR9FooFZN64_qR8pu0jY0NJ8j_sicE&libraries=places"
                    loadingElement={
                        <div style={{ height: `100%` }} />
                    }
                    containerElement={
                        <div style={{ height: this.props.height }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                />
            </div>
        } else {
            map = <div style={{ height: this.props.height }} />
        }
        return (map)
    }


}


export default Map;
