import Link from "next/link"
import Image from "next/image"
import { MapPin, Star } from "lucide-react"
import type { Destination } from "@/types/destination"

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${destination.id}`}>
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
        <div className="relative aspect-[4/3]">
          <Image
            src={destination.imageUrl || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-1 font-semibold">{destination.name}</h3>
          <div className="mb-2 flex items-center text-gray-500">
            <MapPin className="mr-1 h-4 w-4" />
            <span className="text-sm">{destination.location}</span>
          </div>
          <div className="mb-2 flex items-center">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < destination.rating ? "fill-current text-amber-400" : "text-gray-300"}`}
                />
              ))}
            <span className="ml-1 text-sm text-gray-600">({destination.reviewCount})</span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{destination.description}</p>
        </div>
      </div>
    </Link>
  )
}

