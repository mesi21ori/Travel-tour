"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import type { Destination } from "@/types/destination"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MapViewProps {
  destinations: Destination[]
}

export default function MapView({ destinations }: MapViewProps) {
  const centerLat = destinations.reduce((sum, d) => sum + d.latitude, 0) / destinations.length
  const centerLng = destinations.reduce((sum, d) => sum + d.longitude, 0) / destinations.length

  return (
    <MapContainer
      center={[centerLat, centerLng] as [number, number]}
      zoom={3}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {destinations.map((destination) => (
        <Marker key={destination.id} position={[destination.latitude, destination.longitude]}>
          <Popup>
            <div className="min-w-[200px]">
              <h3 className="mb-1 font-semibold">{destination.name}</h3>
              <p className="mb-2 text-sm">{destination.location}</p>
              <p className="mb-3 text-xs">{destination.description.substring(0, 100)}...</p>
              <Button asChild size="sm" className="w-full">
                <Link href={`/destinations/${destination.id}`}>View Details</Link>
              </Button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

