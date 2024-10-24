"use client";
import { useState } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import { ListingCardItem, SearchResultData } from "../types/app";
import { getCenter } from "geolib";
import img from "../images/mapMarker.png";
import "mapbox-gl/dist/mapbox-gl.css"
import Image from "next/image";
const Map = ({ searchResultData }: { searchResultData: SearchResultData }) => {
    const [selectedLocation, setSelectedLocation] = useState<ListingCardItem | null>(null);
  const coordinates = searchResultData.map((listing) => ({
    longitude: listing.long,
    latitude: listing.lat,
  }));
  const center = getCenter(coordinates) as {
    longitude: number;
    latitude: number;
  };
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    zoom: 11,
    longitude: center.longitude,
    latitude: center.latitude,
  });
  return (
    <MapGL
      {...viewPort}
      mapStyle={"mapbox://styles/mapbox/streets-v12"}
      mapboxAccessToken={process.env.NEXT_PUBLIC_ACCESS_TOKEN}
      onMove={(nextViewport) => setViewPort((prevValue) => {
        return {
            ...prevValue,
            longitude: nextViewport.viewState.longitude,
            latitude: nextViewport.viewState.latitude,
        }
      })}
    >
        {searchResultData.map(listing => (
            <div key={listing.long}>
                <Marker longitude={listing.long} latitude={listing.lat}>
                    <div onClick={() => setSelectedLocation(listing)} className="animate-bounce">
                        <Image src={img} alt="mapMarker-img" width={24} height={24} />
                    </div>
                </Marker>
                {selectedLocation?.long === listing.long ? <Popup closeOnClick={false} onClose={() => setSelectedLocation(null)} longitude={listing.long} latitude={listing.lat}>
                    {listing.title}
                </Popup> : null}
            </div>
        ))}
    </MapGL>
  );
};

export default Map;
