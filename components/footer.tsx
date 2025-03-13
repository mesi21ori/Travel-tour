import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-600 px-4 py-12 text-white">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-xl font-bold">Ethiopia Tourism</h2>
            <p className="mb-4 text-green-100">
              Discover the beauty, history, and culture of Ethiopia - the land of origins.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-green-200 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-green-200 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-green-200 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-green-200 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-green-200 hover:text-white">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-green-200 hover:text-white">
                  Map
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  Cultural Tours
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  About Ethiopia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-green-300" />
                <span className="text-green-200">Ethiopia Tourism Commission, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-green-300" />
                <span className="text-green-200">+251 11 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-green-300" />
                <span className="text-green-200">info@ethiopiatourism.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-green-200">
              Subscribe to our newsletter for the latest travel updates and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border-green-700 bg-green-800 px-4 py-2 text-white placeholder:text-green-300"
              />
              <button type="submit" className="rounded-r-md bg-green-900 px-4 py-2 font-medium hover:bg-green-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-green-800 pt-6 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} Ethiopia Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

