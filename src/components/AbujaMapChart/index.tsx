import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
    projection="geoAzimuthalEqualArea"
    projectionConfig={{
      rotate: [-10.0, -52.0, 0],
      center: [0, 5], 
      scale: 500,
    }}
    >
      <Geographies
        geography="/features.json"
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }: any) =>
          geographies.map((geo: any) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[7.49508, 9.05785]} // Coordinates for Abuja, Nigeria
        dx={-10}
        dy={10}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Nigeria"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;