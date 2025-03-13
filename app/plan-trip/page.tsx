"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Calendar, DollarSign, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { destinations } from "@/data/destinations"
import TripSummary from "@/components/trip-summary"
import InterestSelector from "@/components/interest-selector"
import DestinationPicker from "@/components/destination-picker"
import DateRangePicker from "@/components/date-range-picker"

export default function PlanTripPage() {
  const [step, setStep] = useState(1)
  const [tripData, setTripData] = useState({
    travelers: 2,
    duration: 7,
    budget: 2,
    interests: [] as string[],
    selectedDestinations: [] as string[],
    startDate: null as Date | null,
    endDate: null as Date | null,
    accommodation: "",
    activities: [] as string[],
    contactInfo: {
      name: "",
      email: "",
      phone: "",
    },
  })

  const handleNext = () => {
    window.scrollTo(0, 0)
    setStep((prev) => prev + 1)
  }

  const handleBack = () => {
    window.scrollTo(0, 0)
    setStep((prev) => prev - 1)
  }

  const updateTripData = (data: Partial<typeof tripData>) => {
    setTripData((prev) => ({ ...prev, ...data }))
  }

  const totalSteps = 5
  const progress = (step / totalSteps) * 100

  const budgetOptions = ["Budget", "Standard", "Comfort", "Luxury", "Ultra Luxury"]

  return (
    <main className="container mx-auto px-4 py-8 mt-12">
      <h1 className="mb-2 text-3xl font-bold">Plan Your Ethiopian Adventure</h1>
      <p className="mb-8 text-gray-600">Create your perfect itinerary with our step-by-step trip planner</p>

     
      <div className="mb-8">
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-green-600 transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="mt-2 flex justify-between">
          <span className="text-sm font-medium">
            Step {step} of {totalSteps}
          </span>
          <span className="text-sm font-medium">{Math.round(progress)}% Complete</span>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          {step === 1 && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="mb-6 text-2xl font-semibold">Tell us about your trip</h2>

                <div className="mb-6">
                  <Label className="mb-2 block">How many travelers?</Label>
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-green-600" />
                    <div className="flex w-full max-w-xs items-center">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateTripData({ travelers: Math.max(1, tripData.travelers - 1) })}
                        className="h-8 w-8 rounded-full p-0"
                      >
                        -
                      </Button>
                      <span className="mx-4 min-w-[2rem] text-center font-semibold">{tripData.travelers}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateTripData({ travelers: tripData.travelers + 1 })}
                        className="h-8 w-8 rounded-full p-0"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <Label className="mb-2 block">How many days?</Label>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-green-600" />
                    <div className="flex w-full max-w-xs items-center">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateTripData({ duration: Math.max(3, tripData.duration - 1) })}
                        className="h-8 w-8 rounded-full p-0"
                      >
                        -
                      </Button>
                      <span className="mx-4 min-w-[2rem] text-center font-semibold">{tripData.duration}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateTripData({ duration: tripData.duration + 1 })}
                        className="h-8 w-8 rounded-full p-0"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <Label className="mb-2 block">What's your budget level?</Label>
                  <div className="flex items-start">
                    <DollarSign className="mr-2 h-5 w-5 text-green-600" />
                    <div className="w-full">
                      <Slider
                        value={[tripData.budget]}
                        min={0}
                        max={4}
                        step={1}
                        onValueChange={(value) => updateTripData({ budget: value[0] })}
                        className="mb-2"
                      />
                      <div className="flex justify-between">
                        {budgetOptions.map((option, index) => (
                          <div
                            key={option}
                            className={`text-xs ${index === tripData.budget ? "font-semibold text-green-600" : "text-gray-500"}`}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <Label className="mb-4 block">What are you interested in?</Label>
                  <InterestSelector
                    selected={tripData.interests}
                    onChange={(interests) => updateTripData({ interests })}
                  />
                </div>

                <div className="mt-8 flex justify-end">
                  <Button onClick={handleNext} className="bg-green-600 hover:bg-green-700">
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="mb-6 text-2xl font-semibold">Select your destinations</h2>
                <p className="mb-4 text-gray-600">
                  Based on your preferences, we recommend these destinations. Select the ones you want to visit.
                </p>

                <DestinationPicker
                  destinations={destinations}
                  selected={tripData.selectedDestinations}
                  onChange={(selectedDestinations) => updateTripData({ selectedDestinations })}
                />

                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={handleNext} className="bg-green-600 hover:bg-green-700">
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          {step === 3 && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="mb-6 text-2xl font-semibold">When are you traveling?</h2>

                <div className="mb-6">
                  <Label className="mb-2 block">Select your travel dates</Label>
                  <DateRangePicker
                    startDate={tripData.startDate}
                    endDate={tripData.endDate}
                    onChange={(start, end) => updateTripData({ startDate: start, endDate: end })}
                  />
                </div>

                <Separator className="my-6" />

                <h3 className="mb-4 text-xl font-semibold">Accommodation Preference</h3>
                <RadioGroup
                  value={tripData.accommodation}
                  onValueChange={(value) => updateTripData({ accommodation: value })}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hotel" id="hotel" />
                    <Label htmlFor="hotel">Hotel</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="lodge" id="lodge" />
                    <Label htmlFor="lodge">Lodge</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="guesthouse" id="guesthouse" />
                    <Label htmlFor="guesthouse">Guesthouse</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="camping" id="camping" />
                    <Label htmlFor="camping">Camping (for trekking)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mixed" id="mixed" />
                    <Label htmlFor="mixed">Mixed (different types)</Label>
                  </div>
                </RadioGroup>

                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={handleNext} className="bg-green-600 hover:bg-green-700">
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="mb-6 text-2xl font-semibold">Choose your activities</h2>
                <p className="mb-4 text-gray-600">Select the activities and experiences you're interested in.</p>

                <div className="space-y-3">
                  {[
                    { id: "historical", label: "Historical sites & museums" },
                    { id: "cultural", label: "Cultural experiences (coffee ceremonies, local music)" },
                    { id: "trekking", label: "Trekking & hiking" },
                    { id: "wildlife", label: "Wildlife watching" },
                    { id: "photography", label: "Photography tours" },
                    { id: "food", label: "Food & culinary experiences" },
                    { id: "religious", label: "Religious sites & ceremonies" },
                    { id: "markets", label: "Markets & shopping" },
                    { id: "adventure", label: "Adventure activities" },
                    { id: "community", label: "Community-based tourism" },
                  ].map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-2">
                      <Checkbox
                        id={activity.id}
                        checked={tripData.activities.includes(activity.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateTripData({ activities: [...tripData.activities, activity.id] })
                          } else {
                            updateTripData({
                              activities: tripData.activities.filter((id) => id !== activity.id),
                            })
                          }
                        }}
                      />
                      <Label htmlFor={activity.id} className="text-sm">
                        {activity.label}
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={handleNext} className="bg-green-600 hover:bg-green-700">
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          {step === 5 && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="mb-6 text-2xl font-semibold">Almost there!</h2>
                <p className="mb-4 text-gray-600">
                  Please provide your contact information so we can send you your custom itinerary.
                </p>

                <div className="mb-4">
                  <Label htmlFor="name" className="mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={tripData.contactInfo.name}
                    onChange={(e) =>
                      updateTripData({
                        contactInfo: { ...tripData.contactInfo, name: e.target.value },
                      })
                    }
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="email" className="mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={tripData.contactInfo.email}
                    onChange={(e) =>
                      updateTripData({
                        contactInfo: { ...tripData.contactInfo, email: e.target.value },
                      })
                    }
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="phone" className="mb-2 block">
                    Phone Number (optional)
                  </Label>
                  <Input
                    id="phone"
                    value={tripData.contactInfo.phone}
                    onChange={(e) =>
                      updateTripData({
                        contactInfo: { ...tripData.contactInfo, phone: e.target.value },
                      })
                    }
                    placeholder="+251 XXX XXX XXX"
                  />
                </div>

                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700">Submit Trip Request</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        <div>
          <TripSummary tripData={tripData} />
        </div>
      </div>
    </main>
  )
}

