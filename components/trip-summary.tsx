import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Users, DollarSign, Clipboard } from "lucide-react"
import { destinations } from "@/data/destinations"
import { formatDate } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

type TripSummaryProps = {
  tripData: {
    travelers: number
    duration: number
    budget: number
    interests: string[]
    selectedDestinations: string[]
    startDate: Date | null
    endDate: Date | null
    accommodation: string
    activities: string[]
  }
}

export default function TripSummary({ tripData }: TripSummaryProps) {
  const budgetLabels = ["Budget", "Standard", "Comfort", "Luxury", "Ultra Luxury"]
  const selectedDestinationsData = destinations.filter((d) => tripData.selectedDestinations.includes(d.id))

  const interestLabels: Record<string, string> = {
    history: "Historical Sites",
    culture: "Cultural Experiences",
    nature: "Natural Landscapes",
    adventure: "Adventure Activities",
    wildlife: "Wildlife & Nature",
    food: "Culinary Experiences",
    photography: "Photography",
    religion: "Religious Sites",
  }

  const activityLabels: Record<string, string> = {
    historical: "Historical sites & museums",
    cultural: "Cultural experiences",
    trekking: "Trekking & hiking",
    wildlife: "Wildlife watching",
    photography: "Photography tours",
    food: "Food & culinary experiences",
    religious: "Religious sites & ceremonies",
    markets: "Markets & shopping",
    adventure: "Adventure activities",
    community: "Community-based tourism",
  }

  const accommodationLabels: Record<string, string> = {
    hotel: "Hotel",
    lodge: "Lodge",
    guesthouse: "Guesthouse",
    camping: "Camping (for trekking)",
    mixed: "Mixed (different types)",
  }

  return (
    <Card className="sticky top-6">
      <CardHeader className="pb-3">
        <CardTitle>Trip Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start">
            <Users className="mr-2 h-5 w-5 text-green-600" />
            <div>
              <div className="font-medium">Travelers</div>
              <div className="text-sm text-gray-500">
                {tripData.travelers} {tripData.travelers === 1 ? "person" : "people"}
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <Calendar className="mr-2 h-5 w-5 text-green-600" />
            <div>
              <div className="font-medium">Duration</div>
              <div className="text-sm text-gray-500">{tripData.duration} days</div>
              {tripData.startDate && tripData.endDate && (
                <div className="text-sm text-gray-500">
                  {formatDate(tripData.startDate)} - {formatDate(tripData.endDate)}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start">
            <DollarSign className="mr-2 h-5 w-5 text-green-600" />
            <div>
              <div className="font-medium">Budget Level</div>
              <div className="text-sm text-gray-500">{budgetLabels[tripData.budget]}</div>
            </div>
          </div>

          {tripData.interests.length > 0 && (
            <div className="flex items-start">
              <Clipboard className="mr-2 h-5 w-5 text-green-600" />
              <div>
                <div className="font-medium">Interests</div>
                <div className="flex flex-wrap gap-1 text-sm">
                  {tripData.interests.map((interest) => (
                    <span key={interest} className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                      {interestLabels[interest] || interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedDestinationsData.length > 0 && (
            <div className="flex items-start">
              <MapPin className="mr-2 h-5 w-5 text-green-600" />
              <div>
                <div className="font-medium">Destinations</div>
                <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-gray-500">
                  {selectedDestinationsData.map((destination) => (
                    <li key={destination.id}>{destination.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {tripData.accommodation && (
            <div>
              <Separator className="my-2" />
              <div className="mt-2 text-sm">
                <span className="font-medium">Accommodation:</span>{" "}
                {accommodationLabels[tripData.accommodation] || tripData.accommodation}
              </div>
            </div>
          )}

          {tripData.activities.length > 0 && (
            <div>
              <Separator className="my-2" />
              <div className="mt-2 font-medium text-sm">Activities:</div>
              <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-gray-500">
                {tripData.activities.map((activity) => (
                  <li key={activity}>{activityLabels[activity] || activity}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

