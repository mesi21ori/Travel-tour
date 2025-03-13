"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { destinations } from "@/data/destinations"

// Dynamically import the MapView component with SSR disabled
const MapView = dynamic(() => import("@/components/map-view"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[calc(100vh-64px)] items-center justify-center">
      <p>Loading map...</p>
    </div>
  ),
})

export default function MapPage() {
  return (
    <div className="h-[calc(100vh-64px)]">
      <Suspense fallback={<div className="flex h-full items-center justify-center">Loading map...</div>}>
        <MapView destinations={destinations} />
      </Suspense>
    </div>
  )
}

