import React from "react";
import { longdo, map, LongdoMap } from "./LongdoMap";

function Map() {
  function initMap() {
    map.Layers.setBase(longdo.Layers.GRAY);
  }
  const mapKey = "5e3612dcbfa88a77bf9cc6773e5a1545";
  return (
    <div className="App">
      <LongdoMap id="longdo-map" mapKey={mapKey} callback={initMap} />
    </div>
  );
}

export default Map;
