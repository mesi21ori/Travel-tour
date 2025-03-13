import { destinations } from "@/data/destinations"
import MapClientWrapper from "@/components/map-client-wrapper"

export default function MapPage() {
  return (
    <div className="h-[calc(100vh-64px)]">
      <MapClientWrapper destinations={destinations} />
    </div>
  )
}

