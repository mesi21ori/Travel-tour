"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import DestinationCard from "@/components/destination-card"
import { destinations } from "@/data/destinations"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DestinationsPage() {
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get("search") || ""

  const [searchQuery, setSearchQuery] = useState(initialSearch)
  const [region, setRegion] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [filteredDestinations, setFilteredDestinations] = useState(destinations)

  useEffect(() => {
    let results = [...destinations]


    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (dest) =>
          dest.name.toLowerCase().includes(query) ||
          dest.location.toLowerCase().includes(query) ||
          dest.description.toLowerCase().includes(query),
      )
    }

  
    if (region) {
      results = results.filter((dest) => dest.region === region)
    }

   
    if (category) {
      results = results.filter((dest) => dest.category.includes(category))
    }

    setFilteredDestinations(results)
  }, [searchQuery, region, category])

  return (
    <main className="container mx-auto px-4 py-8 mt-12">
      <h1 className="mb-6 text-3xl font-bold">Explore Ethiopia</h1>

      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            className="pl-10"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="northern">Northern Ethiopia</SelectItem>
            <SelectItem value="southern">Southern Ethiopia</SelectItem>
            <SelectItem value="eastern">Eastern Ethiopia</SelectItem>
            <SelectItem value="western">Western Ethiopia</SelectItem>
            <SelectItem value="central">Central Ethiopia</SelectItem>
          </SelectContent>
        </Select>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="historic">Historic</SelectItem>
            <SelectItem value="natural">Natural</SelectItem>
            <SelectItem value="cultural">Cultural</SelectItem>
            <SelectItem value="adventure">Adventure</SelectItem>
            <SelectItem value="religious">Religious</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredDestinations.length === 0 ? (
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold">No destinations found</h3>
          <p className="mt-2 text-gray-600">Try adjusting your search criteria</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      )}
    </main>
  )
}

