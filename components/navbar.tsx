"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full border-b bg-white z-50"> 
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <User className="mr-2 h-6 w-6 text-green-600" />
          <span className="text-xl font-bold">Ethiopia Tourism</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-green-600">
            Home
          </Link>
          <Link href="/destinations" className="text-sm font-medium hover:text-green-600">
            Destinations
          </Link>
          <Link href="/map" className="text-sm font-medium hover:text-green-600">
            Map
          </Link>
          <Link href="/culture" className="text-sm font-medium hover:text-green-600">
            Culture
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-green-600">
            About
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/plan-trip">Plan Your Trip</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden bg-white border-t"> {/* Added border-top for mobile menu */}
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium hover:text-green-600" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/destinations"
              className="text-sm font-medium hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link href="/map" className="text-sm font-medium hover:text-green-600" onClick={() => setIsMenuOpen(false)}>
              Map
            </Link>
            <Link
              href="/culture"
              className="text-sm font-medium hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Culture
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700">
              <Link href="/plan-trip">Plan Your Trip</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}