import { NextResponse } from "next/server"
import { destinations } from "@/data/destinations"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const region = searchParams.get("region")
  const category = searchParams.get("category")
  const search = searchParams.get("search")

  let filteredDestinations = [...destinations]

  if (region) {
    filteredDestinations = filteredDestinations.filter((dest) => dest.region === region)
  }

  if (category) {
    filteredDestinations = filteredDestinations.filter((dest) => dest.category.includes(category))
  }

  if (search) {
    const searchLower = search.toLowerCase()
    filteredDestinations = filteredDestinations.filter(
      (dest) =>
        dest.name.toLowerCase().includes(searchLower) ||
        dest.location.toLowerCase().includes(searchLower) ||
        dest.description.toLowerCase().includes(searchLower),
    )
  }

  return NextResponse.json(filteredDestinations)
}

