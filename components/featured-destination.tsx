import Link from "next/link"
import Image from "next/image"
import { MapPin, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Destination } from "@/types/destination"

interface FeaturedDestinationProps {
  destination: Destination
}

export default function FeaturedDestination({ destination }: FeaturedDestinationProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-md">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="relative aspect-square md:aspect-auto">
          <Image
            src={destination.imageUrl || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-6">
          <div className="mb-2 flex items-center">
            <div className="flex items-center text-amber-500">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < destination.rating ? "fill-current" : "opacity-30"}`} />
                ))}
              <span className="ml-2 text-gray-600">({destination.reviewCount} reviews)</span>
            </div>
          </div>

          <h2 className="mb-2 text-2xl font-bold">{destination.name}</h2>

          <div className="mb-2 flex items-center text-gray-500">
            <MapPin className="mr-1 h-5 w-5" />
            <span>{destination.location}</span>
          </div>

          <div className="mb-4 flex items-center text-gray-500">
            <Clock className="mr-1 h-5 w-5" />
            <span>Best time: {destination.bestTimeToVisit}</span>
          </div>

          <p className="mb-6 text-gray-600">{destination.description}</p>

          <div className="mt-auto flex space-x-3">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href={`/destinations/${destination.id}`}>View Details</Link>
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

