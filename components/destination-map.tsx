"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import type { Destination } from "@/types/destination"

interface DestinationMapProps {
  destination: Destination
}

export default function DestinationMap({ destination }: DestinationMapProps) {
  return (
    <MapContainer
      center={[destination.latitude, destination.longitude]}
      zoom={10}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[destination.latitude, destination.longitude]}>
        <Popup>
          <div>
            <h3 className="font-semibold">{destination.name}</h3>
            <p className="text-sm">{destination.location}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

