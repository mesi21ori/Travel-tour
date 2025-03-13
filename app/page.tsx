"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { destinations } from "@/data/destinations"
import DestinationCard from "@/components/destination-card"
import FeaturedDestination from "@/components/featured-destination"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const featuredDestination = destinations[0]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/destinations?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <main className="container mx-auto px-4 py-8 mt-12">
      <section className="mb-12">
        <div className="rounded-xl bg-gradient-to-r from-green-600 to-green-500 p-8 text-white">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Discover the Beauty of Ethiopia</h1>
            <p className="mb-6 text-lg opacity-90">
              Explore ancient history, breathtaking landscapes, and rich cultural heritage in the land of origins.
            </p>
            <form onSubmit={handleSearch} className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  className="h-12 bg-white pl-10 text-gray-900"
                  placeholder="Where in Ethiopia do you want to go?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" className="h-12 px-6 bg-green-700 hover:bg-green-800" size="lg">
                Explore Now
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Destination</h2>
          <Link href="/map" className="text-green-600 hover:underline">
            View all on map
          </Link>
        </div>
        <FeaturedDestination destination={featuredDestination} />
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Popular Destinations</h2>
          <Link href="/destinations" className="text-green-600 hover:underline">
            View all destinations
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.slice(1, 7).map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>
    </main>
  )
}

