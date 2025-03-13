import { NextResponse } from "next/server"
import { destinations } from "@/data/destinations"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const destination = destinations.find((dest) => dest.id === params.id)

  if (!destination) {
    return new NextResponse(JSON.stringify({ error: "Destination not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    })
  }

  return NextResponse.json(destination)
}

