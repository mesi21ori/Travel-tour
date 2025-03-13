import Image from "next/image"
import Link from "next/link"
import { Coffee, Music, Utensils, Users, Calendar, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CulturePage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-12">
      <section className="mb-12">
        <div className="rounded-xl bg-gradient-to-r from-green-600 to-green-500 p-8 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Ethiopian Culture & Heritage</h1>
            <p className="mb-6 text-lg opacity-90">
              Discover the rich traditions, diverse ethnic groups, and ancient customs that make Ethiopia a cultural
              treasure.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">The Cradle of Humanity</h2>
            <p className="mb-4 text-lg">
              Ethiopia is often called the "Cradle of Humanity" due to the discovery of some of the oldest human
              fossils, including "Lucy" (Dinkinesh), dating back 3.2 million years.
            </p>
            <p className="mb-4">
              With a history spanning over 3,000 years, Ethiopia is home to ancient civilizations, remarkable
              architecture, and a cultural heritage that has remained largely intact despite external influences.
            </p>
            <p>
              Ethiopia is the only African country that was never colonized, allowing it to preserve its unique cultural
              identity and traditions that have been passed down through generations.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="https://media.istockphoto.com/id/1944361256/photo/national-plates-in-axum-ethiopia.jpg?s=612x612&w=0&k=20&c=4AxAf2e8gNcZHq111YtI24cuSECUk0M5bEFSLicWB3c="
              alt="Ethiopian cultural heritage"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Cultural Experiences</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="relative h-48">
              <Image
                src="https://media.istockphoto.com/id/477217666/photo/ethiopian-traditional-coffee-ceremony.jpg?s=612x612&w=0&k=20&c=783c0xfuyhrybfTpIKYWNyNVJ1MuYmyJi3OqM7HW5zk="
                alt="Ethiopian Coffee Ceremony"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center">
                <Coffee className="mr-2 h-5 w-5 text-green-600" />
                <h3 className="text-xl font-semibold">Coffee Ceremony</h3>
              </div>
              <p className="mb-4">
                Experience the traditional Ethiopian coffee ceremony, a ritual of hospitality where coffee beans are
                roasted, ground, and brewed in front of guests.
              </p>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href="/destinations">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <div className="relative h-48">
              <Image
                src="https://media.istockphoto.com/id/1212456813/photo/circle-of-dassanech-women-performing-a-tribal-dance.jpg?s=612x612&w=0&k=20&c=aREY-a-glNLqNeVan1YqcUxj6fb99DuaNYGrJqgwhdg="
                alt="Ethiopian Music and Dance"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center">
                <Music className="mr-2 h-5 w-5 text-green-600" />
                <h3 className="text-xl font-semibold">Music & Dance</h3>
              </div>
              <p className="mb-4">
                Discover the diverse musical traditions of Ethiopia, from the energetic shoulder-dancing eskista to the
                spiritual church music of the Ethiopian Orthodox tradition.
              </p>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href="/destinations">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <div className="relative h-48">
              <Image
                src="https://media.istockphoto.com/id/908729848/photo/ethiopian-traditional-hand-held-eating-injera.jpg?s=612x612&w=0&k=20&c=lQj4ApZu3AzQtoD0bV1bX04EEs5Pg5MnkmIo3n1wUs8="
                alt="Ethiopian Cuisine"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center">
                <Utensils className="mr-2 h-5 w-5 text-green-600" />
                <h3 className="text-xl font-semibold">Cuisine</h3>
              </div>
              <p className="mb-4">
                Savor the unique flavors of Ethiopian cuisine, featuring injera (sourdough flatbread) with various wats
                (stews) and the distinctive berbere spice blend.
              </p>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href="/destinations">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Cultural Heritage</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Ethnic Diversity</h3>
            <p>
              Ethiopia is home to over 80 different ethnic groups, each with their own languages, customs, and
              traditions, making it one of Africa's most diverse countries.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Unique Calendar</h3>
            <p>
              Ethiopia follows its own calendar system that is approximately seven to eight years behind the Gregorian
              calendar, with 13 months in a year.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Ancient Languages</h3>
            <p>
              Ge'ez, an ancient Semitic language, remains in use in Ethiopian Orthodox Church liturgy, while Amharic is
              one of the few African languages with its own unique script.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="rounded-xl bg-green-50 p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Cultural Festivals</h2>
              <p className="mb-6">
                Experience Ethiopia's vibrant cultural festivals throughout the year, from the colorful Timkat
                (Epiphany) celebrations to Meskel (Finding of the True Cross).
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span>
                    <strong>Timkat (January)</strong> - Celebrating the baptism of Jesus in the Jordan River
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span>
                    <strong>Meskel (September)</strong> - Commemorating the discovery of the True Cross
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span>
                    <strong>Genna (Ethiopian Christmas)</strong> - Celebrated on January 7th
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span>
                    <strong>Enkutatash (Ethiopian New Year)</strong> - Celebrated in September
                  </span>
                </li>
              </ul>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/plan-trip">Plan Your Cultural Tour</Link>
              </Button>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src="https://media.istockphoto.com/id/185957016/photo/meskel-fire-in-addis-ababa.jpg?s=612x612&w=0&k=20&c=9KIb-NYDwjCXAvwLjf5OjMv2J-7O80gh-cB7K7Bv0-Y="
                alt="Ethiopian festival"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

