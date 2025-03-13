"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import type { Destination } from "@/types/destination"

const MapView = dynamic(() => import("@/components/map-view"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[calc(100vh-64px)] items-center justify-center">
      <p>Loading map...</p>
    </div>
  ),
})

interface MapClientWrapperProps {
  destinations: Destination[]
}

export default function MapClientWrapper({ destinations }: MapClientWrapperProps) {
  return (
    <Suspense fallback={<div className="flex h-full items-center justify-center">Loading map...</div>}>
      <MapView destinations={destinations} />
    </Suspense>
  )
}

