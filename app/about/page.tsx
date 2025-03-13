import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Clock, Thermometer, Globe, Info, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-12">
      <section className="mb-12">
        <div className="rounded-xl bg-gradient-to-r from-green-600 to-green-500 p-8 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">About Ethiopia</h1>
            <p className="mb-6 text-lg opacity-90">
              Discover the land of origins, home to ancient civilizations, diverse landscapes, and rich cultural
              heritage.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">The Land of Origins</h2>
            <p className="mb-4 text-lg">
              Ethiopia, officially the Federal Democratic Republic of Ethiopia, is a landlocked country in the Horn of
              Africa with a rich history dating back thousands of years.
            </p>
            <p className="mb-4">
              As the only African country that was never colonized, Ethiopia has preserved its unique cultural identity
              and is home to some of the world's oldest civilizations.
            </p>
            <p>
              From the ancient rock-hewn churches of Lalibela to the stunning landscapes of the Simien Mountains,
              Ethiopia offers travelers an authentic and diverse experience unlike any other destination in Africa.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="https://media.istockphoto.com/id/1404248372/photo/sunrise-over-tea-plantation-in-central-ethiopia-africa.jpg?s=612x612&w=0&k=20&c=cEeoKYw5sVPVeSmi3rNw3lFZov1GAHf2nUHKh95h0KM="
              alt="Ethiopian landscape"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Key Facts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex items-start p-6">
              <MapPin className="mr-4 h-6 w-6 text-green-600" />
              <div>
                <h3 className="mb-2 font-semibold">Geography</h3>
                <p className="text-sm text-gray-600">
                  Located in the Horn of Africa, Ethiopia is bordered by Eritrea, Djibouti, Somalia, Kenya, South Sudan,
                  and Sudan. It features diverse landscapes from highlands to deserts.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start p-6">
              <Globe className="mr-4 h-6 w-6 text-green-600" />
              <div>
                <h3 className="mb-2 font-semibold">Capital & Language</h3>
                <p className="text-sm text-gray-600">
                  Addis Ababa is the capital and largest city. Amharic is the official language, but over 80 different
                  languages are spoken throughout the country.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start p-6">
              <Calendar className="mr-4 h-6 w-6 text-green-600" />
              <div>
                <h3 className="mb-2 font-semibold">Calendar</h3>
                <p className="text-sm text-gray-600">
                  Ethiopia follows its own unique calendar system that is approximately 7-8 years behind the Gregorian
                  calendar and has 13 months in a year.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start p-6">
              <Clock className="mr-4 h-6 w-6 text-green-600" />
              <div>
                <h3 className="mb-2 font-semibold">Time</h3>
                <p className="text-sm text-gray-600">
                  Ethiopia uses a unique time system where the day starts at dawn (6:00 AM is considered 12:00 in
                  Ethiopian time), aligning with daylight hours.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start p-6">
              <Thermometer className="mr-4 h-6 w-6 text-green-600" />
              <div>
                <h3 className="mb-2 font-semibold">Climate</h3>
                <p className="text-sm text-gray-600">
                  Ethiopia has diverse climate zones due to its varying elevations. The highlands are temperate, while
                  lowland areas can be hot and arid.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start p-6">
              <Info className="mr-4 h-6 w-6 text-green-600" />
              <div>
                <h3 className="mb-2 font-semibold">UNESCO Sites</h3>
                <p className="text-sm text-gray-600">
                  Ethiopia boasts 9 UNESCO World Heritage Sites, including the rock-hewn churches of Lalibela, the
                  fortified historic town of Harar, and the Lower Valley of the Omo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <div className="rounded-xl bg-green-50 p-8">
          <h2 className="mb-6 text-2xl font-bold">Why Visit Ethiopia?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>
                  <strong>Unique History</strong> - Explore ancient civilizations and archaeological sites
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>
                  <strong>Natural Beauty</strong> - From the Danakil Depression to the Simien Mountains
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>
                  <strong>Cultural Diversity</strong> - Experience the traditions of over 80 ethnic groups
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>
                  <strong>Authentic Experiences</strong> - Off-the-beaten-path adventures away from mass tourism
                </span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>
                  <strong>Delicious Cuisine</strong> - Taste unique flavors and participate in coffee ceremonies
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>
                  <strong>Wildlife</strong> - Spot endemic species found nowhere else on Earth
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>
                  <strong>Religious Heritage</strong> - Visit ancient churches, monasteries, and mosques
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>
                  <strong>Warm Hospitality</strong> - Experience the legendary Ethiopian welcome
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-6 flex justify-center">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/plan-trip">Plan Your Ethiopian Adventure</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Contact Information</h2>
        <div className="mx-auto max-w-2xl rounded-lg border bg-white p-8 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold">Ethiopia Tourism Commission</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="mr-3 h-5 w-5 text-green-600" />
              <p>Addis Ababa, Ethiopia</p>
            </div>
            <div className="flex items-start">
              <Phone className="mr-3 h-5 w-5 text-green-600" />
              <p>+251 11 123 4567</p>
            </div>
            <div className="flex items-start">
              <Mail className="mr-3 h-5 w-5 text-green-600" />
              <p>info@ethiopiatourism.com</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-600">
              For more information about traveling to Ethiopia, visa requirements, and travel advisories, please visit
              the official Ethiopia Tourism website or contact your nearest Ethiopian embassy or consulate.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

