"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, Plus, Eye, MessageCircle, TrendingUp, Users, Settings } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface AgentListing {
  id: string
  title: string
  price: number
  location: string
  status: "active" | "pending" | "rented"
  views: number
  inquiries: number
  image: string
  createdAt: string
}

export default function AgentDashboard() {
  const [listings, setListings] = useState<AgentListing[]>([])
  const [stats, setStats] = useState({
    totalListings: 0,
    activeListings: 0,
    totalViews: 0,
    totalInquiries: 0,
  })

  useEffect(() => {
    loadAgentData()
  }, [])

  const loadAgentData = () => {
    // Mock data for agent listings
    const mockListings: AgentListing[] = [
      {
        id: "1",
        title: "Modern 2-Bedroom Apartment in East Legon",
        price: 1200,
        location: "East Legon, Accra",
        status: "active",
        views: 45,
        inquiries: 8,
        image: "/placeholder.svg?height=150&width=200",
        createdAt: "2024-01-15",
      },
      {
        id: "2",
        title: "Affordable 3-Bedroom House in Tema",
        price: 800,
        location: "Tema, Greater Accra",
        status: "rented",
        views: 32,
        inquiries: 12,
        image: "/placeholder.svg?height=150&width=200",
        createdAt: "2024-01-10",
      },
      {
        id: "3",
        title: "Luxury Villa in Airport Residential",
        price: 2500,
        location: "Airport Residential, Accra",
        status: "pending",
        views: 67,
        inquiries: 15,
        image: "/placeholder.svg?height=150&width=200",
        createdAt: "2024-01-12",
      },
    ]

    setListings(mockListings)
    setStats({
      totalListings: mockListings.length,
      activeListings: mockListings.filter((l) => l.status === "active").length,
      totalViews: mockListings.reduce((sum, l) => sum + l.views, 0),
      totalInquiries: mockListings.reduce((sum, l) => sum + l.inquiries, 0),
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "rented":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

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
              <Button variant="ghost" size="sm">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
              <Link href="/agent/listings/new">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Listing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Agent Dashboard</h1>
          <p className="text-gray-600">Manage your property listings and track performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Home className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">{stats.totalListings}</p>
                  <p className="text-gray-600">Total Listings</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">{stats.activeListings}</p>
                  <p className="text-gray-600">Active Listings</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Eye className="h-8 w-8 text-purple-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">{stats.totalViews}</p>
                  <p className="text-gray-600">Total Views</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-orange-500" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">{stats.totalInquiries}</p>
                  <p className="text-gray-600">Inquiries</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="listings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="listings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Property Listings</h2>
              <Link href="/agent/listings/new">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Listing
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <Card key={listing.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.title}
                      width={200}
                      height={150}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <Badge className={`absolute top-2 right-2 ${getStatusColor(listing.status)}`}>
                      {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{listing.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{listing.location}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-bold text-green-600">GH₵{listing.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {listing.views} views
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {listing.inquiries} inquiries
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Link href={`/agent/listings/${listing.id}/edit`} className="flex-1">
                        <Button size="sm" variant="outline" className="w-full bg-transparent">
                          Edit
                        </Button>
                      </Link>
                      <Link href={`/listings/${listing.id}`} className="flex-1">
                        <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <h2 className="text-2xl font-bold">Messages</h2>
            <Card>
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
                <p className="text-gray-600">Messages from potential tenants will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold">Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                  <CardDescription>Your listings performance this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Views</span>
                      <span className="font-semibold">{stats.totalViews}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Inquiries</span>
                      <span className="font-semibold">{stats.totalInquiries}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conversion Rate</span>
                      <span className="font-semibold">
                        {stats.totalViews > 0 ? ((stats.totalInquiries / stats.totalViews) * 100).toFixed(1) : 0}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Listings</CardTitle>
                  <CardDescription>Your most viewed properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {listings
                      .sort((a, b) => b.views - a.views)
                      .slice(0, 3)
                      .map((listing) => (
                        <div key={listing.id} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-sm line-clamp-1">{listing.title}</p>
                            <p className="text-xs text-gray-600">{listing.location}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-sm">{listing.views} views</p>
                            <p className="text-xs text-gray-600">{listing.inquiries} inquiries</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-2xl font-bold">Agent Profile</h2>
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your agent profile and verification status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Agent Name</label>
                    <p className="text-gray-900">Kwame Asante</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">License Number</label>
                    <p className="text-gray-900">RE-2024-001234</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <p className="text-gray-900">kwame.asante@example.com</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <p className="text-gray-900">+233 24 123 4567</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Verification Status</label>
                  <Badge className="ml-2 bg-green-100 text-green-800">Verified Agent</Badge>
                </div>
                <Button>Edit Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
