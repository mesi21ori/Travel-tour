import { destinations } from "@/data/destinations"
import MapClientWrapper from "@/components/map-client-wrapper"

export default function MapPage() {
  return (
    <div className="h-[calc(100vh-64px)] mt-12">
      <MapClientWrapper destinations={destinations} />
    </div>
  )
}

