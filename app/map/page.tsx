import MapView from "@/components/map-view"
import { destinations } from "@/data/destinations"

export default function MapPage() {
  return (
    <div className="h-[calc(100vh-64px)] mt-12">
      <MapView destinations={destinations} />
    </div>
  )
}

