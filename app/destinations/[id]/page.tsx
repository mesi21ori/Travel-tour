import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MapPin, Calendar, Star, ArrowLeft } from "lucide-react"
import { destinations } from "@/data/destinations"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

// Dynamically import the DestinationMap component with SSR disabled
const DestinationMap = dynamic(() => import("@/components/destination-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] items-center justify-center rounded-xl overflow-hidden bg-gray-100">
      <p>Loading map...</p>
    </div>
  ),
})

export default function DestinationPage({ params }: { params: { id: string } }) {
  const destination = destinations.find((d) => d.id === params.id)

  if (!destination) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8 mt-12">
      <Link href="/destinations" className="mb-6 inline-flex items-center text-green-600 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to destinations
      </Link>

      <div className="mb-8 grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={destination.imageUrl || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <div className="mb-4 flex items-center">
            <div className="flex items-center text-amber-500">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < destination.rating ? "fill-current" : "opacity-30"}`} />
                ))}
              <span className="ml-2 text-gray-600">({destination.reviewCount} reviews)</span>
            </div>
          </div>

          <h1 className="mb-2 text-3xl font-bold">{destination.name}</h1>

          <div className="mb-4 flex items-center text-gray-500">
            <MapPin className="mr-1 h-5 w-5" />
            <span>{destination.location}</span>
          </div>

          <p className="mb-6 text-lg">{destination.description}</p>

          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4">
              <h3 className="mb-2 font-semibold">Best Time to Visit</h3>
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-green-600" />
                <span>{destination.bestTimeToVisit}</span>
              </div>
            </div>
            <div className="rounded-lg bg-green-50 p-4">
              <h3 className="mb-2 font-semibold">Duration</h3>
              <p>Recommended: {destination.recommendedDuration}</p>
            </div>
          </div>

          <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
            Book This Tour
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">About {destination.name}</h2>
        <p className="mb-4">{destination.longDescription}</p>
        <p>{destination.activities}</p>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Location</h2>
        <div className="h-[400px] rounded-xl overflow-hidden">
          <DestinationMap destination={destination} />
        </div>
      </div>
    </main>
  )
}

