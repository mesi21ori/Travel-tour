"use client"

import dynamic from "next/dynamic"
import type { Destination } from "@/types/destination"

const DestinationMap = dynamic(() => import("@/components/destination-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] items-center justify-center rounded-xl overflow-hidden bg-gray-100">
      <p>Loading map...</p>
    </div>
  ),
})

interface DestinationMapClientProps {
  destination: Destination
}

export default function DestinationMapClient({ destination }: DestinationMapClientProps) {
  return <DestinationMap destination={destination} />
}

