import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
import getMarkersLocation from '../../utils/markers';
import CustomMarker from "./CustomMarker";

const apiKey = "AIzaSyAP7Rv7mYoTx4s5fsuXEne7RW7yboYL7R0";
const defaultZoom = 17; // map default zoom
const defaultCenter = { lat: 31.54224861, lng: 34.85645461 }; // map default location

const MapWrapper = compose(
    withProps({
        googleMapURL:
            `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => {
    const markersLocation = getMarkersLocation(props.locationData);
    return (
        <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
            {/*need to work on improving performance when multiple markers are showing up, the 
                problem is with label, labels taking a lot of time to render
            */}
            {markersLocation.map((markerData, index) =>
                <Marker label={markerData.numberOfFruits}
                    // labelStyle={{ color: (markerData.isHills ? "blue" : "green") }}
                    position={{ lat: markerData.lat, lng: markerData.lng }}
                    key={index} >
                </Marker>
            )}
        </GoogleMap>
    )
});

export default MapWrapper;
