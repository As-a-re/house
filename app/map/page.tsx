"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Home, Search, Filter, List } from "lucide-react"
import Link from "next/link"

interface MapListing {
  id: string
  title: string
  price: number
  location: string
  coordinates: { lat: number; lng: number }
  type: string
  bedrooms: number
  bathrooms: number
}

export default function MapPage() {
  const [listings, setListings] = useState<MapListing[]>([])
  const [selectedListing, setSelectedListing] = useState<MapListing | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Mock data for map listings
    setListings([
      {
        id: "1",
        title: "Modern 2-Bedroom Apartment",
        price: 1200,
        location: "East Legon, Accra",
        coordinates: { lat: 5.6037, lng: -0.187 },
        type: "apartment",
        bedrooms: 2,
        bathrooms: 2,
      },
      {
        id: "2",
        title: "Affordable 3-Bedroom House",
        price: 800,
        location: "Tema, Greater Accra",
        coordinates: { lat: 5.6698, lng: -0.0166 },
        type: "house",
        bedrooms: 3,
        bathrooms: 2,
      },
      {
        id: "3",
        title: "Shared Accommodation",
        price: 300,
        location: "Kumasi, Ashanti Region",
        coordinates: { lat: 6.6885, lng: -1.6244 },
        type: "shared",
        bedrooms: 1,
        bathrooms: 1,
      },
      {
        id: "4",
        title: "Housing Cooperative",
        price: 600,
        location: "Takoradi, Western Region",
        coordinates: { lat: 4.8845, lng: -1.7554 },
        type: "cooperative",
        bedrooms: 2,
        bathrooms: 1,
      },
    ])
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">HomeFind Ghana</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/listings">
                <Button variant="outline">
                  <List className="h-4 w-4 mr-2" />
                  List View
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="bg-green-600 hover:bg-green-700">Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="w-1/3 bg-white border-r overflow-y-auto">
          <div className="p-4 border-b">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">{listings.length} Properties Found</h2>
            <div className="space-y-4">
              {listings.map((listing) => (
                <Card
                  key={listing.id}
                  className={`cursor-pointer transition-colors ${
                    selectedListing?.id === listing.id ? "border-green-500 bg-green-50" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedListing(listing)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold line-clamp-2">{listing.title}</h3>
                      <Badge variant="secondary">{listing.type.charAt(0).toUpperCase() + listing.type.slice(1)}</Badge>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{listing.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-green-600">GH₵{listing.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-600">
                        {listing.bedrooms} bed • {listing.bathrooms} bath
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for map - in a real app, you'd integrate Google Maps or Mapbox */}
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map View</h3>
              <p className="text-gray-600 mb-4">This would show an interactive map with property markers</p>
              <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-lg">
                <h4 className="font-semibold mb-2">Map Features:</h4>
                <ul className="text-left text-sm text-gray-600 space-y-1">
                  <li>• Interactive property markers</li>
                  <li>• Cluster markers for dense areas</li>
                  <li>• Zoom and pan functionality</li>
                  <li>• Property details on marker click</li>
                  <li>• Search by drawing area</li>
                  <li>• Transit and amenity layers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Selected Property Popup */}
          {selectedListing && (
            <div className="absolute bottom-4 left-4 right-4">
              <Card className="shadow-lg">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{selectedListing.title}</h3>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedListing(null)}>
                      ×
                    </Button>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{selectedListing.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">
                      GH₵{selectedListing.price.toLocaleString()}
                    </span>
                    <div className="flex space-x-2">
                      <Link href={`/listings/${selectedListing.id}`}>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          View Details
                        </Button>
                      </Link>
                      <Button size="sm" variant="outline">
                        Contact Agent
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
