"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Heart, Share2, Filter, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Listing {
  id: string
  title: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  type: string
  images: string[]
  agent: {
    name: string
    verified: boolean
  }
  description: string
}

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([])
  const [filteredListings, setFilteredListings] = useState<Listing[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState("any")
  const [propertyType, setPropertyType] = useState("all")
  const [location, setLocation] = useState("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchListings()
  }, [])

  useEffect(() => {
    filterListings()
  }, [listings, searchTerm, priceRange, propertyType, location])

  const fetchListings = async () => {
    try {
      const response = await fetch("/api/listings")
      if (response.ok) {
        const data = await response.json()
        setListings(data)
      }
    } catch (error) {
      console.error("Error fetching listings:", error)
    } finally {
      setLoading(false)
    }
  }

  const filterListings = () => {
    let filtered = listings

    if (searchTerm) {
      filtered = filtered.filter(
        (listing) =>
          listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          listing.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (priceRange !== "any") {
      const [min, max] = priceRange.split("-").map(Number)
      filtered = filtered.filter((listing) => {
        if (max) {
          return listing.price >= min && listing.price <= max
        }
        return listing.price >= min
      })
    }

    if (propertyType !== "all") {
      filtered = filtered.filter((listing) => listing.type === propertyType)
    }

    if (location !== "all") {
      filtered = filtered.filter((listing) => listing.location.toLowerCase().includes(location.toLowerCase()))
    }

    setFilteredListings(filtered)
  }

  const mockListings: Listing[] = [
    {
      id: "1",
      title: "Modern 2-Bedroom Apartment in East Legon",
      price: 1200,
      location: "East Legon, Accra",
      bedrooms: 2,
      bathrooms: 2,
      area: 85,
      type: "apartment",
      images: ["/placeholder.svg?height=200&width=300"],
      agent: { name: "Kwame Asante", verified: true },
      description: "Beautiful modern apartment with great amenities",
    },
    {
      id: "2",
      title: "Affordable 3-Bedroom House in Tema",
      price: 800,
      location: "Tema, Greater Accra",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      type: "house",
      images: ["/placeholder.svg?height=200&width=300"],
      agent: { name: "Ama Osei", verified: true },
      description: "Perfect family home in a quiet neighborhood",
    },
    {
      id: "3",
      title: "Shared Accommodation in Kumasi",
      price: 300,
      location: "Kumasi, Ashanti Region",
      bedrooms: 1,
      bathrooms: 1,
      area: 40,
      type: "shared",
      images: ["/placeholder.svg?height=200&width=300"],
      agent: { name: "Kofi Mensah", verified: true },
      description: "Comfortable shared space for students and young professionals",
    },
    {
      id: "4",
      title: "Housing Cooperative in Takoradi",
      price: 600,
      location: "Takoradi, Western Region",
      bedrooms: 2,
      bathrooms: 1,
      area: 75,
      type: "cooperative",
      images: ["/placeholder.svg?height=200&width=300"],
      agent: { name: "Akosua Boateng", verified: true },
      description: "Community-owned housing with shared facilities",
    },
  ]

  const displayListings = loading ? [] : filteredListings.length > 0 ? filteredListings : mockListings

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">HomeFind Ghana</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/map">
                <Button variant="outline">Map View</Button>
              </Link>
              <Link href="/dashboard">
                <Button className="bg-green-600 hover:bg-green-700">Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by title or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Price</SelectItem>
                <SelectItem value="0-500">Under GH₵500</SelectItem>
                <SelectItem value="500-1000">GH₵500 - GH₵1,000</SelectItem>
                <SelectItem value="1000-2000">GH₵1,000 - GH₵2,000</SelectItem>
                <SelectItem value="2000">Above GH₵2,000</SelectItem>
              </SelectContent>
            </Select>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="shared">Shared</SelectItem>
                <SelectItem value="cooperative">Cooperative</SelectItem>
              </SelectContent>
            </Select>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="accra">Accra</SelectItem>
                <SelectItem value="kumasi">Kumasi</SelectItem>
                <SelectItem value="takoradi">Takoradi</SelectItem>
                <SelectItem value="tema">Tema</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{displayListings.length} Properties Found</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Listings Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                <CardContent className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayListings.map((listing) => (
              <Card key={listing.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={listing.images[0] || "/placeholder.svg"}
                    alt={listing.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Badge className="absolute top-2 left-2 bg-green-600">
                    {listing.type.charAt(0).toUpperCase() + listing.type.slice(1)}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg line-clamp-2">{listing.title}</h3>
                    <span className="text-xl font-bold text-green-600">GH₵{listing.price.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{listing.location}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {listing.bedrooms} bed
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {listing.bathrooms} bath
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {listing.area}m²
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600">by {listing.agent.name}</span>
                      {listing.agent.verified && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <Link href={`/listings/${listing.id}`}>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {displayListings.length === 0 && !loading && (
          <div className="text-center py-12">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
