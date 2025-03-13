"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import type { Destination } from "@/types/destination"

type DestinationPickerProps = {
  destinations: Destination[]
  selected: string[]
  onChange: (selected: string[]) => void
}

export default function DestinationPicker({ destinations, selected, onChange }: DestinationPickerProps) {
  const toggleDestination = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id))
    } else {
      onChange([...selected, id])
    }
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {destinations.map((destination) => (
        <div
          key={destination.id}
          className={`
            relative cursor-pointer overflow-hidden rounded-lg border transition-all
            ${
              selected.includes(destination.id)
                ? "border-green-600 ring-1 ring-green-600"
                : "border-gray-200 hover:border-green-200"
            }
          `}
          onClick={() => toggleDestination(destination.id)}
        >
          <div className="relative h-40 w-full">
            <Image
              src={destination.imageUrl || "/placeholder.svg"}
              alt={destination.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <h3 className="font-semibold">{destination.name}</h3>
            <p className="text-sm text-gray-500">{destination.location}</p>
          </div>
          {selected.includes(destination.id) && (
            <div className="absolute right-2 top-2 rounded-full bg-green-600 text-white">
              <CheckCircle className="h-6 w-6" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

