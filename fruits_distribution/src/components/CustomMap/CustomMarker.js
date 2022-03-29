import React from "react";
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';

var markerStyling = {
    clear: "both", display: "inline-block", backgroundColor: "#00921A", fontWeight: '500',
    color: "blue", boxShadow: "0 6px 8px 0 rgba(63,63,63,0.11)", borderRadius: "23px",
    padding: "8px 16px", whiteSpace: "nowrap", width: "160px", textAlign: "center"
};

const CustomMarker = (props) => {
    return (
        <MarkerWithLabel color="blue"
            position={props.position}
            labelStyle={markerStyling}
        >
        </MarkerWithLabel>
    )
};

export default CustomMarker;